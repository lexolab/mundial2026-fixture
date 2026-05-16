/* ── flags ── */
const F = {
  'Argentina':'🇦🇷','Brasil':'🇧🇷','Colombia':'🇨🇴','Ecuador':'🇪🇨','Uruguay':'🇺🇾','Venezuela':'🇻🇪',
  'Alemania':'🇩🇪','España':'🇪🇸','Francia':'🇫🇷','Inglaterra':'🏴','Portugal':'🇵🇹','Países Bajos':'🇳🇱',
  'Bélgica':'🇧🇪','Italia':'🇮🇹','Austria':'🇦🇹','Suiza':'🇨🇭','Turquía':'🇹🇷','Escocia':'🏴',
  'Hungría':'🇭🇺','Eslovakia':'🇸🇰','Dinamarca':'🇩🇰','Serbia':'🇷🇸','México':'🇲🇽','Estados Unidos':'🇺🇸',
  'Canadá':'🇨🇦','Costa Rica':'🇨🇷','Honduras':'🇭🇳','Jamaica':'🇯🇲','Japón':'🇯🇵','Corea del Sur':'🇰🇷',
  'Arabia Saudita':'🇸🇦','Australia':'🇦🇺','Irán':'🇮🇷','Irak':'🇮🇶','Uzbekistán':'🇺🇿','Jordania':'🇯🇴',
  'Marruecos':'🇲🇦','Senegal':'🇸🇳','Egipto':'🇪🇬','Nigeria':'🇳🇬','Camerún':'🇨🇲','Mali':'🇲🇱',
  'Sudáfrica':'🇿🇦','Costa de Marfil':'🇨🇮','R.D. Congo':'🇨🇩','Nueva Zelanda':'🇳🇿','TBD-1':'🏳️','TBD-2':'🏳️'
};
const flag = t => F[t] || '🏳️';

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

