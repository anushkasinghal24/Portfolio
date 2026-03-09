import { FaCode, FaDatabase, FaTools } from 'react-icons/fa'
import { FaPeopleGroup, FaPenNib } from 'react-icons/fa6'
import {
  SiCanva,
  SiCss,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si'
import { TbBrandVscode, TbSql } from 'react-icons/tb'

import type { CapabilityCategory } from './types'

export const capabilityCategories: CapabilityCategory[] = [
  {
    id: 'programming-languages',
    title: 'Programming Languages',
    icon: FaCode,
    skillRows: [
      [
        { id: 'java', label: 'Java', icon: FaCode },
        { id: 'javascript', label: 'JavaScript', icon: SiJavascript },
        { id: 'html', label: 'HTML', icon: SiHtml5 },
        { id: 'css', label: 'CSS', icon: SiCss },
      ],
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks',
    icon: SiReact,
    skillRows: [
      [
        { id: 'react', label: 'React.js', icon: SiReact },
        { id: 'express', label: 'Express.js', icon: SiExpress },
        { id: 'node', label: 'Node.js', icon: SiNodedotjs },
        { id: 'tailwind', label: 'Tailwind CSS', icon: SiTailwindcss },
      ],
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: FaDatabase,
    skillRows: [[{ id: 'mongodb', label: 'MongoDB', icon: SiMongodb }, { id: 'sql', label: 'SQL Basics', icon: TbSql }]],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: FaTools,
    skillRows: [
      [
        { id: 'git', label: 'Git', icon: SiGit },
        { id: 'github', label: 'GitHub', icon: SiGithub },
        { id: 'vscode', label: 'VS Code', icon: TbBrandVscode },
        { id: 'postman', label: 'Postman', icon: SiPostman },
        { id: 'rest-api', label: 'REST APIs', icon: SiExpress },
      ],
    ],
  },
  {
    id: 'design-collaboration',
    title: 'Design & Collaboration',
    icon: FaPenNib,
    skillRows: [
      [
        { id: 'figma', label: 'Figma', icon: SiFigma },
        { id: 'adobe-xd', label: 'Adobe XD', icon: FaPenNib },
        { id: 'canva', label: 'Canva', icon: SiCanva },
        { id: 'uiux', label: 'UI/UX Design', icon: SiFigma },
      ],
    ],
  },
  {
    id: 'soft-skills',
    title: 'Soft Skills',
    icon: FaPeopleGroup,
    skillRows: [
      [
        { id: 'communication', label: 'Communication', icon: FaPeopleGroup },
        { id: 'leadership', label: 'Leadership', icon: FaPeopleGroup },
        { id: 'teamwork', label: 'Teamwork', icon: FaPeopleGroup },
      ],
    ],
  },
  {
    id: 'certifications',
    title: 'Certifications',
    icon: FaCode,
    skillRows: [
      [
        { id: 'uiux-greatlearning', label: 'UI/UX Design - Great Learning', icon: FaPenNib },
        { id: 'figma-udemy', label: 'Figma Design - Udemy', icon: SiFigma },
        { id: 'postman-cert', label: 'Postman API Fundamentals Student Expert', icon: SiPostman },
        { id: 'nodejs-devtown', label: 'Backend Development with NodeJS - Devtown', icon: SiNodedotjs },
        { id: 'reactjs-devtown', label: 'Frontend Development with ReactJS - Devtown', icon: SiReact },
      ],
    ],
  },
]
