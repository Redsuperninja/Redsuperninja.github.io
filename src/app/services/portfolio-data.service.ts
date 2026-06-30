import { Injectable } from '@angular/core';

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
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
}

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  readonly profile: Profile = {
    name: 'Tawhid Ather',
    role: 'Software Developer',
    tagline:
      'CS enthusiast building CI/CD tooling and full-stack apps, with project work spanning agentic AI pipelines, game development, and applied machine learning.',
    email: 'tawhid.ather@gmail.com',
    linkedin: 'https://linkedin.com/in/tawhid-ather',
    github: 'https://github.com/Redsuperninja',
    location: 'Highlands Ranch, CO'
  };

  readonly experience: ExperienceEntry[] = [
    {
      title: 'Software Developer Intern',
      org: 'Laboratory for Atmospheric and Space Physics (LASP), CU Boulder',
      location: 'Boulder, CO',
      dates: 'May 2025 — May 2026',
      bullets: [
        'Built Python/Flask middleware supporting CI/CD pipelines for mission-critical infrastructure used by 50+ scientists and engineers daily.',
        'Built a full-stack URL shortening service in Angular and TypeScript so researchers can manage links to data, papers, and resources.',
        'Used Ansible and Python automation for configuration management and automated deployment of an SMTP notification system and the URL shortener across Linux production environments.',
        'Wrote CLI automation tools (Python/Bash) and a custom log parser to streamline deployments, configuration, and error detection across production systems.',
        'Integrated OAuth 2.0 with role-based access control for multi-tier permissions on sensitive scientific data.',
        'Worked in Agile sprints — Git/Bitbucket version control, Jira tracking, daily stand-ups, and code reviews.'
      ]
    }
  ];

  readonly skills: SkillGroup[] = [
    { label: 'Languages', items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C++', 'SQL', 'Bash', 'MATLAB'] },
    { label: 'CI/CD & DevOps', items: ['Docker', 'Ansible', 'Git', 'Bitbucket', 'Jira', 'CI/CD', 'Infrastructure as Code'] },
    { label: 'Web & APIs', items: ['Angular', 'React', 'Node.js', 'Express', 'Flask', 'REST APIs', 'OAuth 2.0'] },
    { label: 'AI & Cloud', items: ['AWS Bedrock', 'LangChain', 'LLMs', 'Human-in-the-Loop Systems'] },
    { label: 'Data & Databases', items: ['PostgreSQL', 'MySQL', 'Pandas', 'scikit-learn', 'NumPy'] },
    { label: 'Practices', items: ['Agile/Scrum', 'TDD', 'JUnit/Mocha', 'SOLID', 'OOD'] }
  ];

  readonly projects: Project[] = [
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
      featured: true,
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
      featured: true,
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
    { title: 'Festo Frontend Generator demo', description: 'Agent generating a Festo-compliant page with human-in-the-loop approval.', embedNote: 'https://youtu.be/El85MxHt_P4' },
  //   { title: 'SpotU walkthrough', description: 'Spotify-powered recommendations and playlist management in action.', embedNote: 'Swap with unlisted YouTube/Loom embed' },
  //   { title: 'Dungeon Crawler gameplay', description: 'Combat, procedural levels, and enemy AI in a short run.', embedNote: 'Swap with unlisted YouTube/Loom embed' },
  //   { title: 'Caution: Slick Floors gameplay', description: 'Momentum-based platforming with the friction-changing mop.', embedNote: 'Swap with unlisted YouTube/Loom embed' }
  ];
}