/* ── Groups with full match schedule ── */
const GROUPS = {
  A: {
    teams: ['México','Estados Unidos','Canadá','Venezuela'],
    matches: [
      { home:'México', away:'Estados Unidos', date:'11 Jun', time:'18:00', venue:V.AZTECA },
      { home:'Canadá', away:'Venezuela',      date:'12 Jun', time:'15:00', venue:V.BMO },
      { home:'México', away:'Canadá',         date:'18 Jun', time:'18:00', venue:V.AZTECA },
      { home:'Estados Unidos', away:'Venezuela', date:'18 Jun', time:'21:00', venue:V.ATT },
      { home:'México', away:'Venezuela',      date:'25 Jun', time:'21:00', venue:V.AKRON },
      { home:'Estados Unidos', away:'Canadá', date:'25 Jun', time:'21:00', venue:V.METLIFE },
    ]
  },
  B: {
    teams: ['Argentina','Marruecos','Australia','Jamaica'],
    matches: [
      { home:'Argentina', away:'Marruecos',   date:'12 Jun', time:'12:00', venue:V.METLIFE },
      { home:'Australia', away:'Jamaica',     date:'12 Jun', time:'18:00', venue:V.SOFI },
      { home:'Argentina', away:'Australia',   date:'18 Jun', time:'15:00', venue:V.METLIFE },
      { home:'Marruecos', away:'Jamaica',     date:'18 Jun', time:'18:00', venue:V.HARD },
      { home:'Argentina', away:'Jamaica',     date:'25 Jun', time:'21:00', venue:V.HARD },
      { home:'Marruecos', away:'Australia',   date:'25 Jun', time:'21:00', venue:V.SOFI },
    ]
  },
  C: {
    teams: ['España','Brasil','Japón','Costa Rica'],
    matches: [
      { home:'España',   away:'Brasil',       date:'13 Jun', time:'15:00', venue:V.SOFI },
      { home:'Japón',    away:'Costa Rica',   date:'13 Jun', time:'18:00', venue:V.LEVIS },
      { home:'España',   away:'Japón',        date:'19 Jun', time:'15:00', venue:V.ATT },
      { home:'Brasil',   away:'Costa Rica',   date:'19 Jun', time:'18:00', venue:V.METLIFE },
      { home:'España',   away:'Costa Rica',   date:'26 Jun', time:'21:00', venue:V.SOFI },
      { home:'Brasil',   away:'Japón',        date:'26 Jun', time:'21:00', venue:V.LINCOLN },
    ]
  },
  D: {
    teams: ['Francia','Nigeria','Corea del Sur','Honduras'],
    matches: [
      { home:'Francia',  away:'Nigeria',      date:'13 Jun', time:'21:00', venue:V.HARD },
      { home:'Corea del Sur', away:'Honduras', date:'14 Jun', time:'12:00', venue:V.LUMEN },
      { home:'Francia',  away:'Corea del Sur', date:'19 Jun', time:'18:00', venue:V.METLIFE },
      { home:'Nigeria',  away:'Honduras',     date:'19 Jun', time:'21:00', venue:V.MERCED },
      { home:'Francia',  away:'Honduras',     date:'26 Jun', time:'21:00', venue:V.ATT },
      { home:'Nigeria',  away:'Corea del Sur', date:'26 Jun', time:'21:00', venue:V.MERCED },
    ]
  },
  E: {
    teams: ['Alemania','Colombia','Arabia Saudita','Eslovakia'],
    matches: [
      { home:'Alemania', away:'Colombia',     date:'14 Jun', time:'15:00', venue:V.METLIFE },
      { home:'Arabia Saudita', away:'Eslovakia', date:'14 Jun', time:'18:00', venue:V.NRG },
      { home:'Alemania', away:'Arabia Saudita', date:'20 Jun', time:'15:00', venue:V.GILLETTE },
      { home:'Colombia', away:'Eslovakia',    date:'20 Jun', time:'18:00', venue:V.ARROW },
      { home:'Alemania', away:'Eslovakia',    date:'27 Jun', time:'21:00', venue:V.METLIFE },
      { home:'Colombia', away:'Arabia Saudita', date:'27 Jun', time:'21:00', venue:V.NRG },
    ]
  },
  F: {
    teams: ['Inglaterra','Uruguay','Irán','Dinamarca'],
    matches: [
      { home:'Inglaterra', away:'Uruguay',    date:'14 Jun', time:'21:00', venue:V.LINCOLN },
      { home:'Irán',     away:'Dinamarca',    date:'15 Jun', time:'12:00', venue:V.NRG },
      { home:'Inglaterra', away:'Irán',       date:'20 Jun', time:'21:00', venue:V.HARD },
      { home:'Uruguay',  away:'Dinamarca',    date:'20 Jun', time:'18:00', venue:V.BC },
      { home:'Inglaterra', away:'Dinamarca',  date:'27 Jun', time:'21:00', venue:V.METLIFE },
      { home:'Uruguay',  away:'Irán',         date:'27 Jun', time:'21:00', venue:V.BC },
    ]
  },
  G: {
    teams: ['Portugal','Senegal','Irak','Austria'],
    matches: [
      { home:'Portugal', away:'Senegal',      date:'15 Jun', time:'15:00', venue:V.LEVIS },
      { home:'Irak',     away:'Austria',      date:'15 Jun', time:'18:00', venue:V.LINCOLN },
      { home:'Portugal', away:'Irak',         date:'21 Jun', time:'15:00', venue:V.SOFI },
      { home:'Senegal',  away:'Austria',      date:'21 Jun', time:'18:00', venue:V.MERCED },
      { home:'Portugal', away:'Austria',      date:'26 Jun', time:'21:00', venue:V.LEVIS },
      { home:'Senegal',  away:'Irak',         date:'26 Jun', time:'21:00', venue:V.MERCED },
    ]
  },
  H: {
    teams: ['Países Bajos','Egipto','Ecuador','Serbia'],
    matches: [
      { home:'Países Bajos', away:'Egipto',   date:'15 Jun', time:'21:00', venue:V.METLIFE },
      { home:'Ecuador', away:'Serbia',        date:'16 Jun', time:'12:00', venue:V.ATT },
      { home:'Países Bajos', away:'Ecuador',  date:'21 Jun', time:'18:00', venue:V.LINCOLN },
      { home:'Egipto',   away:'Serbia',       date:'21 Jun', time:'21:00', venue:V.ATT },
      { home:'Países Bajos', away:'Serbia',   date:'27 Jun', time:'21:00', venue:V.METLIFE },
      { home:'Egipto',   away:'Ecuador',      date:'27 Jun', time:'21:00', venue:V.ATT },
    ]
  },
  I: {
    teams: ['Bélgica','Mali','Uzbekistán','Suiza'],
    matches: [
      { home:'Bélgica',  away:'Mali',         date:'16 Jun', time:'15:00', venue:V.MERCED },
      { home:'Uzbekistán', away:'Suiza',      date:'16 Jun', time:'18:00', venue:V.BC },
      { home:'Bélgica',  away:'Uzbekistán',   date:'22 Jun', time:'15:00', venue:V.LINCOLN },
      { home:'Mali',     away:'Suiza',        date:'22 Jun', time:'18:00', venue:V.GILLETTE },
      { home:'Bélgica',  away:'Suiza',        date:'27 Jun', time:'21:00', venue:V.HARD },
      { home:'Mali',     away:'Uzbekistán',   date:'27 Jun', time:'21:00', venue:V.BC },
    ]
  },
  J: {
    teams: ['Italia','Camerún','Jordania','Turquía'],
    matches: [
      { home:'Italia',   away:'Camerún',      date:'16 Jun', time:'21:00', venue:V.LINCOLN },
      { home:'Jordania', away:'Turquía',      date:'17 Jun', time:'12:00', venue:V.ATT },
      { home:'Italia',   away:'Jordania',     date:'22 Jun', time:'18:00', venue:V.METLIFE },
      { home:'Camerún',  away:'Turquía',      date:'22 Jun', time:'21:00', venue:V.ARROW },
      { home:'Italia',   away:'Turquía',      date:'27 Jun', time:'21:00', venue:V.METLIFE },
      { home:'Camerún',  away:'Jordania',     date:'27 Jun', time:'21:00', venue:V.ARROW },
    ]
  },
  K: {
    teams: ['Sudáfrica','Costa de Marfil','Nueva Zelanda','Hungría'],
    matches: [
      { home:'Sudáfrica', away:'Costa de Marfil', date:'17 Jun', time:'15:00', venue:V.MERCED },
      { home:'Nueva Zelanda', away:'Hungría',     date:'17 Jun', time:'18:00', venue:V.LUMEN },
      { home:'Sudáfrica', away:'Nueva Zelanda',   date:'22 Jun', time:'21:00', venue:V.MERCED },
      { home:'Costa de Marfil', away:'Hungría',   date:'22 Jun', time:'21:00', venue:V.BC },
      { home:'Sudáfrica', away:'Hungría',         date:'27 Jun', time:'21:00', venue:V.ATT },
      { home:'Costa de Marfil', away:'Nueva Zelanda', date:'27 Jun', time:'21:00', venue:V.LUMEN },
    ]
  },
  L: {
    teams: ['R.D. Congo','Escocia','TBD-1','TBD-2'],
    matches: [
      { home:'R.D. Congo', away:'Escocia',   date:'17 Jun', time:'21:00', venue:V.METLIFE },
      { home:'TBD-1',   away:'TBD-2',        date:'18 Jun', time:'12:00', venue:V.BBVA },
      { home:'R.D. Congo', away:'TBD-1',     date:'23 Jun', time:'15:00', venue:V.HARD },
      { home:'Escocia', away:'TBD-2',        date:'23 Jun', time:'18:00', venue:V.LEVIS },
      { home:'R.D. Congo', away:'TBD-2',     date:'27 Jun', time:'21:00', venue:V.MERCED },
      { home:'Escocia', away:'TBD-1',        date:'27 Jun', time:'21:00', venue:V.LEVIS },
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
      if (target === 'bracket') observeCards('.ko-match');
      if (target === 'sedes') observeCards('.sede-card');
      if (target === 'grupos') observeCards('.group-card');
    }, 50);
  });
});

/* ── Init ── */
renderGroups();
renderBracket();
renderVenues();
