const about = {
  // each of these properties is optional - they can be left empty or deleted
  // each element in the `description` array will be treated as a separate paragraph
  name: 'Justin To',
  greetingEmoji: '👋',
  role: 'Software Developer',
  company: '',
  description: [
    'As a passionate software, game, and web developer, I love making games for people to enjoy, intuitive and beutiful websites, and user-friendly useful apps. My goal is to create digital solutions that people love to use and that make a difference. Also interested in Cybersecurity and AI.',
  ],
  resume: 'https://justinto.dev/resume.pdf',
  social: {
    github: 'https://github.com/tocjustin',
    linkedin: 'https://www.linkedin.com/in/tojustin/',
  },
}

const projects = [
  // projects can be added and removed
  // if the array is left empty, the "Projects" section won't render
  // each element in each `description` array will be treated as a separate paragraph
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Valiant',
    description: [
      'A first person tactile shooter game within Unreal Engine',
    ],
    stack: ['C++', 'Lead Programmer', 'UE5', 'Git', 'Networking', 'UI', 'Gameplay'],
    livePreview: 'https://store.steampowered.com/app/2468650/Valiant/',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Apocalypse Rising',
    description: [
      'A third person open world survival game within Unreal Engine',
    ],
    stack: ['C++', 'Lead Programmer', 'UE5', 'Git'],
    livePreview: '',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Eternal Life',
    description: [
      'A top down MMO ARPG game within Unreal Engine',
    ],
    stack: ['C++', 'Lead Programmer', 'UE5', 'Git'],
    livePreview: '',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Apothecary Night',
    description: [
      'A first person horror game within Unity',
    ],
    stack: ['C#', 'Lead Programmer', 'Unity', 'Git'],
    livePreview: '',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Valoblox',
    description: [
      'A first person shooter game within Roblox Studio',
    ],
    stack: ['Lua', 'Lead Programmer', 'Roblox Studio', 'SQL'],
    livePreview: 'https://www.roblox.com/games/9818210203/Nexus',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Daydream',
    description: [
      'A productivity app within Android Studio',
    ],
    stack: ['Kotlin', 'Android Studio'],
    sourceCode: 'https://github.com',
    livePreview: '',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Sentinel',
    description: [
      'A discord bot to manage discord servers',
    ],
    stack: ['Python', 'SQL', 'AWS'],
    livePreview: '',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Utopia',
    description: [
      'An Instagram Clone built in React',
    ],
    stack: ['JavaScript', 'CSS', 'TypeScript', 'React'],
    sourceCode: '',
    livePreview: '',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Nexus',
    description: [
      'An Amazon Clone built in Next.js',
    ],
    stack: ['JavaScript', 'CSS', 'TypeScript', 'React'],
    sourceCode: '',
    livePreview: '',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Auto Zone',
    description: [
      'A car buying website',
    ],
    stack: ['JavaScript', 'CSS', 'TypeScript', 'React'],
    sourceCode: '',
    livePreview: '',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Anti-Phishing Outlook Extension',
    description: [
      'Designed and developed an Outlook add-in extension that enhances email security by detecting phishing emails',
    ],
    stack: ['Python', 'JavaScript', 'CSS', 'HTML'],
    sourceCode: 'https://github.com/Dpenate-AD23/AntiPhish-Outlook',
    livePreview: '',
  },
]

const skills = [
  // skills can be added or removed
  // if the array is left empty, the "Skills" section won't render
  'C++',
  'C#',
  'C',
  'Lua',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'SQL',
  'Git',
]

const contact = {
  // the `email` property is optional - it can be left empty or deleted
  // if so, the "Contact" section won't render
  email: 'tocjustin@gmail.com',
}

export { about, projects, skills, contact }
