const SCOREBOARD_URL = 'https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard';
const STANDINGS_URL = 'https://site.web.api.espn.com/apis/v2/sports/soccer/fifa.world/standings';
const REFRESH_MS = 60_000;

const FLAG = {
  ARG:'🇦🇷', ALG:'🇩🇿', AUS:'🇦🇺', AUT:'🇦🇹', BEL:'🇧🇪', BIH:'🇧🇦', BRA:'🇧🇷', CAN:'🇨🇦', CPV:'🇨🇻', CRO:'🇭🇷',
  CUW:'🇨🇼', CZE:'🇨🇿', ECU:'🇪🇨', EGY:'🇪🇬', ENG:'🏴', ESP:'🇪🇸', FRA:'🇫🇷', GHA:'🇬🇭', HAI:'🇭🇹', IRQ:'🇮🇶',
  IRN:'🇮🇷', JOR:'🇯🇴', JPN:'🇯🇵', KOR:'🇰🇷', MAR:'🇲🇦', MEX:'🇲🇽', NED:'🇳🇱', NOR:'🇳🇴', NZL:'🇳🇿', PAN:'🇵🇦',
  PAR:'🇵🇾', POR:'🇵🇹', QAT:'🇶🇦', RSA:'🇿🇦', SCO:'🏴', SEN:'🇸🇳', SUI:'🇨🇭', SWE:'🇸🇪', TUN:'🇹🇳', TUR:'🇹🇷',
  URU:'🇺🇾', USA:'🇺🇸', UZB:'🇺🇿', CIV:'🇨🇮', COD:'🇨🇩'
};
const flag = abbr => FLAG[abbr] || '🏳️';

const VENUES = [
  { flag:'🇺🇸', city:'New York / New Jersey', stadium:'MetLife Stadium', cap:82500 },
  { flag:'🇺🇸', city:'Los Angeles', stadium:'SoFi Stadium', cap:70240 },
  { flag:'🇺🇸', city:'Dallas', stadium:'AT&T Stadium', cap:80000 },
  { flag:'🇺🇸', city:'San Francisco', stadium:"Levi's Stadium", cap:68500 },
  { flag:'🇺🇸', city:'Miami', stadium:'Hard Rock Stadium', cap:65326 },
  { flag:'🇺🇸', city:'Seattle', stadium:'Lumen Field', cap:68740 },
  { flag:'🇺🇸', city:'Atlanta', stadium:'Mercedes-Benz Stadium', cap:71000 },
  { flag:'🇺🇸', city:'Houston', stadium:'NRG Stadium', cap:72220 },
  { flag:'🇺🇸', city:'Kansas City', stadium:'Arrowhead Stadium', cap:76416 },
  { flag:'🇺🇸', city:'Filadelfia', stadium:'Lincoln Financial Field', cap:69796 },
  { flag:'🇺🇸', city:'Boston', stadium:'Gillette Stadium', cap:65878 },
  { flag:'🇨🇦', city:'Toronto', stadium:'BMO Field', cap:30000 },
  { flag:'🇨🇦', city:'Vancouver', stadium:'BC Place', cap:54500 },
  { flag:'🇲🇽', city:'Ciudad de México', stadium:'Estadio Azteca', cap:87523 },
  { flag:'🇲🇽', city:'Guadalajara', stadium:'Estadio Akron', cap:49850 },
  { flag:'🇲🇽', city:'Monterrey', stadium:'Estadio BBVA', cap:53500 },
];

const KNOCKOUT = [
  { round: 'Ronda de 32', matches: [['1A','2B'],['1B','2A'],['1C','2D'],['1D','2C'],['1E','2F'],['1F','2E'],['1G','2H'],['1H','2G'],['1I','2J'],['1J','2I'],['1K','2L'],['1L','2K'],['1A','3C/E/F/H/I'],['1D','3B/E/F/I/J'],['1G','3A/E/H/I/J'],['1L','3E/H/I/J/K']] },
  { round: 'Octavos', matches: [['Gan. M1','Gan. M2'],['Gan. M3','Gan. M4'],['Gan. M5','Gan. M6'],['Gan. M7','Gan. M8'],['Gan. M9','Gan. M10'],['Gan. M11','Gan. M12'],['Gan. M13','Gan. M14'],['Gan. M15','Gan. M16']] },
  { round: 'Cuartos de Final', matches: [['Gan. O1','Gan. O2'],['Gan. O3','Gan. O4'],['Gan. O5','Gan. O6'],['Gan. O7','Gan. O8']] },
  { round: 'Semifinales', matches: [['Gan. C1','Gan. C2'],['Gan. C3','Gan. C4']] },
  { round: '🏆 FINAL', matches: [['Gan. S1','Gan. S2']], isFinal: true }
];

