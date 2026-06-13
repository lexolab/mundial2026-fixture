/* ── flags ── */
const F = {
  'Argentina':'🇦🇷','Brasil':'🇧🇷','Colombia':'🇨🇴','Ecuador':'🇪🇨','Uruguay':'🇺🇾','Paraguay':'🇵🇾',
  'Alemania':'🇩🇪','España':'🇪🇸','Francia':'🇫🇷','Inglaterra':'🏴','Portugal':'🇵🇹','Países Bajos':'🇳🇱',
  'Bélgica':'🇧🇪','Austria':'🇦🇹','Suiza':'🇨🇭','Turquía':'🇹🇷','Escocia':'🏴','Croacia':'🇭🇷',
  'México':'🇲🇽','Estados Unidos':'🇺🇸','Canadá':'🇨🇦','Bosnia y Herzegovina':'🇧🇦','Qatar':'🇶🇦','Czechia':'🇨🇿',
  'Japón':'🇯🇵','Corea del Sur':'🇰🇷','Arabia Saudita':'🇸🇦','Australia':'🇦🇺','Irán':'🇮🇷','Irak':'🇮🇶',
  'Uzbekistán':'🇺🇿','Jordania':'🇯🇴','Marruecos':'🇲🇦','Senegal':'🇸🇳','Egipto':'🇪🇬','Sudáfrica':'🇿🇦',
  'Costa de Marfil':'🇨🇮','R.D. Congo':'🇨🇩','Nueva Zelanda':'🇳🇿','Haití':'🇭🇹','Curazao':'🇨🇼','Suecia':'🇸🇪',
  'Túnez':'🇹🇳','Cabo Verde':'🇨🇻','Noruega':'🇳🇴','Argelia':'🇩🇿','Ghana':'🇬🇭','Panamá':'🇵🇦','TBD-1':'🏳️','TBD-2':'🏳️'
};
const flag = t => F[t] || '🏳️';

const LIVE_RESULTS = [
  {
    group: 'Grupo A',
    home: 'México',
    away: 'Sudáfrica',
    score: '2 - 0',
    status: 'Finalizado',
    date: '11 Jun 2026',
    venue: 'Estadio Azteca, CDMX'
  },
  {
    group: 'Grupo A',
    home: 'Corea del Sur',
    away: 'Czechia',
    score: '2 - 1',
    status: 'Finalizado',
    date: '11 Jun 2026',
    venue: 'Guadalajara Stadium'
  },
  {
    group: 'Grupo B',
    home: 'Canadá',
    away: 'Bosnia y Herzegovina',
    score: '1 - 1',
    status: 'Finalizado',
    date: '12 Jun 2026',
    venue: 'BMO Field, Toronto'
  },
  {
    group: 'Grupo D',
    home: 'Estados Unidos',
    away: 'Paraguay',
    score: '4 - 1',
    status: 'Finalizado',
    date: '12 Jun 2026',
    venue: 'SoFi Stadium, Los Angeles'
  }
];

const TODAY_MATCHES = [
  {
    group: 'Grupo B',
    home: 'Qatar',
    away: 'Suiza',
    score: '19:00',
    status: 'Hoy',
    date: '13 Jun 2026',
    venue: "Levi's Stadium, San Francisco"
  },
  {
    group: 'Grupo C',
    home: 'Brasil',
    away: 'Marruecos',
    score: '22:00',
    status: 'Hoy',
    date: '13 Jun 2026',
    venue: 'MetLife Stadium, New York/NJ'
  },
  {
    group: 'Grupo C',
    home: 'Haití',
    away: 'Escocia',
    score: '16:00',
    status: 'Hoy',
    date: '13 Jun 2026',
    venue: 'Gillette Stadium, Boston'
  },
  {
    group: 'Grupo E',
    home: 'Alemania',
    away: 'Curazao',
    score: '14 Jun',
    status: 'Próximo',
    date: '14 Jun 2026',
    venue: 'NRG Stadium, Houston'
  }
];

