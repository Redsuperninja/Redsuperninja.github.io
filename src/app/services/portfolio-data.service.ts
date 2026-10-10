import { Injectable } from '@angular/core';

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
  resumeUrl: string;
}

export interface ExperienceEntry {
  title: string;
  org: string;
  location: string;
  dates: string;
  bullets: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  dates: string;
  featured: boolean;
  summary: string;
  bullets: string[];
  tags: string[];
  links?: { label: string; url: string }[];
}

export interface DevOpsItem {
  level: 'shipped' | 'in-progress' | 'next';
  title: string;
  description: string;
  tools: string;
}

export interface VideoDemo {
  title: string;
  description: string;
  embedNote: string;
  youtubeId?: string;
}

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  readonly profile: Profile = {
    name: 'Tawhid Ather',
    role: 'Software Engineer',
    tagline:
      'CU Boulder CS graduate (May 2026) building backend services, CI/CD automation, and data pipelines, with project work spanning agentic AI, local-first apps, optimization, and game development.',
    email: 'tawhid.ather@gmail.com',
    linkedin: 'https://linkedin.com/in/tawhid-ather',
    github: 'https://github.com/Redsuperninja',
    location: 'Highlands Ranch, CO',
    resumeUrl: 'Tawhid_Ather_Resume.pdf'
  };

  readonly experience: ExperienceEntry[] = [
    {
      title: 'Software Developer Intern',
      org: 'Laboratory for Atmospheric and Space Physics (LASP), CU Boulder',
      location: 'Boulder, CO',
      dates: 'May 2025 — May 2026',
      bullets: [
        'Built Python/Flask backend services and middleware supporting CI/CD pipelines for infrastructure used daily by 50+ researchers.',
        'Built a full-stack Angular/TypeScript URL shortener letting scientists and engineers manage links to research data and papers.',
        'Automated configuration and deployment of the web app and an SMTP notification service on Linux production servers with Ansible.',
        'Built an automated email service that monitors user login activity and warns users who pass a set inactivity timeframe.',
        'Wrote Python and Bash CLI tools and a custom log parser that automated deployments, maintenance, error detection and status reporting.',
        'Provisioned Ubuntu/Debian servers and resolved production issues through root-cause analysis with science and engineering teams.',
        'Secured applications with OAuth 2.0 and role-based access control; tested and documented REST APIs with Postman.',
        'Worked in an Agile team using Git/Bitbucket and Jira, with daily stand-ups, sprint planning and code reviews.'
      ]
    },
    {
      title: 'Senior Resident Advisor',
      org: 'University of Colorado Boulder',
      location: 'Boulder, CO',
      dates: 'Aug 2023 — May 2026',
      bullets: [
        'Supervised and mentored 18 Resident Advisors across two halls serving 600+ students; led staff meetings, trainings and scheduling.',
        'Handled confidential student records under FERPA, applying data privacy practices to sensitive personal information.',
        'Mediated resident conflicts and gave crisis support, communicating clearly with students, staff and administrators.'
      ]
    }
  ];

  readonly skills: SkillGroup[] = [
    { label: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C#', 'SQL', 'Bash', 'C++'] },
    { label: 'CI/CD & DevOps', items: ['Docker', 'Docker Compose', 'GitHub Actions', 'Ansible', 'Linux', 'Git', 'Infrastructure as Code'] },
    { label: 'Backend & Web', items: ['FastAPI', 'Flask', 'ASP.NET Core', 'Node.js', 'Express', 'Angular', 'React', 'React Native (Expo)', 'OAuth 2.0'] },
    { label: 'Data & Databases', items: ['PostgreSQL', 'Snowflake', 'SQLite', 'MySQL', 'SQLAlchemy', 'Alembic', 'EF Core', 'ETL'] },
    { label: 'AI & Optimization', items: ['AWS Bedrock', 'LangChain', 'LLM agents', 'Google OR-Tools (CP-SAT)', 'scikit-learn', 'Pandas'] },
    { label: 'Practices', items: ['Agile/Scrum', 'TDD', 'pytest', 'JUnit/Mocha', 'Encryption at rest', 'RBAC', 'SOLID'] }
  ];

  readonly projects: Project[] = [
    {
      id: 'budget-buddy',
      name: 'Budget Buddy — Local-First Budgeting & Tax-Prep App',
      subtitle: 'Solo project · FastAPI + Expo',
      dates: '2026 — Present',
      featured: true,
      summary:
        'A private, local-first finance app: a Python FastAPI + SQLite \u201cHome Base\u201d running on the user\u2019s own computer and an Expo (React Native) phone app for iPhone and Android that syncs over home Wi-Fi.',
      bullets: [
        'Designed the database layer with SQLAlchemy models, Alembic migrations, and integer-cents money helpers to avoid floating-point errors.',
        'Implemented encryption at rest with an OS-keyring master key, encrypted columns, encrypted file storage, and a recovery phrase.',
        'Built accounts and transactions APIs, tax-year reference data (2025, 2026), a versioned sync API contract, and a mobile budget dashboard.',
        'Maintain 185+ pytest tests with separate server and mobile CI pipelines in GitHub Actions.',
        'Run development as a roadmap of small pull requests led by specialized AI agents (architect, backend, security, test, mobile, release), with architecture decision records.'
      ],
      tags: ['Python', 'FastAPI', 'SQLite', 'SQLAlchemy', 'Expo', 'GitHub Actions', 'Encryption']
    },
    {
      id: 'ner-tenets',
      name: 'NER Tenets — Net Effective Rent ETL Pipeline',
      subtitle: 'Solo project · Data engineering',
      dates: '2026',
      featured: true,
      summary:
        'An ETL pipeline that pulls HUD Fair Market Rent and Census ACS median rent data via their APIs and computes Net Effective Rent for Colorado counties.',
      bullets: [
        'Modeled raw, staging, and analytics schemas, with an analytics view calculating concession dollars from free-rent months and tenant improvement allowances.',
        'Ran the same pipeline against two targets: a throwaway local PostgreSQL sandbox for fast SQL iteration, and Snowflake with programmatic access token auth.',
        'Containerized with Docker and Docker Compose, with shell scripts for end-to-end runs and ad hoc queries.'
      ],
      tags: ['Python', 'Snowflake', 'PostgreSQL', 'ETL', 'Docker'],
      links: [{ label: 'View on GitHub', url: 'https://github.com/Redsuperninja/NER-Tenets' }]
    },
    {
      id: 'stolen-palor',
      name: 'Stolen Palor — Action Roguelike',
      subtitle: 'In progress · Godot 4 .NET / C#',
      dates: '2026 — Present',
      featured: true,
      summary:
        'An action roguelike where players raid realms and steal pets that act as their weapons.',
      bullets: [
        'Built player, combat, enemy AI, pet, projectile, run, and UI systems with tunable values in data-driven .tres resource files.',
        'Wrote a headless test runner with 75+ test cases, run through a build-and-test script.',
        'Maintain design and engineering docs (pillars, decisions log, roadmap, glossary) with anti-drift rules keeping docs and code in sync.'
      ],
      tags: ['Godot 4', 'C#', '.NET', 'Game Dev', 'Testing']
    },
    {
      id: 'inky-illustrations',
      name: 'Ava Mitchell — Artist Portfolio',
      subtitle: 'Client project · Live in production',
      dates: '2026 — Present',
      featured: true,
      summary:
        'A responsive Angular 19 portfolio site for visual artist Ava Mitchell, showcasing contemporary ink art, sumi-e inspired work, and watercolor exploration — built, deployed, and actively maintained for a paying client.',
      bullets: [
        'Built a client-side rendered Angular 19 app with a component/page/service architecture for maintainable, reusable layout and page modules.',
        'Shipped to production at inkyillustrations.com and continue to maintain and support it as the live site of record for the artist\u2019s work.',
        'Currently scoping and building a shop and payment platform to extend the site from a portfolio into an e-commerce storefront.'
      ],
      tags: ['Angular 19', 'TypeScript', 'Client Project', 'Live Production'],
      links: [{ label: 'Live Site', url: 'https://inkyillustrations.com/' }]
    },
    {
      id: 'festo',
      name: 'Festo Agentic Frontend Generator',
      subtitle: 'Senior Capstone · Team of 6',
      dates: 'Oct 2025 — May 2026',
      featured: true,
      summary:
        'A LangChain agent on AWS Bedrock that generates production-ready React, TypeScript, and Tailwind frontends conforming to Festo\u2019s component library — with a human-in-the-loop approval step between every pipeline stage.',
      bullets: [
        'Architected and built the core LangChain agent prototype on AWS Bedrock generating React/TypeScript/Tailwind code from Festo\u2019s official component library.',
        'Designed a human-in-the-loop validation service in JavaScript with approval breakpoints between pipeline stages, giving engineers control before code generation proceeds.',
        'Implemented Docker container health monitoring, logging, and automated restart policies across the agent service, validation API, and frontend preview.',
        'Integrated the validation service into a live interface viewer for real-time frontend preview with interactive agent control.',
        'Ran the project in Agile/Scrum with multi-week sprints, delivering the core prototype ahead of the November 2025 milestone.'
      ],
      tags: ['LangChain', 'AWS Bedrock', 'React', 'TypeScript', 'Docker', 'Agentic AI']
    },
    {
      id: 'spotu',
      name: 'SpotU — Full-Stack Music Discovery Platform',
      subtitle: 'Team project · Led development',
      dates: 'Jan 2025 — May 2025',
      featured: true,
      summary:
        'A full-stack music platform with Spotify-powered recommendations, built and led across a team of 5.',
      bullets: [
        'Led development with Node.js, Express, and PostgreSQL — REST APIs for auth, playlists, and social features.',
        'Integrated the Spotify API via OAuth 2.0 for personalized recommendations, serving 100+ test users with rate-limited requests.',
        'Containerized the app with Docker, cutting environment setup time by 75% across the team.',
        'Wrote Mocha unit tests achieving 85% coverage on API routes and core logic.',
        'Ran bi-weekly Agile sprints with stand-ups, code reviews, and retrospectives.'
      ],
      tags: ['Node.js', 'Express', 'PostgreSQL', 'OAuth 2.0', 'Docker', 'Mocha'],
      links: [{ label: 'View on GitHub', url: 'https://github.com/Redsuperninja/SpotU-012-group-1' }]
    },
    {
      id: 'dungeon-crawler',
      name: '2D Dungeon Crawler',
      subtitle: 'Solo project · Java',
      dates: 'Aug 2024 — Dec 2024',
      featured: false,
      summary:
        'An object-oriented dungeon crawler built to put Factory, Singleton, Observer, and State patterns into practice on real game architecture.',
      bullets: [
        'Built the game loop, combat system, procedural level generation, and polymorphic enemy AI.',
        'Wrote a JUnit test suite covering combat calculations, item interactions, and player progression at 90% coverage.',
        'Used Groovy for scripting dynamic events, and an observer pattern for real-time sound-effect triggering.'
      ],
      tags: ['Java', 'OOD', 'Design Patterns', 'JUnit', 'Groovy']
    },
    {
      id: 'slick-floors',
      name: 'Caution: Slick Floors',
      subtitle: 'Big Mode Game Jam 2026 · Unity / C#',
      dates: 'January 2026',
      featured: false,
      summary:
        'A momentum-based 2D physics platformer where a mop dynamically alters surface friction — shipped among 647 jam entries, ranking #214 in Theme.',
      bullets: [
        'Implemented custom physics interactions and an event-driven respawn animation system.',
        'Iterated on balance based on live community playtesting feedback during the jam.'
      ],
      tags: ['Unity', 'C#', 'Game Jam', 'Physics'],
      links: [{ label: 'Play the game', url: 'https://brentweiffenbach.itch.io/caution-slick-floors' }]
    },
    {
      id: 'ballxpit-solver',
      name: 'BallXPit Packing Solver',
      subtitle: 'Constraint optimization',
      dates: '2026',
      featured: false,
      summary: 'A Google OR-Tools CP-SAT solver that packs 28 polyomino-shaped buildings into two 7x7 zones while maximizing fill density.',
      bullets: [
        'Encoded a reachability constraint guaranteeing a walkable corridor from the board edge to a pinned target building.',
        'Built a CLI with configurable time limits, multiple distinct layouts, and colorized terminal rendering.'
      ],
      tags: ['Python', 'OR-Tools', 'CP-SAT', 'CLI'],
      links: [{ label: 'View on GitHub', url: 'https://github.com/Redsuperninja/BallXPit-Packing-Solver' }]
    },
    {
      id: 'crm-api',
      name: 'CRM & Payroll API',
      subtitle: 'Backend · .NET 10',
      dates: '2026',
      featured: false,
      summary: 'An ASP.NET Core web API with contact and payroll controllers, a repository layer, and Entity Framework Core migrations on PostgreSQL.',
      bullets: [],
      tags: ['C#', 'ASP.NET Core', 'EF Core', 'PostgreSQL'],
      links: [{ label: 'View on GitHub', url: 'https://github.com/Redsuperninja/Crm' }]
    },
    {
      id: 'housing-model',
      name: 'Chicago Housing Price Prediction',
      subtitle: 'Applied ML',
      dates: 'Aug 2024 — Dec 2024',
      featured: false,
      summary: 'A regression model predicting housing prices from multivariate features, reaching an R² of 0.82.',
      bullets: [
        'Preprocessed data with missing-value handling, feature scaling, one-hot encoding, and outlier detection.',
        'Applied Lasso/Ridge regularization to reduce overfitting and improve generalization.',
        'Evaluated with cross-validation, R², MSE, and residual analysis.'
      ],
      tags: ['Python', 'scikit-learn', 'Pandas', 'Regression'],
      links: [{ label: 'View on GitHub', url: 'https://github.com/Redsuperninja/Chicago-Housing-Linear-Regression-Modeling' }]
    },
    {
      id: 'disease-model',
      name: 'Contagious Disease Modeling',
      subtitle: 'Computational modeling',
      dates: 'Jan 2024 — May 2024',
      featured: false,
      summary: 'SIR/SEIR epidemiological models in MATLAB, solved numerically and analyzed for stability.',
      bullets: [
        'Solved ODEs with Euler\u2019s method and Runge-Kutta algorithms.',
        'Visualized infection curves, recovery rates, and population dynamics.',
        'Analyzed model stability across varying parameters and initial conditions.'
      ],
      tags: ['MATLAB', 'Numerical Methods', 'Epidemiology'],
      links: [{ label: 'View on GitHub', url: 'https://github.com/Redsuperninja/Contagious-Disease' }]
    },
    {
      id: 'social-platform',
      name: 'Text-Based Social Media Platform',
      subtitle: 'CSCI 2270 · Data Structures Final Project',
      dates: 'Jan 2024 — May 2024',
      featured: false,
      summary: 'A modular C++ social media simulation modeling users, posts, and interactions with file I/O persistence.',
      bullets: [
        'Implemented User, Post, Comment, and Feed classes using OOAD principles.',
        'Applied encapsulation, inheritance, and polymorphism for dynamic post handling.'
      ],
      tags: ['C++', 'OOAD', 'STL'],
      links: [{ label: 'View on GitHub', url: 'https://github.com/Redsuperninja/Text-Based_Social_Media_Platform' }]
    },
    {
      id: 'rivals-mod',
      name: 'Rivals of Aether Character Mod',
      subtitle: 'Community mod · GML',
      dates: '2022',
      featured: false,
      summary: 'A custom character mod with original mechanics, refined through community playtesting to 4,500+ downloads.',
      bullets: ['Designed balanced abilities and iterated based on direct community feedback.'],
      tags: ['GameMaker Language', 'Game Design'],
      links: [{ label: 'View on Steam', url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2024752207' }]
    }
  ];

  readonly devops: DevOpsItem[] = [
    {
      level: 'shipped',
      title: 'CI/CD pipelines for production infrastructure',
      description:
        'Built Python/Flask middleware supporting CI/CD pipelines at LASP, used daily by 50+ scientists and engineers.',
      tools: 'CI/CD · Flask · Python'
    },
    {
      level: 'shipped',
      title: 'Configuration management & automated deployment',
      description:
        'Used Ansible to automate config management and deployment of production services across Linux servers.',
      tools: 'Ansible · Linux (Ubuntu, Debian)'
    },
    {
      level: 'shipped',
      title: 'Containerized services with health monitoring',
      description:
        'Implemented Docker container health checks, logging, and automated restart policies on the Festo capstone\u2019s agent, validation, and preview services.',
      tools: 'Docker · Health Checks'
    },
    {
      level: 'shipped',
      title: 'GitHub Actions CI and Pages deploys',
      description:
        'Run separate server and mobile CI pipelines for Budget Buddy, and deploy this site to GitHub Pages from a GitHub Actions workflow on every push to main.',
      tools: 'GitHub Actions · pytest · GitHub Pages'
    },
    {
      level: 'shipped',
      title: 'Containerized data pipeline',
      description:
        'Packaged the NER Tenets ETL pipeline with Docker Compose so the same code runs against a local PostgreSQL sandbox or Snowflake.',
      tools: 'Docker Compose · PostgreSQL · Snowflake'
    },
    {
      level: 'in-progress',
      title: 'Infrastructure as code',
      description: 'Extending deployment scripts into Terraform to provision cloud resources declaratively instead of by hand.',
      tools: 'Terraform · AWS'
    },
    {
      level: 'next',
      title: 'Kubernetes deployment',
      description: 'Move a containerized app from Docker Compose to a Kubernetes cluster with health checks and autoscaling.',
      tools: 'Kubernetes · Helm'
    },
    {
      level: 'next',
      title: 'Monitoring & alerting stack',
      description: 'Add Prometheus metrics and Grafana dashboards to a deployed service, with alerting on error rate and downtime.',
      tools: 'Prometheus · Grafana'
    }
  ];

  readonly videos: VideoDemo[] = [
    { title: 'Festo Frontend Generator demo', description: 'Agent generating a Festo-compliant page with human-in-the-loop approval.', embedNote: 'https://youtu.be/El85MxHt_P4', youtubeId: 'El85MxHt_P4' },
  //   { title: 'SpotU walkthrough', description: 'Spotify-powered recommendations and playlist management in action.', embedNote: 'Swap with unlisted YouTube/Loom embed', youtubeId: 'YOUR_YOUTUBE_ID' },
  //   { title: 'Dungeon Crawler gameplay', description: 'Combat, procedural levels, and enemy AI in a short run.', embedNote: 'Swap with unlisted YouTube/Loom embed', youtubeId: 'YOUR_YOUTUBE_ID' },
  //   { title: 'Caution: Slick Floors gameplay', description: 'Momentum-based platforming with the friction-changing mop.', embedNote: 'Swap with unlisted YouTube/Loom embed', youtubeId: 'YOUR_YOUTUBE_ID' }
  ];
}
