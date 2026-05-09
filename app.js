'use strict';

/* ── Data ─────────────────────────────────────────────────────────── */

const PATHWAYS = [
  {
    id: 'canada',
    flag: '🇨🇦',
    name: 'Canada CS / Data Science',
    scores: { career: 9, cost: 8, visa: 9, academic: 8, entrepreneur: 7, backup: 8 },
    risk: 'Low',
    riskClass: 'risk-lo',
    detail: {
      fit: [
        'Co-op programs (Waterloo, UBC, U of T) give 12–18 months paid work experience built into the degree',
        'Post-Graduation Work Permit (PGWP) offers up to 3 years of open work authorization after graduation',
        'Express Entry → PR pathway is accessible after work experience — strongest long-term immigration option',
        'Growing tech hubs in Toronto and Vancouver directly match CS / Data Science demand'
      ],
      tradeoffs: [
        'International tuition is CA$25k–$40k/yr — still substantial; scholarship options are limited compared to US',
        'CS prestige rankings are slightly below top US schools for global employer recognition',
        'Waterloo CS admission is highly competitive — need strong academics and extracurriculars',
        'Weather and distance from Japan family is a lifestyle trade-off worth factoring in'
      ],
      risks: [
        'PGWP policy changes: Canadian government has tightened rules — verify current eligibility before applying',
        'Currency risk: CAD/JPY fluctuation affects real cost; model multiple exchange rate scenarios',
        'Toronto and Vancouver housing costs can significantly exceed tuition budgets',
        'Check Lester B. Pearson (U of T) and Schulich Leader deadlines — both require early application'
      ],
      next: 'Research UBC Science, University of Waterloo CS, and U of T Engineering admissions requirements. Check Lester B. Pearson Scholarship deadline (early November). Confirm English score cutoffs (TOEFL iBT 100+ for most programs).'
    }
  },
  {
    id: 'us',
    flag: '🇺🇸',
    name: 'US CS / Data Science',
    scores: { career: 10, cost: 5, visa: 6, academic: 10, entrepreneur: 9, backup: 5 },
    risk: 'High',
    riskClass: 'risk-hi',
    detail: {
      fit: [
        'World-leading CS programs (MIT, Stanford, CMU, UC Berkeley) offer the highest career ceiling globally',
        'Silicon Valley access and startup culture are uniquely aligned with entrepreneurship goals',
        'OPT + 3-year STEM extension gives up to 3 years post-graduation work authorization',
        'Alumni networks and venture capital access are unmatched — key for starting a tech business'
      ],
      tradeoffs: [
        'Tuition can reach US$60k–$80k/yr — financial burden is very high without substantial scholarship or aid',
        'Need-blind financial aid for international students is rare (MIT, Harvard, Amherst are exceptions)',
        'H-1B visa lottery after OPT is uncertain — long-term US residency is not guaranteed',
        'Admission to top-15 CS programs is extremely competitive (sub-10% acceptance rates)'
      ],
      risks: [
        'H-1B visa uncertainty makes the long-term US career path risky — this is a structural issue, not a short-term one',
        'Without financial aid, total cost could exceed US$300k — large debt without PR path is a major downside',
        'Political environment around international student immigration has shifted — monitor policy changes',
        'Must build a full school list (3 reach / 3 match / 3 safety) — applying only to top-10 is too risky'
      ],
      next: 'Identify 3 reach / 3 match / 3 safety US schools. Research need-blind financial aid policies specifically for international students. Register for SAT and begin essay prep. Check TOEFL minimums per school (most require 100+ iBT).'
    }
  },
  {
    id: 'uk',
    flag: '🇬🇧',
    name: 'UK Business / Analytics',
    scores: { career: 8, cost: 6, visa: 6, academic: 8, entrepreneur: 7, backup: 7 },
    risk: 'Medium',
    riskClass: 'risk-md',
    detail: {
      fit: [
        'LSE, Imperial, Warwick offer strong Business Analytics and Computing programs with global prestige',
        'UK Graduate Route visa allows 2 years of post-graduation work (important: confirm it remains policy)',
        '3-year undergraduate degree means one year less tuition and living costs compared to US or Canada',
        'Strong European and global financial/consulting network from London-based programs'
      ],
      tradeoffs: [
        'Graduate Route visa (2 years) is shorter than Canada PGWP (up to 3 years) or US OPT STEM (3 years)',
        'UK tech job market is smaller and more London-concentrated — fewer options outside the capital',
        'UCAS system requires early subject specialization — limited flexibility to pivot majors mid-degree',
        'High cost of living in London can significantly raise total cost beyond tuition alone'
      ],
      risks: [
        'UK immigration policy is actively subject to change — verify Graduate Route visa status at application time',
        'Post-Brexit rules affect EU mobility; verify any cross-border work assumptions',
        'Business Analytics programs vary widely in technical depth — research curriculum carefully before applying',
        'IELTS Academic 7.0+ required by most top programs; budget time for IELTS prep separate from TOEFL'
      ],
      next: 'Research LSE (BSc Management), Imperial College Computing, and Warwick Data Science programs. Confirm IELTS vs TOEFL acceptance. UCAS deadline is January 15 for most courses — timeline is tighter than US applications.'
    }
  },
  {
    id: 'australia',
    flag: '🇦🇺',
    name: 'Australia CS / Commerce',
    scores: { career: 8, cost: 7, visa: 8, academic: 8, entrepreneur: 7, backup: 8 },
    risk: 'Low',
    riskClass: 'risk-lo',
    detail: {
      fit: [
        'Post-Study Work Visa gives 2–4 years of work rights (length depends on field and study location)',
        'University of Melbourne, UNSW, ANU offer strong CS/Commerce double-degree structures',
        'Melbourne and Sydney tech sectors are growing — demand for CS and Data Science graduates is real',
        'Australia-Japan ties and Pacific timezone make it a realistic mid-point between goals'
      ],
      tradeoffs: [
        'Tech industry is smaller than US/Canada — fewer top-tier global company offices and startup density',
        'Starting salaries in Australia for CS graduates are lower than equivalent US roles',
        'International tuition is AU$35k–$50k/yr — comparable to Canada, scholarship availability is limited',
        'Distance from Japan family is significant — flights are long and costly compared to Japan return'
      ],
      risks: [
        'Tech sector layoffs (2023–24) affected Sydney and Melbourne — research current market conditions before committing',
        'Permanent residency pathway requires points-based Skilled Independent visa — check occupation lists annually as they change',
        'Confirm that CS + Commerce double degree is available as a single combined program at target schools',
        'Regional vs. metropolitan study location affects Post-Study Work Visa length — verify current rules'
      ],
      next: 'Research University of Melbourne (Computing & Software Systems), UNSW (CS/Commerce double degree), and ANU (Computing dual). Check February vs. July intake options. Confirm IELTS/TOEFL requirements — most require Academic IELTS 6.5+ or TOEFL iBT 79+.'
    }
  },
  {
    id: 'japan',
    flag: '🇯🇵',
    name: 'Japan Return Option',
    scores: { career: 6, cost: 9, visa: 10, academic: 7, entrepreneur: 5, backup: 10 },
    risk: 'Very Low',
    riskClass: 'risk-vl',
    detail: {
      fit: [
        'Zero immigration friction — studying and working in Japan as a Japanese national has no visa risk at all',
        'National university tuition is approximately ¥535k/yr (~US$3,500) — dramatically lower than any other option',
        'Strong family support network reduces financial and emotional risk if other pathways do not materialize',
        'Japanese tech companies (Sony, Toyota, NTT, Rakuten) increasingly offer English-track roles for engineers'
      ],
      tradeoffs: [
        'Japanese university CS programs are generally ranked below top US, Canadian, or UK programs for global recognition',
        'Startup ecosystem in Japan is smaller and earlier-stage — fewer investor networks, less venture capital density',
        'Most top Japanese university programs are conducted in Japanese — English-medium options are limited',
        'Corporate culture in traditional Japanese firms can limit the entrepreneurship-oriented career arc you want'
      ],
      risks: [
        'This option carries a real psychological risk: treating it as an escape rather than a genuine backup may lead to drift',
        'English proficiency can plateau in a Japanese-language environment — deliberate effort needed to maintain it',
        'If the goal is building global technology businesses, a Japan-only base limits investor and partner access',
        'Verify which specific English-track programs exist: UTokyo GSC, Waseda SILS, APU have structured English options'
      ],
      next: 'Research University of Tokyo Global Science Course (GSC), Waseda SILS, and APU (Ritsumeikan Asia Pacific University) for English-medium CS programs. Treat Japan as a genuine strategic backup — not a fallback — and define the specific trigger conditions that would make it the right choice.'
    }
  }
];