/* ── Venues ── */
const V = {
  AZTECA: 'Estadio Azteca, CDMX', AKRON: 'Estadio Akron, Guadalajara',
  BBVA: 'Estadio BBVA, Monterrey', BMO: 'BMO Field, Toronto',
  BC: 'BC Place, Vancouver', METLIFE: 'MetLife Stadium, New York/NJ',
  SOFI: 'SoFi Stadium, Los Angeles', LEVIS: "Levi's Stadium, San Francisco",
  LUMEN: 'Lumen Field, Seattle', ATT: 'AT&T Stadium, Dallas',
  MERCED: 'Mercedes-Benz Stadium, Atlanta', HARD: 'Hard Rock Stadium, Miami',
  ARROW: 'Arrowhead Stadium, Kansas City', NRG: 'NRG Stadium, Houston',
  LINCOLN: 'Lincoln Financial Field, Filadelfia', GILLETTE: 'Gillette Stadium, Boston'
};

const M = (home, away, date = 'Por confirmar', time = '--:--', venue = 'Sede por confirmar') => ({ home, away, date, time, venue });

/* ── Real groups ── */
const GROUPS = {
  A: {
    teams: ['México','Corea del Sur','Czechia','Sudáfrica'],
    matches: [
      M('México','Sudáfrica','11 Jun','15:00','Estadio Azteca, CDMX'),
      M('Corea del Sur','Czechia','11 Jun','18:00','Guadalajara Stadium'),
      M('México','Corea del Sur','19 Jun','01:00','Guadalajara Stadium'),
      M('Sudáfrica','Czechia','13 Jun','16:00','Atlanta Stadium'),
      M('México','Czechia'),
      M('Sudáfrica','Corea del Sur')
    ]
  },
  B: {
    teams: ['Canadá','Bosnia y Herzegovina','Qatar','Suiza'],
    matches: [
      M('Canadá','Bosnia y Herzegovina','12 Jun','19:00','BMO Field, Toronto'),
      M('Qatar','Suiza','13 Jun','19:00',V.LEVIS),
      M('Canadá','Qatar','13 Jun','22:00',V.BC),
      M('Suiza','Bosnia y Herzegovina','18 Jun','19:00',V.SOFI),
      M('Canadá','Suiza'),
      M('Bosnia y Herzegovina','Qatar')
    ]
  },
  C: {
    teams: ['Brasil','Marruecos','Haití','Escocia'],
    matches: [
      M('Brasil','Marruecos','13 Jun','22:00',V.METLIFE),
      M('Haití','Escocia','13 Jun','16:00',V.GILLETTE),
      M('Brasil','Haití'),
      M('Marruecos','Escocia','13 Jun','22:00',V.GILLETTE),
      M('Brasil','Escocia'),
      M('Marruecos','Haití')
    ]
  },
  D: {
    teams: ['Estados Unidos','Paraguay','Australia','Turquía'],
    matches: [
      M('Estados Unidos','Paraguay','12 Jun','19:00',V.SOFI),
      M('Australia','Turquía'),
      M('Estados Unidos','Australia','18 Jun','19:00',V.LUMEN),
      M('Paraguay','Turquía'),
      M('Estados Unidos','Turquía'),
      M('Paraguay','Australia')
    ]
  },
  E: {
    teams: ['Alemania','Curazao','Costa de Marfil','Ecuador'],
    matches: [
      M('Alemania','Curazao','14 Jun','13:00',V.NRG),
      M('Costa de Marfil','Ecuador'),
      M('Alemania','Costa de Marfil'),
      M('Curazao','Ecuador'),
      M('Alemania','Ecuador'),
      M('Curazao','Costa de Marfil')
    ]
  },
  F: {
    teams: ['Países Bajos','Japón','Suecia','Túnez'],
    matches: [
      M('Países Bajos','Japón'),
      M('Suecia','Túnez'),
      M('Países Bajos','Suecia'),
      M('Japón','Túnez'),
      M('Países Bajos','Túnez'),
      M('Japón','Suecia')
    ]
  },
  G: {
    teams: ['Bélgica','Egipto','Irán','Nueva Zelanda'],
    matches: [
      M('Bélgica','Egipto'),
      M('Irán','Nueva Zelanda'),
      M('Bélgica','Irán'),
      M('Egipto','Nueva Zelanda'),
      M('Bélgica','Nueva Zelanda'),
      M('Egipto','Irán')
    ]
  },
  H: {
    teams: ['España','Cabo Verde','Arabia Saudita','Uruguay'],
    matches: [
      M('España','Cabo Verde'),
      M('Arabia Saudita','Uruguay'),
      M('España','Arabia Saudita'),
      M('Cabo Verde','Uruguay'),
      M('España','Uruguay'),
      M('Cabo Verde','Arabia Saudita')
    ]
  },
  I: {
    teams: ['Francia','Senegal','Irak','Noruega'],
    matches: [
      M('Francia','Senegal'),
      M('Irak','Noruega','13 Jun','22:00',V.GILLETTE),
      M('Francia','Irak'),
      M('Senegal','Noruega'),
      M('Francia','Noruega'),
      M('Senegal','Irak')
    ]
  },
  J: {
    teams: ['Argentina','Argelia','Austria','Jordania'],
    matches: [
      M('Argentina','Argelia'),
      M('Austria','Jordania'),
      M('Argentina','Austria'),
      M('Argelia','Jordania'),
      M('Argentina','Jordania'),
      M('Argelia','Austria')
    ]
  },
  K: {
    teams: ['Portugal','R.D. Congo','Uzbekistán','Colombia'],
    matches: [
      M('Portugal','R.D. Congo'),
      M('Uzbekistán','Colombia','14 Jun','22:00','Mexico City Stadium'),
      M('Portugal','Uzbekistán'),
      M('R.D. Congo','Colombia'),
      M('Portugal','Colombia'),
      M('R.D. Congo','Uzbekistán')
    ]
  },
  L: {
    teams: ['Inglaterra','Croacia','Ghana','Panamá'],
    matches: [
      M('Inglaterra','Croacia'),
      M('Ghana','Panamá'),
      M('Inglaterra','Ghana'),
      M('Croacia','Panamá'),
      M('Inglaterra','Panamá'),
      M('Croacia','Ghana')
    ]
  }
};

