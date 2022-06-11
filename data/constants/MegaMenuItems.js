const MegaMenuItems = {
  architecture: {
    name: 'Architecture',
    links: [
      {
        name: 'Services',
        isExpandable: true,
        link: '/architecture/services',
      },
      {
        name: 'Case Study',
        isExpandable: false,
        link: '/case-study/architecture',
      },
      {
        name: 'Pricing',
        isExpandable: false,
        link: '/pricing/architecture',
      },
    ],
  },
  interiors: {
    name: 'Interiors',
    links: [
      {
        name: 'How It Works',
        isExpandable: false,
        link: '/interiors/how-it-works',
      },
      {
        name: 'Residential',
        isExpandable: true,
        link: '/interiors/residential',
      },
      {
        name: 'Commercial',
        isExpandable: false,
        link: '/interiors/commercial',
      },
    ],
  },
  construction: {
    name: 'Construction',
    links: [
      {
        name: 'About',
        isExpandable: false,
        link: '/construction/about',
      },
      {
        name: 'Domestic',
        isExpandable: false,
        link: '/construction/domestic',
      },
      {
        name: 'Commercial',
        isExpandable: false,
        link: '/construction/commercial',
      },
      {
        name: 'Industrial',
        isExpandable: false,
        link: '/construction/industrial',
      },
      {
        name: 'Project Management',
        isExpandable: false,
        link: '/construction/project-management',
      },
    ],
  },
}

export { MegaMenuItems }
