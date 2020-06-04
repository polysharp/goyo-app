const fakeRents = [
  {
    id: '1',
    profile: {
      firstName: 'Jean Paul',
      lastName: 'Erno',
      avatar:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    location: {
      address: '28 rue de Paris',
      city: 'Paris',
    },
    rent: {
      status: 'UNPAID',
      amount: Math.floor(Math.random() * 1000).toString(),
      date: new Date().toLocaleDateString('fr-FR'),
    },
  },
  {
    id: '2',
    profile: {
      firstName: 'Jean Paul',
      lastName: 'Erno',
      avatar:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    location: {
      address: '28 rue de Paris',
      city: 'Paris',
    },
    rent: {
      status: 'PAID',
      amount: Math.floor(Math.random() * 1000).toString(),
      date: new Date().toLocaleDateString('fr-FR'),
    },
  },
  {
    id: '3',
    profile: {
      firstName: 'Jean Paul',
      lastName: 'Erno',
      avatar:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    location: {
      address: '28 rue de Paris',
      city: 'Paris',
    },
    rent: {
      status: 'RETARDED',
      amount: Math.floor(Math.random() * 1000).toString(),
      date: new Date().toLocaleDateString('fr-FR'),
    },
  },
  {
    id: '4',
    profile: {
      firstName: 'Jean Paul',
      lastName: 'Erno',
      avatar:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    location: {
      address: '28 rue de Paris',
      city: 'Paris',
    },
    rent: {
      status: 'PAID',
      amount: Math.floor(Math.random() * 1000).toString(),
      date: new Date().toLocaleDateString('fr-FR'),
    },
  },
  {
    id: '5',
    profile: {
      firstName: 'Jean Paul',
      lastName: 'Erno',
      avatar:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    location: {
      address: '28 rue de Paris',
      city: 'Paris',
    },
    rent: {
      status: 'PAID',
      amount: Math.floor(Math.random() * 1000).toString(),
      date: new Date().toLocaleDateString('fr-FR'),
    },
  },
  {
    id: '6',
    profile: {
      firstName: 'Jean Paul',
      lastName: 'Erno',
      avatar:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    location: {
      address: '28 rue de Paris',
      city: 'Paris',
    },
    rent: {
      status: 'PAID',
      amount: Math.floor(Math.random() * 1000).toString(),
      date: new Date().toLocaleDateString('fr-FR'),
    },
  },
  {
    id: '7',
    profile: {
      firstName: 'Jean Paul',
      lastName: 'Erno',
      avatar:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    location: {
      address: '28 rue de Paris',
      city: 'Paris',
    },
    rent: {
      status: 'UNPAID',
      amount: Math.floor(Math.random() * 1000).toString(),
      date: new Date().toLocaleDateString('fr-FR'),
    },
  },
  {
    id: '8',
    profile: {
      firstName: 'Jean Paul',
      lastName: 'Erno',
      avatar:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    location: {
      address: '28 rue de Paris',
      city: 'Paris',
    },
    rent: {
      status: 'RETARDED',
      amount: Math.floor(Math.random() * 1000).toString(),
      date: new Date().toLocaleDateString('fr-FR'),
    },
  },
];

export default fakeRents;