const PRIORITIES = [
  { key: 'career',      label: 'Career Fit',           value: 9 },
  { key: 'cost',        label: 'Cost Fit',              value: 8 },
  { key: 'visa',        label: 'Visa Fit',              value: 9 },
  { key: 'academic',    label: 'Academic Fit',          value: 7 },
  { key: 'entrepreneur',label: 'Future Flexibility',     value: 8 },
  { key: 'backup',      label: 'Backup Strength',       value: 7 }
];

const TIMELINES = {
  '10': {
    intro: 'A rough planning sequence for an international student currently in Grade 10. Use this to explore options early and avoid last-minute application stress.',
    groups: [
      {
        title: 'Grade 10 — Exploration & Early Planning',
        items: [
          { cat: 'application', type: 'Research',      task: 'Explore possible majors and career directions',          month: 'Now' },
          { cat: 'application', type: 'Research',      task: 'Start comparing target countries',                       month: 'Now – Spring' },
          { cat: 'exam',        type: 'AP Exam',       task: 'Plan Grade 11 course choices / AP subjects',             month: 'Decide by Jun' },
          { cat: 'test',        type: 'Language Test', task: 'Begin TOEFL / IELTS awareness if English test needed',   month: 'Awareness now' },
          { cat: 'application', type: 'Research',      task: 'Build an early university research list',                month: 'Spring – Summer' },
        ]
      },
      {
        title: 'Grade 11 — Shortlist, Testing, and Essays',
        items: [
          { cat: 'application', type: 'Research',      task: 'Confirm target countries and major direction',           month: 'Sep – Oct (G11)' },
          { cat: 'application', type: 'Research',      task: 'Build a realistic university shortlist',                 month: 'Sep – Nov (G11)' },
          { cat: 'test',        type: 'Language Test', task: 'Check TOEFL / IELTS requirements',                       month: 'Oct – Nov (G11)' },
          { cat: 'test',        type: 'Test',          task: 'Plan SAT attempt if useful',                             month: 'Oct or Nov (G11)' },
          { cat: 'essay',       type: 'Essay',         task: 'Draft personal statement / essays in spring or summer',  month: 'Spring – Summer (G11)' },
        ]
      },
      {
        title: 'Grade 12 — Applications & Deadlines',
        items: [
          { cat: 'application', type: 'Research',      task: 'Finalize university list',                               month: 'Aug – Sep (G12)' },
          { cat: 'test',        type: 'Test',          task: 'Complete or retake tests if needed',                     month: 'Sep – Oct (G12)' },
          { cat: 'essay',       type: 'Essay',         task: 'Finalize essays',                                        month: 'Sep – Oct (G12)' },
          { cat: 'scholarship', type: 'Scholarship',   task: 'Submit scholarship applications',                        month: 'Oct – Dec (G12)' },
          { cat: 'application', type: 'Deadline',      task: 'Track application deadlines',                            month: 'Nov – Feb (G12)' },
        ]
      }
    ]
  },
  '11': {
    intro: 'A rough planning sequence for an international student currently in Grade 11. Use this to turn research into a shortlist, test plan, essay timeline, and Grade 12 application plan.',
    groups: [
      {
        title: 'Grade 11 — Current Focus',
        items: [
          { cat: 'application', type: 'Research',      task: 'Confirm target countries and major direction',           month: 'Sep – Oct' },
          { cat: 'application', type: 'Research',      task: 'Build or refine target university list',                 month: 'Sep – Nov' },
          { cat: 'test',        type: 'Language Test', task: 'Check TOEFL / IELTS requirements per school',            month: 'Oct – Nov' },
          { cat: 'test',        type: 'Test',          task: 'Plan SAT attempt if useful',                             month: 'Oct or Nov' },
          { cat: 'exam',        type: 'AP Exam',       task: 'Confirm AP exam plan',                                   month: 'Decide by Dec' },
        ]
      },
      {
        title: 'Grade 11 — Spring / Summer',
        items: [
          { cat: 'test',        type: 'Language Test', task: 'Take TOEFL / IELTS first attempt if needed',             month: 'Jun or Aug' },
          { cat: 'test',        type: 'Test',          task: 'Take SAT first attempt if useful',                       month: 'Mar or Jun' },
          { cat: 'exam',        type: 'AP Exam',       task: 'Complete AP exams',                                      month: 'May' },
          { cat: 'essay',       type: 'Essay',         task: 'Draft personal statement / essays',                      month: 'Jul – Aug' },
          { cat: 'scholarship', type: 'Scholarship',   task: 'Research scholarships',                                  month: 'Identify by Dec' },
        ]
      },
      {
        title: 'Grade 12 — Applications & Deadlines',
        items: [
          { cat: 'application', type: 'Research',      task: 'Finalize university list',                               month: 'Aug – Sep' },
          { cat: 'test',        type: 'Test',          task: 'Retake SAT / TOEFL / IELTS if needed',                   month: 'Sep – Oct' },
          { cat: 'essay',       type: 'Essay',         task: 'Finalize essays and personal statements',                month: 'Sep – Oct' },
          { cat: 'scholarship', type: 'Scholarship',   task: 'Submit scholarship applications',                        month: 'Oct – Dec' },
          { cat: 'application', type: 'Deadline',      task: 'Track Early Decision / Early Action deadlines',          month: 'Nov 1 – 15' },
          { cat: 'application', type: 'Deadline',      task: 'Track UCAS deadline if applying to the UK',              month: 'Jan 15' },
          { cat: 'application', type: 'Deadline',      task: 'Track Regular Decision / Canada / Australia deadlines',  month: 'Jan 1 – Feb 1' },
        ]
      }
    ]
  },
  '12': {
    intro: 'A rough planning sequence for an international student currently in Grade 12. Use this to finalize applications, testing, essays, scholarships, and deadlines.',
    groups: [
      {
        title: 'Grade 12 — Final Application Push',
        items: [
          { cat: 'application', type: 'Research',      task: 'Finalize university list',                               month: 'Aug – Sep' },
          { cat: 'test',        type: 'Language Test', task: 'Complete or retake TOEFL / IELTS if needed',             month: 'Sep (if needed)' },
          { cat: 'test',        type: 'Test',          task: 'SAT final attempt if needed',                            month: 'Aug or Oct' },
          { cat: 'essay',       type: 'Essay',         task: 'Finalize essays and personal statements',                month: 'Sep – Oct' },
          { cat: 'scholarship', type: 'Scholarship',   task: 'Submit scholarship applications',                        month: 'Oct – Dec' },
        ]
      },
      {
        title: 'Key Deadlines',
        items: [
          { cat: 'application', type: 'Deadline',      task: 'Track Early Decision / Early Action deadlines',          month: 'Nov 1 – 15' },
          { cat: 'application', type: 'Deadline',      task: 'Track UCAS deadline if applying to the UK',              month: 'Jan 15' },
          { cat: 'application', type: 'Deadline',      task: 'Track Regular Decision / Canada deadlines',              month: 'Jan 1 – Feb 1' },
          { cat: 'application', type: 'Deadline',      task: 'Track Australia application windows if relevant',        month: 'Nov – Jan' },
          { cat: 'application', type: 'Research',      task: 'Prepare backup options',                                 month: 'Nov onwards' },
        ]
      }
    ]
  }
};

