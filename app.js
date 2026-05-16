const TEAM_FLAGS = {
  'Argentina': '🇦🇷', 'Brasil': '🇧🇷', 'Colombia': '🇨🇴', 'Ecuador': '🇪🇨', 'Uruguay': '🇺🇾', 'Venezuela': '🇻🇪',
  'Alemania': '🇩🇪', 'España': '🇪🇸', 'Francia': '🇫🇷', 'Inglaterra': '🏴', 'Portugal': '🇵🇹', 'Países Bajos': '🇳🇱',
  'Bélgica': '🇧🇪', 'Italia': '🇮🇹', 'Austria': '🇦🇹', 'Suiza': '🇨🇭', 'Turquía': '🇹🇷', 'Escocia': '🏴',
  'Hungría': '🇭🇺', 'Eslovakia': '🇸🇰', 'Dinamarca': '🇩🇰', 'Serbia': '🇷🇸', 'México': '🇲🇽', 'Estados Unidos': '🇺🇸',
  'Canadá': '🇨🇦', 'Costa Rica': '🇨🇷', 'Honduras': '🇭🇳', 'Jamaica': '🇯🇲', 'Japón': '🇯🇵', 'Corea del Sur': '🇰🇷',
  'Arabia Saudita': '🇸🇦', 'Australia': '🇦🇺', 'Irán': '🇮🇷', 'Irak': '🇮🇶', 'Uzbekistán': '🇺🇿', 'Jordania': '🇯🇴',
  'Marruecos': '🇲🇦', 'Senegal': '🇸🇳', 'Egipto': '🇪🇬', 'Nigeria': '🇳🇬', 'Camerún': '🇨🇲', 'Mali': '🇲🇱',
  'Sudáfrica': '🇿🇦', 'Costa de Marfil': '🇨🇮', 'R.D. Congo': '🇨🇩', 'Nueva Zelanda': '🇳🇿', 'TBD-1': '🏳️', 'TBD-2': '🏳️'
};

const CONFEDERATIONS = {
  CONMEBOL: ['Argentina', 'Brasil', 'Colombia', 'Ecuador', 'Uruguay', 'Venezuela'],
  UEFA: ['Alemania', 'España', 'Francia', 'Inglaterra', 'Portugal', 'Países Bajos', 'Bélgica', 'Italia', 'Austria', 'Suiza', 'Turquía', 'Escocia', 'Hungría', 'Eslovakia', 'Dinamarca', 'Serbia'],
  CONCACAF: ['México', 'Estados Unidos', 'Canadá', 'Costa Rica', 'Honduras', 'Jamaica'],
  AFC: ['Japón', 'Corea del Sur', 'Arabia Saudita', 'Australia', 'Irán', 'Irak', 'Uzbekistán', 'Jordania'],
  CAF: ['Marruecos', 'Senegal', 'Egipto', 'Nigeria', 'Camerún', 'Mali', 'Sudáfrica', 'Costa de Marfil', 'R.D. Congo'],
  OFC: ['Nueva Zelanda'],
  Repechaje: ['TBD-1', 'TBD-2']
};

const GROUPS = {
  A: ['México', 'Estados Unidos', 'Canadá', 'Venezuela'],
  B: ['Argentina', 'Marruecos', 'Australia', 'Jamaica'],
  C: ['España', 'Brasil', 'Japón', 'Costa Rica'],
  D: ['Francia', 'Nigeria', 'Corea del Sur', 'Honduras'],
  E: ['Alemania', 'Colombia', 'Arabia Saudita', 'Eslovakia'],
  F: ['Inglaterra', 'Uruguay', 'Irán', 'Dinamarca'],
  G: ['Portugal', 'Senegal', 'Irak', 'Austria'],
  H: ['Países Bajos', 'Egipto', 'Ecuador', 'Serbia'],
  I: ['Bélgica', 'Mali', 'Uzbekistán', 'Suiza'],
  J: ['Italia', 'Camerún', 'Jordania', 'Turquía'],
  K: ['Sudáfrica', 'Costa de Marfil', 'Nueva Zelanda', 'Hungría'],
  L: ['R.D. Congo', 'Escocia', 'TBD-1', 'TBD-2']
};

