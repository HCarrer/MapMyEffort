interface ISECTIONS {
  id: string,
  name: string,
  route: string,
}

interface IBOTTOMBARSECTIONS {
  id: string,
  sections: ISECTIONS[]
}

export const NAVBAR_SECTIONS: ISECTIONS[] = [
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

export const BOTTOMBAR_SECTIONS: IBOTTOMBARSECTIONS[] = [
  {
    id: 'first_row',
    sections: [
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
        id: 'visualizer_section_id',
        name: 'Visualizer',
        route: '/visualizer'
      },
      {
        id: 'home_section_id',
        name: 'Home',
        route: '/'
      }
    ]
  },
  {
    id: 'second_row',
    sections: [
      {
        id: 'objectives_section_id',
        name: 'Objectives',
        route: '/objectives'
      },
      MY_ACCOUNT_SECTION,
      {
        id: 'contact_section_id',
        name: 'Contact',
        route: 'https://www.linkedin.com/in/henrique-carrer-094563191/'
      }
    ]
  },
]