import type { SystemCaseStudy } from './types'

export const systemsDesignedCases: SystemCaseStudy[] = [
  {
    id: 'expense-tracker-web-app',
    name: 'Expense Tracker Web App',
    period: '2025',
    icon: '/Expense-Tracker.png',
    bgcolor: '#ffffff',
    shortSummary:
      'A full stack finance tracking app where users can manage income and expenses with secure authentication and analytics.',
    domain:
      'Personal finance management and transaction analytics',
    problem:
      'Users needed a reliable way to track income, expenses, and category-level spending patterns in one application.',
    architectureDecisions: [
      'JWT-based authentication and protected routes',
      'RESTful backend with Express.js for transaction workflows',
      'MongoDB document models for users, transactions, and filters',
      'Category filtering and date-range queries for insights',
      'Chart-driven analytics for financial visibility',
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    skillTags: [
      'JWT Authentication',
      'REST APIs',
      'Transaction Filtering',
      'Data Visualization',
    ],
    outcome: 'Built and tested as a complete full stack project.',
    githubUrl: 'https://github.com/anushkasinghal24/ExpenseTracker-2025',
  },
  {
    id: 'resume-builder-web-app',
    name: 'Resume Builder Web App',
    period: '2025',
    icon: '/Resume-Builder.png',
    bgcolor: '#ffffff',
    shortSummary:
      'A web application that allows users to create, edit and download resumes as PDF with live preview.',
    domain: 'Resume authoring and PDF generation',
    problem:
      'Users needed a simple interface to build structured resumes quickly without manual formatting in document editors.',
    architectureDecisions: [
      'Dynamic form modules for customizable resume sections',
      'Real-time preview renderer for instant edits',
      'Express.js APIs for persistence and document handling',
      'MongoDB schema for profile and resume records',
      'PDF generation pipeline for downloadable outputs',
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    skillTags: [
      'Dynamic Forms',
      'Real-time Preview',
      'PDF Export',
      'Full Stack CRUD',
    ],
    outcome:
      'Implemented end-to-end resume creation flow with export-ready output.',
    githubUrl: 'https://github.com/anushkasinghal24/BuildResumeWeb',
  },
]
