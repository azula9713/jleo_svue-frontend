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

const SecondLayerItems = {
  '/architecture/services': {
    name: 'Services',
    links: [
      {
        name: 'Residential',
        isExpandable: true,
        link: '/architecture/services/residential',
      },
      {
        name: 'Commercial',
        isExpandable: false,
        link: '/architecture/services/commercial',
      },
      {
        name: 'Planning Applications',
        isExpandable: false,
        link: '/architecture/services/planning-applications',
      },
      {
        name: 'Building Control DWG',
        isExpandable: false,
        link: '/architecture/services/building-control-dwg',
      },
      {
        name: 'Change of Use',
        isExpandable: false,
        link: '/architecture/services/change-of-use',
      },
      {
        name: 'New Build',
        isExpandable: false,
        link: '/architecture/services/new-build',
      },
      {
        name: 'Structural Engineering',
        isExpandable: false,
        link: '/architecture/services/structural-engineering',
      },
    ],
  },
  '/interiors/residential': {
    name: 'Residential',
    links: [
      {
        name: 'Home Office',
        isExpandable: false,
        link: '/interiors/residential/home-office',
      },
      {
        name: 'Bedroom',
        isExpandable: false,
        link: '/interiors/residential/bedroom',
      },
      {
        name: 'Living Area',
        isExpandable: false,
        link: '/interiors/residential/living-area',
      },
      {
        name: 'Kitchen',
        isExpandable: false,
        link: '/interiors/residential/kitchen',
      },
      {
        name: 'Games Room',
        isExpandable: false,
        link: '/interiors/residential/games-room',
      },
      {
        name: 'Pantry/Storage',
        isExpandable: false,
        link: '/interiors/residential/pantry-storage',
      },
    ],
  },
}

const ThirdLayerItems = {
  '/architecture/services/residential': {
    name: 'Residential',
    links: [
      {
        name: 'Single Storey',
        isExpandable: false,
        link: '/architecture/services/residential/single-storey',
      },
      {
        name: 'Double Storey',
        isExpandable: false,
        link: '/architecture/services/residential/double-storey',
      },
      {
        name: 'Loft Conversion',
        isExpandable: false,
        link: '/architecture/services/residential/loft-conversion',
      },
      {
        name: 'Wrap Around',
        isExpandable: false,
        link: '/architecture/services/residential/wrap-around',
      },
      {
        name: 'Kitchen',
        isExpandable: false,
        link: '/architecture/services/residential/kitchen',
      },
      {
        name: 'Basement Conversion',
        isExpandable: false,
        link: '/architecture/services/residential/basement-conversion',
      },
      {
        name: 'Flat Conversion',
        isExpandable: false,
        link: '/architecture/services/residential/flat-conversion',
      },
    ],
  },
}

export { MegaMenuItems, SecondLayerItems, ThirdLayerItems }
