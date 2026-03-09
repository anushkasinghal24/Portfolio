import type { SystemOverviewContent } from './types'

export const systemOverviewContent: SystemOverviewContent = {
  name: 'ANUSHKA SINGHAL',
  title: 'Full Stack Developer | React & Node.js Developer',
  summary:
    'Computer Science student passionate about building modern web applications. Experienced in React.js, Node.js, Express.js and MongoDB. Interested in scalable systems, clean UI/UX and full stack development.',
  avatarUrl: 'https://avatars.githubusercontent.com/u/125953329?s=400&u=b822b9c0397b0fd87968979aef00edb8453f94ea&v=4',
  actions: [
    {
      id: 'email',
      label: 'Email',
      href: 'mailto:anushka.singhal_cs22@gla.ac.in',
      external: false,
    },
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/anushkasinghal24',
      external: true,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/anushkasinghal24',
      external: true,
    },
  ],
}
