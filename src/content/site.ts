export const links = {
  github: 'https://github.com/areguig',
  linkedin: 'https://www.linkedin.com/in/areguig/',
}

export const principles = [
  { kicker: 'why', title: 'Solve a real problem', body: 'If nobody is annoyed by the problem today, nobody will use the fix tomorrow. Start from the people, not from the stack.' },
  { kicker: 'how', title: 'Right tool, right job', body: 'Sometimes an agent. Sometimes a SQL query and a cron job. Being fashionable is not a reason.' },
  { kicker: 'always', title: 'Automate the boring parts', body: 'Tests, pipelines, deployments, and now the repetitive work agents can take. People should spend their time thinking.' },
]

export const services = [
  {
    title: 'Agentic engineering',
    body: 'The plumbing that lets AI agents do real work, whatever the harness: Claude Code, OpenCode, OMP, Pi, Copilot. MCP servers, skills, hooks, shared memory. Small, fast tools that fit the way a team already works.',
    tags: ['AI harnesses', 'MCP', 'agent memory', 'Spring AI'],
  },
  {
    title: 'Backends that hold up',
    body: 'Java and Spring for over ten years. Clean APIs, event-driven services, data that stays correct. Nothing is trusted before it is tested, including code an agent wrote.',
    tags: ['Java / Spring', 'APIs', 'event-driven', 'test-first'],
  },
  {
    title: 'DevOps, for real',
    body: 'The part I love. Continuous integration and delivery, containers, Kubernetes, the cloud. Pipelines so boring that nobody talks about them anymore. That is the goal.',
    tags: ['CI/CD', 'Kubernetes', 'containers', 'GitOps'],
  },
  {
    title: 'Bringing the team along',
    body: 'A tool nobody uses is a demo. Coding dojos, pair and mob sessions, and agents fitted into the way a team already works, from the PO writing stories to QA.',
    tags: ['dojos', 'pair / mob', 'AI workflows'],
  },
]

export type Project = {
  name: string
  blurb: string
  stack: string[]
  href?: string
  repo?: string
  note?: string
}

export const featured: Project = {
  name: 'petit-poucet',
  blurb:
    'One memory for every AI harness I switch between. Claude Code, OpenCode, Codex, Cursor and Copilot all start each session with the same rules and verified facts. Plain Markdown in git, readable in Obsidian, served over MCP by a small Rust binary.',
  stack: ['Rust', 'MCP', 'Markdown + git', 'macOS · Linux · Windows'],
  href: 'https://areguig.github.io/petit-poucet/',
  repo: 'https://github.com/areguig/petit-poucet',
  note: 'The agent that rebuilt this site already knew me. That’s petit-poucet at work.',
}

export const projects: Project[] = [
  {
    name: 'Refinery',
    blurb: 'Planning poker for backlog refinement, made for the shared screen. Votes stay secret until the reveal. When they diverge, the highest and lowest voters explain.',
    stack: ['PocketBase', 'realtime', 'no accounts'],
    href: 'https://refinery.craftera.fr',
  },
  {
    name: 'scrawl',
    blurb: 'A scratchpad for AI agents. The agent publishes a single HTML page and gets a link to share. Reports, diagrams and prototypes stop dying in the terminal.',
    stack: ['Cloudflare Workers', 'D1', 'agents'],
    href: 'https://scrawl.akli-reguig.workers.dev/',
  },
  {
    name: 'Karate Studio',
    blurb: 'Karate as a service: write API tests in the browser, run them, read the report. Third rewrite. That tells you how much I like Karate.',
    stack: ['Java 21', 'Quarkus', 'Karate'],
    href: 'https://kaas.netlify.app/',
  },
]

export const lab = [
  { name: 'kagent', what: 'Tests that write themselves, and mend themselves when they break.', year: '2026' },
  { name: 'PodWhisperer', what: 'Asking a Kubernetes cluster what hurts, and getting a straight answer.', year: '2026' },
  { name: 'offline agents', what: 'Coding agents on open-weight models, with no cloud in the loop.', year: '2026' },
  { name: 'OCPP simulator', what: 'A car park full of make-believe chargers, talking to a real backend.', year: '2025' },
  { name: 'ChargePath', what: 'Long trips in an electric car, without the range anxiety.', year: '2025' },
  { name: 'arcade', what: 'The games of my childhood, rebuilt to find where vibe-coding breaks.', year: '2026' },
]

export const now = [
  'Shipping petit-poucet: one memory shared by every AI harness.',
  'Growing scrawl, so agents hand over a page instead of a wall of text.',
  'Teaching an agent to investigate production, and to remember only what it can prove.',
  'Bringing AI to teams that don’t write code.',
]

export const dayJobIntro =
  'Freelance since 2017, with Renault’s digital teams since 2019. Very different products, same habits: tests first, automated pipelines, and building blocks other teams can reuse.'

export const dayJob = [
  {
    when: '2019 →',
    title: 'Connected services',
    body: 'The backend behind a car-owner mobile app. Reactive, event-driven, in the cloud.',
    tags: ['reactive', 'events', 'cloud'],
  },
  {
    when: '2019 → 2024',
    title: 'Vehicle engineering data',
    body: 'APIs that describe how vehicles are built, for the people who design and make them.',
    tags: ['APIs', 'data', 'performance'],
  },
  {
    when: '2022 → 2026',
    title: 'EV charging',
    body: 'A charging platform, from the charger on the wall to the back office.',
    tags: ['OCPP', 'roaming', 'Kubernetes'],
  },
  {
    when: 'all along',
    title: 'Shared building blocks',
    body: 'Starters, scaffolds and libraries. Written once, used by many teams.',
    tags: ['Spring Boot', 'security', 'CI/CD'],
  },
  {
    when: 'all along',
    title: 'Testing as a habit',
    body: 'Automated tests at every level, running in every pipeline. Karate Studio was born here.',
    tags: ['Karate', 'API testing', 'end-to-end'],
  },
  {
    when: '2025 →',
    title: 'AI, for everyone',
    body: 'Agents in production, assistants for teams that don’t code, and the MCP servers that connect them to everything else.',
    tags: ['agents', 'MCP', 'Spring AI'],
  },
]

export const stack = [
  { group: 'Build', items: ['Java & Spring', 'TypeScript', 'Rust (agent-written, human-reviewed)', 'SQL & PostgreSQL', 'Event-driven design'] },
  { group: 'Ship', items: ['Continuous integration & delivery', 'Containers & Kubernetes', 'Cloud (GCP, Cloudflare)', 'GitOps'] },
  { group: 'AI', items: ['AI harnesses', 'MCP servers & agent memory', 'Spring AI', 'Open-weight models'] },
  { group: 'Practice', items: ['Test-first', 'Pair & mob programming', 'Coding dojos', 'Small, frequent releases'] },
]

export const highlights = [
  {
    title: 'An agent that investigates production',
    body: 'Ask why something broke, get an answer backed by evidence. Plus a memory that keeps only what it can prove.',
    tags: ['agents', 'observability', 'memory'],
  },
  {
    title: 'Feedback that sorts itself',
    body: 'Users talk, AI listens, and the noise turns into clear tickets.',
    tags: ['embeddings', 'LLM', 'clean architecture'],
  },
]

export const offline = [
  { title: 'Self-hosting', body: 'A small server at home runs the house and whatever needs trying next. Still the best ops school there is.' },
  { title: 'Retro gaming', body: 'A shelf of handhelds, old and new, and strong opinions about screens and emulators.' },
  { title: 'Old cars', body: 'Fixed so they stay on the road. A car that keeps running is greener than a new one.' },
]