const KNOCKOUT = {
  'Ronda de 32': [['1A', '2B'], ['1B', '2A'], ['1C', '2D'], ['1D', '2C'], ['1E', '2F'], ['1F', '2E'], ['1G', '2H'], ['1H', '2G'], ['1I', '2J'], ['1J', '2I'], ['1K', '2L'], ['1L', '2K'], ['1A', '2C'], ['1B', '2D'], ['1E', '2G'], ['1F', '2H']],
  'Octavos': [['Ganador M1', 'Ganador M2'], ['Ganador M3', 'Ganador M4'], ['Ganador M5', 'Ganador M6'], ['Ganador M7', 'Ganador M8'], ['Ganador M9', 'Ganador M10'], ['Ganador M11', 'Ganador M12'], ['Ganador M13', 'Ganador M14'], ['Ganador M15', 'Ganador M16']],
  'Cuartos': [['Ganador O1', 'Ganador O2'], ['Ganador O3', 'Ganador O4'], ['Ganador O5', 'Ganador O6'], ['Ganador O7', 'Ganador O8']],
  'Semifinales': [['Ganador C1', 'Ganador C2'], ['Ganador C3', 'Ganador C4']],
  'Final': [['Ganador S1', 'Ganador S2']]
};

function getFlag(team) {
  return TEAM_FLAGS[team] || '🏳️';
}

function teamMarkup(team, away = false) {
  return `
    <div class="team ${away ? 'away' : ''}">
      <span class="flag-emoji" aria-hidden="true">${getFlag(team)}</span>
      <span class="team-name">${team}</span>
    </div>`;
}

function createMatches(teams) {
  const matches = [];
  for (let i = 0; i < teams.length; i += 1) {
    for (let j = i + 1; j < teams.length; j += 1) {
      matches.push([teams[i], teams[j]]);
    }
  }
  return matches;
}

function renderSummary() {
  const totalTeams = Object.values(GROUPS).flat().length;
  const totalMatches = Object.values(GROUPS).reduce((acc, teams) => acc + createMatches(teams).length, 0);
  const summary = [
    ['12', 'grupos'],
    [String(totalTeams), 'selecciones'],
    [String(totalMatches), 'partidos de grupos'],
    ['31', 'partidos KO estimados']
  ];

  document.getElementById('summaryGrid').innerHTML = summary.map(([value, label]) => `
    <div class="summary-item">
      <strong>${value}</strong>
      <span>${label}</span>
    </div>
  `).join('');
}

function renderGroups() {
  const groupsGrid = document.getElementById('groupsGrid');
  groupsGrid.innerHTML = Object.entries(GROUPS).map(([group, teams]) => {
    const teamPills = teams.map(team => `<span class="pill"><span class="flag-emoji" aria-hidden="true">${getFlag(team)}</span> ${team}</span>`).join('');
    const matches = createMatches(teams).map(([home, away]) => `
      <div class="match-row">
        ${teamMarkup(home)}
        <span class="versus">VS</span>
        ${teamMarkup(away, true)}
      </div>
    `).join('');

    return `
      <article class="group-card">
        <div class="group-head">
          <strong>Grupo ${group}</strong>
          <span>${teams.length} equipos</span>
        </div>
        <div class="group-teams">${teamPills}</div>
        <div class="group-matches">${matches}</div>
      </article>
    `;
  }).join('');
}

function renderKnockout() {
  const knockoutGrid = document.getElementById('knockoutGrid');
  knockoutGrid.innerHTML = Object.entries(KNOCKOUT).map(([round, matches]) => `
    <div class="ko-column">
      <h3>${round}</h3>
      ${matches.map((slots, index) => `
        <div class="ko-match">
          <div class="ko-label">Partido ${index + 1}</div>
          ${slots.map(slot => `
            <div class="ko-slot">
              <span>${slot}</span>
              <span class="pill">clasificación</span>
            </div>
          `).join('')}
        </div>
      `).join('')}
    </div>
  `).join('');
}

function renderHostsBars() {
  const data = [
    { label: 'Estados Unidos', value: 16, flag: '🇺🇸' },
    { label: 'México', value: 10, flag: '🇲🇽' },
    { label: 'Canadá', value: 6, flag: '🇨🇦' }
  ];
  const max = Math.max(...data.map(item => item.value));
  document.getElementById('hostsBars').innerHTML = data.map(item => `
    <div class="host-bar">
      <div class="host-bar-head">
        <span>${item.flag} ${item.label}</span>
        <strong>${item.value} ciudades/slots visuales</strong>
      </div>
      <div class="bar-track">
        <div class="bar-fill" style="width:${(item.value / max) * 100}%"></div>
      </div>
    </div>
  `).join('');
}

function renderConfedChart() {
  const ctx = document.getElementById('confedChart');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: Object.keys(CONFEDERATIONS),
      datasets: [{
        data: Object.values(CONFEDERATIONS).map(list => list.length),
        backgroundColor: ['#ffcb52', '#4aa3ff', '#41d6c3', '#ff5ea8', '#8b7cff', '#4fe07a', '#96a7bc'],
        borderWidth: 0,
        hoverOffset: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#edf4ff',
            padding: 18,
            font: { family: 'Inter' }
          }
        }
      },
      cutout: '62%'
    }
  });
}

renderSummary();
renderGroups();
renderKnockout();
renderHostsBars();
renderConfedChart();