let teamToGroup = new Map();

const fmtDate = iso => new Date(iso).toLocaleString('es-ES', {
  day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'UTC'
}).replace('.', '');

function statusLabel(status) {
  const state = status?.type?.state;
  if (state === 'in') return status.type.shortDetail || 'En juego';
  if (state === 'post') return 'Finalizado';
  return status?.type?.shortDetail || 'Próximo';
}

function scoreLabel(comp) {
  const state = comp?.status?.type?.state;
  const home = comp?.competitors?.find(c => c.homeAway === 'home');
  const away = comp?.competitors?.find(c => c.homeAway === 'away');
  if (state === 'post' || state === 'in') return `${home?.score ?? '0'} - ${away?.score ?? '0'}`;
  return new Date(comp.date).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'UTC' });
}

function eventToCardData(event) {
  const comp = event.competitions?.[0];
  if (!comp) return null;
  const home = comp.competitors.find(c => c.homeAway === 'home');
  const away = comp.competitors.find(c => c.homeAway === 'away');
  if (!home || !away) return null;
  const homeTeam = home.team;
  const awayTeam = away.team;
  const group = teamToGroup.get(homeTeam.displayName) || teamToGroup.get(awayTeam.displayName) || 'Grupo por confirmar';
  return {
    group,
    homeName: homeTeam.displayName,
    awayName: awayTeam.displayName,
    homeAbbr: homeTeam.abbreviation,
    awayAbbr: awayTeam.abbreviation,
    status: statusLabel(comp.status),
    score: scoreLabel(comp),
    date: fmtDate(event.date),
    venue: comp.venue?.fullName || 'Sede por confirmar',
    state: comp.status?.type?.state || 'pre'
  };
}

function renderMatchCards(targetId, items, emptyText, extraClass = '') {
  const grid = document.getElementById(targetId);
  if (!items.length) {
    grid.innerHTML = `<article class="result-card result-empty visible"><div class="result-meta">${emptyText}</div></article>`;
    return;
  }
  grid.innerHTML = items.map(m => `
    <article class="result-card ${extraClass}">
      <div class="result-top">
        <span class="result-group">${m.group}</span>
        <span class="result-status ${m.state === 'in' ? 'live-status' : ''}">${m.status}</span>
      </div>
      <div class="result-main">
        <div class="result-team">
          <span class="flag">${flag(m.homeAbbr)}</span>
          <span>${m.homeName}</span>
        </div>
        <div class="result-score">${m.score}</div>
        <div class="result-team away">
          <span class="flag">${flag(m.awayAbbr)}</span>
          <span>${m.awayName}</span>
        </div>
      </div>
      <div class="result-meta">📅 ${m.date} UTC · 📍 ${m.venue}</div>
    </article>
  `).join('');
  observeCards(`#${targetId} .result-card`);
}

async function loadScoreboard() {
  const data = await fetch(SCOREBOARD_URL).then(r => r.json());
  const cards = (data.events || []).map(eventToCardData).filter(Boolean);
  const completed = cards.filter(c => c.state === 'post');
  const active = cards.filter(c => c.state !== 'post');
  renderMatchCards('resultsGrid', completed, 'Todavía no hay finales confirmadas para mostrar.');
  renderMatchCards('todayGrid', active, 'No hay partidos en vivo o próximos cargados ahora mismo.', 'upcoming-card');
  const stamp = document.getElementById('liveStamp');
  if (stamp) stamp.textContent = `Auto · ${new Date().toLocaleString('es-ES', { day:'2-digit', month:'short', hour:'2-digit', minute:'2-digit', hour12:false, timeZone:'UTC' }).replace('.', '')} UTC`;
}

function statValue(entry, name) {
  return entry.stats?.find(s => s.name === name)?.displayValue || '0';
}