/* ── Knockout ── */
const KNOCKOUT = [
  {
    round: 'Ronda de 32',
    matches: [
      ['1A','2B'],['1B','2A'],['1C','2D'],['1D','2C'],
      ['1E','2F'],['1F','2E'],['1G','2H'],['1H','2G'],
      ['1I','2J'],['1J','2I'],['1K','2L'],['1L','2K'],
      ['1A','2C'],['1B','2D'],['1E','2G'],['1F','2H'],
    ]
  },
  {
    round: 'Octavos',
    matches: [
      ['Gan. M1','Gan. M2'],['Gan. M3','Gan. M4'],
      ['Gan. M5','Gan. M6'],['Gan. M7','Gan. M8'],
      ['Gan. M9','Gan. M10'],['Gan. M11','Gan. M12'],
      ['Gan. M13','Gan. M14'],['Gan. M15','Gan. M16'],
    ]
  },
  {
    round: 'Cuartos de Final',
    matches: [
      ['Gan. O1','Gan. O2'],['Gan. O3','Gan. O4'],
      ['Gan. O5','Gan. O6'],['Gan. O7','Gan. O8'],
    ]
  },
  {
    round: 'Semifinales',
    matches: [
      ['Gan. C1','Gan. C2'],['Gan. C3','Gan. C4'],
    ]
  },
  {
    round: '🏆 FINAL',
    matches: [['Gan. S1','Gan. S2']],
    isFinal: true
  }
];

/* ── Venues data ── */
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

/* ────────────── Render ────────────── */
function renderResults() {
  const grid = document.getElementById('resultsGrid');
  grid.innerHTML = LIVE_RESULTS.map(m => `
    <article class="result-card">
      <div class="result-top">
        <span class="result-group">${m.group}</span>
        <span class="result-status">${m.status}</span>
      </div>
      <div class="result-main">
        <div class="result-team">
          <span class="flag">${flag(m.home)}</span>
          <span>${m.home}</span>
        </div>
        <div class="result-score">${m.score}</div>
        <div class="result-team away">
          <span class="flag">${flag(m.away)}</span>
          <span>${m.away}</span>
        </div>
      </div>
      <div class="result-meta">📅 ${m.date} · 📍 ${m.venue}</div>
    </article>
  `).join('');
  observeCards('.result-card');
}

