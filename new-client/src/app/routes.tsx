import { Suspense, lazy, useEffect, useMemo, useState } from 'react'

import { AboutProfileSection } from '../features/about-profile'
import { ContactEndpointSection } from '../features/contact-endpoint'
import { EducationSection } from '../features/education'
import { SystemOverviewSection } from '../features/system-overview'
import { systemsDesignedCases } from '../features/systems-designed/data'
import { SectionWrapper } from '../layout/SectionWrapper'

import { buildProjectPath, navigateTo, PORTFOLIO_ROUTE_EVENT, readRouteFromLocation, type PortfolioRoute } from './navigation'
import { applySeo, seoConstants } from './seo'

const LazyCapabilityMatrixSection = lazy(() =>
  import('../features/capability-matrix/components/CapabilityMatrixSection').then((module) => ({
    default: module.CapabilityMatrixSection,
  })),
)

const LazyProductionTimelineSection = lazy(() =>
  import('../features/production-work/components/ProductionTimelineSection').then((module) => ({
    default: module.ProductionTimelineSection,
  })),
)

const LazySystemsDesignedSection = lazy(() =>
  import('../features/systems-designed/components/SystemsDesignedSection').then((module) => ({
    default: module.SystemsDesignedSection,
  })),
)

const LazyProjectDetailsPage = lazy(() =>
  import('../features/systems-designed/components/ProjectDetailsPage').then((module) => ({
    default: module.ProjectDetailsPage,
  })),
)

const homeDescription =
  'Full stack developer portfolio of Anushka Singhal featuring React.js and Node.js projects, skills, internship experience, and education.'

const projectsDescription =
  'Project portfolio with Expense Tracker and Resume Builder full stack applications built using React.js, Node.js, Express.js, and MongoDB.'

type NotFoundPageProps = {
  pathname: string
  onGoHome: () => void
}

function NotFoundPage({ pathname, onGoHome }: NotFoundPageProps) {
  return (
    <SectionWrapper
      id="not-found"
      eyebrow="Error"
      title="Page Not Found"
      description={`No page exists at ${pathname}.`}
      className="project-detail"
      bodyClassName="project-detail__body"
      titleAs="h1"
    >
      <div className="project-detail__stack">
        <article className="project-detail__card">
          <h3>Try this instead</h3>
          <p>Use the homepage for full navigation, or open the projects index page.</p>
          <div className="project-detail__external-links">
            <button type="button" className="link-btn" onClick={onGoHome}>
              Back to Home
            </button>
            <a href="/projects" className="link-btn link-btn--ghost">
              View Projects
            </a>
          </div>
        </article>
      </div>
    </SectionWrapper>
  )
}

