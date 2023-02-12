interface ISECTIONS {
  id: string,
  name: string,
  route: string,
}

export const SECTIONS: ISECTIONS[] = [
  {
    id: 'graphics_section_id',
    name: 'Graphics',
    route: '/graphics'
  },
  {
    id: 'statistics_section_id',
    name: 'Statistics',
    route: '/statistics'
  },
  {
    id: 'objectives_section_id',
    name: 'Objectives',
    route: '/objectives'
  },
  {
    id: 'visualizer_section_id',
    name: 'Visualizer',
    route: '/visualizer'
  },
  {
    id: 'home_section_id',
    name: 'Home',
    route: '/'
  },
]

export const MY_ACCOUNT_SECTION = {
  id: 'my_account_section_id',
  name: 'My Account',
  route: '/my-account'
}