/* ── State ─────────────────────────────────────────────────────────── */
let selectedId = null;

/* ── Helpers ───────────────────────────────────────────────────────── */
function chipClass(n) {
  if (n >= 8) return 'chip-hi';
  if (n >= 6) return 'chip-mid';
  return 'chip-lo';
}

function computeOverall(pathway) {
  let wSum = 0, wScore = 0;
  PRIORITIES.forEach(p => {
    wSum   += p.value;
    wScore += pathway.scores[p.key] * p.value;
  });
  return (wScore / wSum).toFixed(1);
}

function overallColor(val) {
  const v = parseFloat(val);
  if (v >= 8)  return '#166534';
  if (v >= 7)  return '#854D0E';
  return '#991B1B';
}

/* ── Render: Priorities ────────────────────────────────────────────── */
function renderPriorities() {
  const el = document.getElementById('priorities-list');
  el.innerHTML = PRIORITIES.map(p => `
    <div class="pri-item">
      <div class="pri-row">
        <span class="pri-label">${p.label}</span>
        <span class="pri-val" id="pv-${p.key}">${p.value}<span class="pri-val-denom">/10</span></span>
      </div>
      <input type="range" min="1" max="10" value="${p.value}"
        oninput="onPriority('${p.key}', this.value)">
    </div>
  `).join('');
}