export function PortfolioRoutes() {
  const [route, setRoute] = useState<PortfolioRoute>(() => readRouteFromLocation())

  useEffect(() => {
    const syncRoute = () => setRoute(readRouteFromLocation())

    window.addEventListener('popstate', syncRoute)
    window.addEventListener(PORTFOLIO_ROUTE_EVENT, syncRoute as EventListener)

    return () => {
      window.removeEventListener('popstate', syncRoute)
      window.removeEventListener(PORTFOLIO_ROUTE_EVENT, syncRoute as EventListener)
    }
  }, [])

  const activeProject = useMemo(
    () => (route.page === 'project-detail' ? systemsDesignedCases.find((project) => project.id === route.projectId) ?? null : null),
    [route],
  )

  useEffect(() => {
    if (route.page === 'home') {
      applySeo({
        title: 'Anushka Singhal | Full Stack Developer',
        description: homeDescription,
        path: '/',
        keywords:
          'Anushka Singhal, Full Stack Developer, React.js Developer, Node.js Developer, Express.js, MongoDB, Portfolio',
      })
      return
    }

    if (route.page === 'projects') {
      applySeo({
        title: 'Projects | Anushka Singhal',
        description: projectsDescription,
        path: '/projects',
        keywords:
          'Anushka Singhal projects, Expense Tracker, Resume Builder, React projects, Node.js portfolio',
        structuredData: [
          {
            '@type': 'CollectionPage',
            '@id': `${seoConstants.siteUrl}/projects#collection`,
            name: 'Projects | Anushka Singhal',
            url: `${seoConstants.siteUrl}/projects`,
            description: projectsDescription,
            inLanguage: 'en-IN',
            about: {
              '@type': 'Person',
              name: 'Anushka Singhal',
              url: seoConstants.siteUrl,
            },
          },
          {
            '@type': 'ItemList',
            itemListElement: systemsDesignedCases.map((project, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: project.name,
              url: `${seoConstants.siteUrl}${buildProjectPath(project.id)}`,
            })),
          },
        ],
      })
      return
    }

    if (route.page === 'project-detail' && activeProject) {
      const projectPath = buildProjectPath(activeProject.id)
      applySeo({
        title: `${activeProject.name} Project | Anushka Singhal`,
        description: `${activeProject.shortSummary} Domain: ${activeProject.domain}`,
        path: projectPath,
        image: `${seoConstants.siteUrl}${activeProject.icon}`,
        type: 'article',
        keywords: `${activeProject.name}, ${activeProject.techStack.join(', ')}, ${activeProject.skillTags.join(', ')}, full stack development, case study`,
        structuredData: [
          {
            '@type': 'SoftwareSourceCode',
            name: activeProject.name,
            description: activeProject.shortSummary,
            codeRepository: activeProject.githubUrl,
            url: `${seoConstants.siteUrl}${projectPath}`,
            image: `${seoConstants.siteUrl}${activeProject.icon}`,
            author: {
              '@type': 'Person',
              name: 'Anushka Singhal',
              url: seoConstants.siteUrl,
            },
            programmingLanguage: activeProject.techStack,
            keywords: activeProject.skillTags.join(', '),
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: seoConstants.siteUrl,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Projects',
                item: `${seoConstants.siteUrl}/projects`,
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: activeProject.name,
                item: `${seoConstants.siteUrl}${projectPath}`,
              },
            ],
          },
        ],
      })
      return
    }

    if (route.page === 'project-detail') {
      applySeo({
        title: 'Project Not Found | Anushka Singhal',
        description: 'The requested project page does not exist.',
        path: `/projects/${route.projectId}`,
        noindex: true,
      })
      return
    }

    applySeo({
      title: 'Page Not Found | Anushka Singhal',
      description: 'This page does not exist on this portfolio.',
      path: route.page === 'not-found' ? route.pathname : '/',
      noindex: true,
    })
  }, [route, activeProject])

  function openProject(projectId: string) {
    navigateTo(buildProjectPath(projectId))
    setRoute({ page: 'project-detail', projectId })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function closeProject() {
    navigateTo('/projects', { replace: true })
    setRoute({ page: 'projects' })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function goProjects() {
    navigateTo('/projects')
    setRoute({ page: 'projects' })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function goHome() {
    navigateTo('/')
    setRoute({ page: 'home' })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (route.page === 'project-detail' && activeProject) {
    return (
      <Suspense fallback={null}>
        <LazyProjectDetailsPage study={activeProject} onBack={closeProject} />
      </Suspense>
    )
  }

  if (route.page === 'project-detail' && !activeProject) {
    return <NotFoundPage pathname={`/projects/${route.projectId}`} onGoHome={goHome} />
  }

  if (route.page === 'projects') {
    return (
      <Suspense fallback={null}>
        <LazySystemsDesignedSection
          onOpenProject={openProject}
          onBackHome={goHome}
          titleAs="h1"
          mode="list"
          sectionId="projects"
        />
      </Suspense>
    )
  }

  if (route.page === 'not-found') {
    return <NotFoundPage pathname={route.pathname} onGoHome={goHome} />
  }

  return (
    <>
      <SystemOverviewSection />
      <AboutProfileSection />
      <Suspense fallback={null}>
        <LazyCapabilityMatrixSection sectionId="skills" />
      </Suspense>
      <Suspense fallback={null}>
        <LazySystemsDesignedSection
          onOpenProject={openProject}
          onOpenProjectsPage={goProjects}
          mode="cta"
          sectionId="projects"
        />
      </Suspense>
      <Suspense fallback={null}>
        <LazyProductionTimelineSection sectionId="experience" />
      </Suspense>
      <EducationSection />
      <ContactEndpointSection />
    </>
  )
}