function renderGroupsFromStandings(data) {
  const grid = document.getElementById('groupsGrid');
  const groups = data.children || [];
  teamToGroup = new Map();
  groups.forEach(group => group.standings?.entries?.forEach(entry => teamToGroup.set(entry.team.displayName, group.name)));

  grid.innerHTML = groups.map(group => {
    const entries = group.standings?.entries || [];
    const pills = entries.map(entry => `
      <span class="team-pill"><span class="flag">${flag(entry.team.abbreviation)}</span>${entry.team.displayName}</span>
    `).join('');

    const rows = entries.map((entry, idx) => `
      <tr>
        <td><span class="standing-rank">${idx + 1}</span></td>
        <td class="team-cell"><span class="flag">${flag(entry.team.abbreviation)}</span><span>${entry.team.shortDisplayName || entry.team.displayName}</span></td>
        <td>${statValue(entry, 'points')}</td>
        <td>${statValue(entry, 'gamesPlayed')}</td>
        <td>${statValue(entry, 'wins')}</td>
        <td>${statValue(entry, 'ties')}</td>
        <td>${statValue(entry, 'losses')}</td>
        <td>${statValue(entry, 'pointDifferential')}</td>
      </tr>
    `).join('');

    return `
      <article class="group-card visible" data-group="${group.name.replace('Group ', '')}">
        <div class="group-head">
          <span class="group-label">${group.name}</span>
          <span style="font-size:0.8rem;color:var(--muted2)">datos automáticos ESPN</span>
        </div>
        <div class="group-teams-row">${pills}</div>
        <div class="group-table-wrap">
          <table class="group-table">
            <thead>
              <tr><th>#</th><th>Equipo</th><th>Pts</th><th>JJ</th><th>G</th><th>E</th><th>P</th><th>DG</th></tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </article>
    `;
  }).join('');
}

async function loadStandings() {
  const data = await fetch(STANDINGS_URL).then(r => r.json());
  renderGroupsFromStandings(data);
}

function renderBracket() {
  const container = document.getElementById('bracketColumns');
  container.innerHTML = '';
  KNOCKOUT.forEach(({ round, matches, isFinal }) => {
    const col = document.createElement('div');
    col.className = `bracket-col${isFinal ? ' final-glow' : ''}`;
    col.innerHTML = `<div class="bracket-col-title">${round}</div>${matches.map(slots => `
      <div class="ko-match">
        ${slots.map((s, i) => `<div class="ko-slot${s.startsWith('Gan.') || s.includes('3') ? ' tbd' : ''}"><span class="ko-slot-num">${i === 0 ? '🏠' : '✈️'}</span><span>${s}</span></div>`).join('')}
      </div>
    `).join('')}`;
    container.appendChild(col);
  });
  observeCards('.ko-match');
}

function renderVenues() {
  const grid = document.getElementById('sedesGrid');
  const maxCap = Math.max(...VENUES.map(v => v.cap));
  grid.innerHTML = VENUES.map(v => `
    <div class="sede-card">
      <div class="sede-country">${v.flag}</div>
      <div class="sede-city">${v.city}</div>
      <div class="sede-stadium">${v.stadium}</div>
      <div class="sede-capacity">⚽ Cap. ${v.cap.toLocaleString()} personas</div>
      <div class="sede-bar"><div class="sede-bar-fill" style="width:${Math.round((v.cap / maxCap) * 100)}%"></div></div>
    </div>
  `).join('');
  observeCards('.sede-card');
}

function observeCards(selector) {
  const nodes = document.querySelectorAll(selector);
  if (!window.IntersectionObserver) {
    nodes.forEach(el => el.classList.add('visible'));
    return;
  }
  const obs = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 40);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });
  nodes.forEach(el => obs.observe(el));
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(`tab-${target}`).classList.add('active');
  });
});

async function refreshAll() {
  try {
    await loadStandings();
    await loadScoreboard();
  } catch (error) {
    console.error('Error loading live data', error);
    document.getElementById('resultsGrid').innerHTML = '<article class="result-card result-empty visible"><div class="result-meta">No pude cargar los datos automáticos en este momento.</div></article>';
    document.getElementById('todayGrid').innerHTML = '';
  }
}

renderBracket();
renderVenues();
refreshAll();
setInterval(refreshAll, REFRESH_MS);