function onPriority(key, val) {
  const p = PRIORITIES.find(x => x.key === key);
  if (p) { p.value = +val; }
  document.getElementById('pv-' + key).innerHTML = val + '<span class="pri-val-denom">/10</span>';
  renderTable();
}

/* ── Render: Table ─────────────────────────────────────────────────── */
function renderTable() {
  const keys = ['career','cost','visa','academic','entrepreneur','backup'];

  const sorted = [...PATHWAYS].sort(
    (a, b) => parseFloat(computeOverall(b)) - parseFloat(computeOverall(a))
  );

  document.getElementById('pathway-tbody').innerHTML = sorted.map(p => {
    const ov = computeOverall(p);
    const sel = p.id === selectedId ? 'selected' : '';
    return `
      <tr class="${sel}" onclick="selectRoute('${p.id}')">
        <td><span class="route-name">${p.flag} ${p.name}</span></td>
        ${keys.map(k => `
          <td><span class="chip ${chipClass(p.scores[k])}">${p.scores[k]}</span></td>
        `).join('')}
        <td><span class="risk ${p.riskClass}">${p.risk}</span></td>
        <td><span class="overall" style="color:${overallColor(ov)}">${ov}</span></td>
      </tr>
    `;
  }).join('');
}

/* ── Render: Explanation ───────────────────────────────────────────── */
function renderExplanation(id) {
  const p = PATHWAYS.find(x => x.id === id);
  if (!p) return;

  const badge = document.getElementById('selected-badge');
  badge.textContent = `${p.flag} ${p.name}`;
  badge.classList.remove('hidden');

  const body = document.getElementById('explanation-body');
  body.className = 'explanation-grid';
  body.innerHTML = `
    <div class="exp-block">
      <h3>Why This Route Fits</h3>
      <ul>${p.detail.fit.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>
    <div class="exp-block warn">
      <h3>Main Trade-offs</h3>
      <ul>${p.detail.tradeoffs.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>
    <div class="exp-block risk">
      <h3>Risks to Check</h3>
      <ul>${p.detail.risks.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>
    <div class="exp-block next">
      <h3>Best Next Action</h3>
      <p class="exp-next-text">${p.detail.next}</p>
    </div>
  `;

  document.getElementById('section-explanation')
    .scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* ── Select route ──────────────────────────────────────────────────── */
function selectRoute(id) {
  selectedId = id;
  renderTable();
  renderExplanation(id);
}

/* ── Render: Timeline ──────────────────────────────────────────────── */
function renderTimeline() {
  const grade = document.getElementById('p-grade').value;
  const tl = TIMELINES[grade];
  document.getElementById('timeline-intro').textContent = tl.intro;
  document.getElementById('timeline-body').innerHTML = tl.groups.map(grp => `
    <div>
      <div class="tl-year-label">${grp.title}</div>
      <div class="tl-items">
        ${grp.items.map(it => `
          <div class="tl-card ${it.cat}">
            <div class="tl-type">${it.type}</div>
            <div class="tl-task">${it.task}</div>
            <div class="tl-month">${it.month}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function onGradeChange() {
  renderTimeline();
}

/* ── Decision Log ──────────────────────────────────────────────────── */
function saveDecision() {
  const data = {
    decision:  document.getElementById('l-decision').value,
    reason:    document.getElementById('l-reason').value,
    concerns:  document.getElementById('l-concerns').value,
    tradeoffs: document.getElementById('l-tradeoffs').value,
    sources:   document.getElementById('l-sources').value,
    next:      document.getElementById('l-next').value,
    route:     selectedId,
    savedAt:   new Date().toLocaleString()
  };
  localStorage.setItem('pdc_decision_log', JSON.stringify(data));
  setStatus('Decision saved locally. ✓');
}

function loadDecision() {
  const raw = localStorage.getItem('pdc_decision_log');
  if (!raw) { setStatus('No saved decision found in this browser.'); return; }
  const d = JSON.parse(raw);
  document.getElementById('l-decision').value  = d.decision  || '';
  document.getElementById('l-reason').value    = d.reason    || '';
  document.getElementById('l-concerns').value  = d.concerns  || '';
  document.getElementById('l-tradeoffs').value = d.tradeoffs || '';
  document.getElementById('l-sources').value   = d.sources   || '';
  document.getElementById('l-next').value      = d.next      || '';
  if (d.route) selectRoute(d.route);
  setStatus(`Loaded — saved on ${d.savedAt}`);
}

function exportSummary() {
  const g = id => document.getElementById(id).value;
  const route = PATHWAYS.find(p => p.id === selectedId);

  const lines = [
    'PATHWAY DECISION CONSOLE — SUMMARY EXPORT',
    `Generated: ${new Date().toLocaleString()}`,
    '='.repeat(52),
    '',
    'STUDENT PROFILE',
    `Future Goal:      ${g('p-goal')}`,
    `Majors:           ${g('p-majors')}`,
    `Countries:        ${g('p-countries')}`,
    `Grade:            Grade ${g('p-grade')}`,
    `Budget:           ${g('p-budget')}`,
    `Risk Tolerance:   ${g('p-risk')}`,
    `Visa Importance:  ${g('p-visa')}`,
    `Family/Language:  ${g('p-family')}`,
    '',
    '='.repeat(52),
    'DECISION PRIORITIES (1–10)',
    ...PRIORITIES.map(p => `  ${p.label.padEnd(26)} ${p.value}/10`),
    '',
    '='.repeat(52),
    `SELECTED ROUTE: ${route ? route.flag + ' ' + route.name : '(none selected)'}`,
  ];

  if (route) {
    lines.push('');
    lines.push('Why it fits:');
    route.detail.fit.forEach(t => lines.push('  • ' + t));
    lines.push('');
    lines.push('Trade-offs:');
    route.detail.tradeoffs.forEach(t => lines.push('  • ' + t));
    lines.push('');
    lines.push('Risks to check:');
    route.detail.risks.forEach(t => lines.push('  • ' + t));
    lines.push('');
    lines.push('Best next action:');
    lines.push('  ' + route.detail.next);
  }

  lines.push('');
  lines.push('='.repeat(52));
  lines.push('DECISION LOG');
  lines.push(`Current Decision:  ${g('l-decision')}`);
  lines.push(`Reason:            ${g('l-reason')}`);
  lines.push(`Concerns:          ${g('l-concerns')}`);
  lines.push(`Trade-offs:        ${g('l-tradeoffs')}`);
  lines.push(`Sources Checked:   ${g('l-sources')}`);
  lines.push(`Next Action:       ${g('l-next')}`);

  const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
  const url  = URL.createObjectURL(blob);
  const a    = Object.assign(document.createElement('a'), { href: url, download: 'pathway-decision-summary.txt' });
  a.click();
  URL.revokeObjectURL(url);
  setStatus('Summary exported as .txt file ✓');
}

function setStatus(msg) {
  const el = document.getElementById('log-status');
  el.textContent = msg;
  clearTimeout(el._t);
  el._t = setTimeout(() => { el.textContent = ''; }, 5000);
}

/* ── Friend Feedback ───────────────────────────────────────────────── */
function updateRatingDisplay(val) {
  document.getElementById('fb-rating-val').innerHTML =
    val + '<span class="pri-val-denom">/10</span>';
}

function saveFeedback() {
  const data = {
    useful:    document.getElementById('fb-useful').value,
    confusing: document.getElementById('fb-confusing').value,
    struggle:  document.getElementById('fb-struggle').value,
    explain:   document.getElementById('fb-explain').value,
    counselor: document.getElementById('fb-counselor').value,
    rating:    document.getElementById('fb-rating').value,
    savedAt:   new Date().toLocaleString()
  };
  localStorage.setItem('pdc_feedback', JSON.stringify(data));
  setFbStatus('Feedback saved locally. ✓');
}

function loadFeedback() {
  const raw = localStorage.getItem('pdc_feedback');
  if (!raw) { setFbStatus('No saved feedback found in this browser.'); return; }
  const d = JSON.parse(raw);
  document.getElementById('fb-useful').value    = d.useful    || '';
  document.getElementById('fb-confusing').value = d.confusing || '';
  document.getElementById('fb-struggle').value  = d.struggle  || '';
  document.getElementById('fb-explain').value   = d.explain   || '';
  document.getElementById('fb-counselor').value = d.counselor || '';
  const rating = d.rating || '7';
  document.getElementById('fb-rating').value = rating;
  updateRatingDisplay(rating);
  setFbStatus(`Loaded — saved on ${d.savedAt}`);
}

function exportFeedback() {
  const g = id => document.getElementById(id).value;
  const lines = [
    'PATHWAY DECISION CONSOLE — FRIEND FEEDBACK EXPORT',
    `Generated: ${new Date().toLocaleString()}`,
    '='.repeat(52),
    '',
    '1. What felt useful?',
    `   ${g('fb-useful') || '(not filled)'}`,
    '',
    '2. What felt confusing?',
    `   ${g('fb-confusing') || '(not filled)'}`,
    '',
    '3. What decision are you currently struggling with?',
    `   ${g('fb-struggle') || '(not filled)'}`,
    '',
    '4. What information would you want this app to explain better?',
    `   ${g('fb-explain') || '(not filled)'}`,
    '',
    '5. Would you use this before or after meeting a counselor? Why?',
    `   ${g('fb-counselor') || '(not filled)'}`,
    '',
    `6. Overall usefulness rating: ${g('fb-rating')}/10`,
  ];
  const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
  const url  = URL.createObjectURL(blob);
  const a    = Object.assign(document.createElement('a'), { href: url, download: 'pathway-feedback.txt' });
  a.click();
  URL.revokeObjectURL(url);
  setFbStatus('Feedback exported as .txt file ✓');
}

function setFbStatus(msg) {
  const el = document.getElementById('fb-status');
  el.textContent = msg;
  clearTimeout(el._t);
  el._t = setTimeout(() => { el.textContent = ''; }, 5000);
}

/* ── Init ──────────────────────────────────────────────────────────── */
renderPriorities();
renderTable();
renderTimeline();