function renderToday() {
  const grid = document.getElementById('todayGrid');
  grid.innerHTML = TODAY_MATCHES.map(m => `
    <article class="result-card upcoming-card">
      <div class="result-top">
        <span class="result-group">${m.group}</span>
        <span class="result-status">${m.status}</span>
      </div>
      <div class="result-main">
        <div class="result-team">
          <span class="flag">${flag(m.home)}</span>
          <span>${m.home}</span>
        </div>
        <div class="result-score">${m.score}</div>
        <div class="result-team away">
          <span class="flag">${flag(m.away)}</span>
          <span>${m.away}</span>
        </div>
      </div>
      <div class="result-meta">📅 ${m.date} · 📍 ${m.venue}</div>
    </article>
  `).join('');
  observeCards('.upcoming-card');
}

function renderGroups() {
  const grid = document.getElementById('groupsGrid');
  grid.innerHTML = '';
  for (const [grp, data] of Object.entries(GROUPS)) {
    const teamPills = data.teams.map(t =>
      `<span class="team-pill"><span class="flag">${flag(t)}</span>${t}</span>`
    ).join('');

    const matchRows = data.matches.map(m => `
      <div class="match-row">
        <div class="match-teams">
          <div class="team-side">
            <span class="flag">${flag(m.home)}</span>
            <span class="name">${m.home}</span>
          </div>
          <span class="vs-badge">VS</span>
          <div class="team-side away">
            <span class="flag">${flag(m.away)}</span>
            <span class="name">${m.away}</span>
          </div>
        </div>
        <div class="match-meta">
          <span class="date-chip">📅 ${m.date} · ${m.time}</span>
          <span class="dot-sep">·</span>
          <span class="venue-chip">📍 ${m.venue}</span>
        </div>
      </div>
    `).join('');

    const card = document.createElement('article');
    card.className = 'group-card';
    card.setAttribute('data-group', grp);
    card.innerHTML = `
      <div class="group-head">
        <span class="group-label">Grupo ${grp}</span>
        <span style="font-size:0.8rem;color:var(--muted2)">${data.teams.length} equipos · 6 partidos</span>
      </div>
      <div class="group-teams-row">${teamPills}</div>
      <div class="matches-list">${matchRows}</div>
    `;
    grid.appendChild(card);
  }
  observeCards('.group-card');
}

function renderBracket() {
  const container = document.getElementById('bracketColumns');
  container.innerHTML = '';
  KNOCKOUT.forEach(({ round, matches, isFinal }) => {
    const col = document.createElement('div');
    col.className = `bracket-col${isFinal ? ' final-glow' : ''}`;
    const matchCards = matches.map((slots, i) => `
      <div class="ko-match">
        ${slots.map((s, si) => `
          <div class="ko-slot${s.startsWith('Gan.') || s.startsWith('TBD') ? ' tbd' : ''}">
            <span class="ko-slot-num">${si === 0 ? '🏠' : '✈️'}</span>
            <span>${flag(s)} ${s}</span>
          </div>
        `).join('')}
      </div>
    `).join('');
    col.innerHTML = `<div class="bracket-col-title">${round}</div>${matchCards}`;
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
      <div class="sede-bar">
        <div class="sede-bar-fill" style="width:${Math.round((v.cap/maxCap)*100)}%"></div>
      </div>
    </div>
  `).join('');
  observeCards('.sede-card');
}

/* ── Intersection Observer for entrance animations ── */
function observeCards(selector) {
  if (!window.IntersectionObserver) {
    document.querySelectorAll(selector).forEach(el => el.classList.add('visible'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 55);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });
  document.querySelectorAll(selector).forEach(el => obs.observe(el));
}

/* ── Tab switching ── */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(`tab-${target}`).classList.add('active');
    // Re-trigger observers for newly visible section
    setTimeout(() => {
      if (target === 'resultados') observeCards('.result-card');
      if (target === 'bracket') observeCards('.ko-match');
      if (target === 'sedes') observeCards('.sede-card');
      if (target === 'grupos') observeCards('.group-card');
    }, 50);
  });
});

/* ── Init ── */
renderResults();
renderToday();
renderGroups();
renderBracket();
renderVenues();
