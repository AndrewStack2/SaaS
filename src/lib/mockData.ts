export const vehicles = [
  {
    id: 'FLT-029',
    name: 'Nissan Versa 2023',
    type: 'Sedan',
    color: 'White',
    status: 'Moving' as const,
    speed: '45 km/h',
    driver: {
      id: 'DRV-882',
      name: 'Juan Pérez',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKGsAHshI3OfzAhxrO5wF9gdoo1sZbaQXuSYNVvrYFqtVhvzpL-_Y8iVNM6DhjArSoddhgjMpPLSipQP2PzH_t0dqt9Z4rTRPTkH-tDSEfnreIDrytsUhXNQJvWQy2sR3ukTocjFWNbaKRya2fQsoMTHa5IaiZanYHUsVcjehojBnZwQt9h6SP1BFq_JSGF9rKTbd0NigvqbVWAFnnGcpDUR3DvlAMPRLlTYqfd1_p-GyIzx2lwurdgWUleYgocfwyc--cqVcLKS4',
      rating: 4.8,
    },
    location: {
      address: 'Av. Reforma 222',
      city: 'Mexico City, MX',
      heading: 'NW 320°',
    },
    fuel: 78,
    odometer: 45231,
    battery: '12.6V',
    efficiency: 12.4,
    lastUpdate: '2 mins ago',
    health: 92,
  },
  {
    id: 'FLT-104',
    name: 'Toyota Prius',
    type: 'Hybrid',
    color: 'Silver',
    status: 'Stopped' as const,
    speed: '0 km/h',
    duration: '1h 12m',
    driver: {
      id: 'DRV-102',
      name: 'Maria Garcia',
      initials: 'MG',
      rating: 4.9,
    },
    location: {
      address: 'Central Depot',
      city: 'Guadalajara, MX',
      heading: 'N 0°',
    },
    fuel: 45,
    odometer: 12840,
    battery: '13.1V',
    efficiency: 22.5,
    lastUpdate: '15m ago',
    health: 98,
  },
  {
    id: 'FLT-003',
    name: 'Ford Transit',
    type: 'Van',
    color: 'Blue',
    status: 'Service' as const,
    speed: '0 km/h',
    duration: '2 days',
    driver: {
      id: 'DRV-005',
      name: 'Carlos Ruiz',
      initials: 'CR',
      rating: 4.7,
    },
    location: {
      address: 'Workshop North',
      city: 'Monterrey, MX',
      heading: 'S 180°',
    },
    fuel: 12,
    odometer: 89320,
    battery: '11.8V',
    efficiency: 9.8,
    lastUpdate: '1d ago',
    health: 65,
  }
];

export const inspections = [
  {
    id: 1,
    title: 'Daily Pre-Trip Inspection',
    date: 'Today, 08:30 AM',
    inspector: 'Juan Pérez',
    status: 'Failed' as const,
    issue: 'Front-left tire damage',
    description: 'Driver reported visible cut on the sidewall of the front-left tire. Pressure is holding but replacement is recommended immediately.',
    photos: 4,
  },
  {
    id: 2,
    title: 'Monthly Maintenance Check',
    date: 'Oct 12, 2024',
    inspector: 'Spider Service Center',
    status: 'Passed' as const,
    photos: 2,
  },
  {
    id: 3,
    title: 'Return from Service',
    date: 'Oct 05, 2024',
    inspector: 'Admin User',
    status: 'Warning' as const,
    description: 'Vehicle returned with minor scratches on rear bumper not present before service. Noted for insurance review.',
    photos: 1,
  },
  {
    id: 4,
    title: 'Post-Trip Inspection',
    date: 'Sep 28, 2024',
    inspector: 'Juan Pérez',
    status: 'Passed' as const,
    photos: 0,
  }
];

export const serviceHistory = [
  {
    date: 'Oct 24, 2023',
    type: 'Oil Change & Filters',
    icon: 'water_drop',
    provider: 'AutoFix Mexico City',
    mileage: '45,200 km',
    cost: '$1,200.00 MXN',
  },
  {
    date: 'Aug 15, 2023',
    type: 'Tire Rotation (4)',
    icon: 'tire_repair',
    provider: 'Bridgestone Center',
    mileage: '40,150 km',
    cost: '$850.00 MXN',
  },
  {
    date: 'Jun 02, 2023',
    type: 'Brake Pads Replacement',
    icon: 'build_circle',
    provider: 'Nissan Service Center',
    mileage: '35,000 km',
    cost: '$3,200.00 MXN',
  },
  {
    date: 'Jan 15, 2023',
    type: '30,000 km Major Service',
    icon: 'fact_check',
    provider: 'Nissan Service Center',
    mileage: '30,005 km',
    cost: '$5,400.00 MXN',
  }
];

export const documents = [
  {
    name: 'Insurance Policy',
    provider: 'AXA Seguros • Full Coverage',
    id: 'Pol: MX-99283-22',
    status: 'Active' as const,
    expires: 'Dec 12, 2024',
    progress: 75,
    remaining: '245 days remaining',
    icon: 'verified_user',
    color: 'indigo'
  },
  {
    name: 'Circulation Card',
    provider: 'Tarjeta de Circulación',
    id: 'ID: 8829-AAA',
    status: 'Expired' as const,
    expires: 'Oct 01, 2023',
    progress: 100,
    remaining: 'Action Required',
    icon: 'badge',
    color: 'red'
  },
  {
    name: 'License Plates',
    provider: 'State of Mexico',
    id: 'FLT-029',
    status: 'Valid' as const,
    expires: 'May 2024',
    progress: 40,
    remaining: '~6 months remaining',
    icon: 'directions_car',
    color: 'gray'
  }
];

export const alerts = {
  critical: [
    {
      id: 'FLT-029',
      name: 'Insurance Policy',
      info: 'Nissan Versa 2023 • Assigned to Juan Pérez',
      status: 'EXPIRED' as const,
      time: '2 days ago',
      icon: 'security'
    },
    {
      id: 'FLT-045',
      name: 'Vehicle Verification',
      info: 'Toyota HiAce 2021 • Cargo Unit',
      status: 'EXPIRED' as const,
      time: 'Yesterday',
      icon: 'verified'
    },
    {
      id: 'DRV-089',
      name: 'Driver License',
      info: 'Driver: Miguel Ángel Torres',
      status: 'EXPIRED' as const,
      time: '5 days ago',
      icon: 'badge'
    }
  ],
  warnings: [
    {
      id: 'FLT-012',
      name: 'Circulation Card',
      info: 'Chevrolet Aveo 2022 • Sales Team',
      status: 'Expiring' as const,
      time: '5 days left',
      icon: 'directions_car'
    },
    {
      id: 'FLT-099',
      name: 'TAG Device Plan',
      info: 'Nissan NP300 • Logistics',
      status: 'Expiring' as const,
      time: '12 days left',
      icon: 'shield'
    },
    {
      id: 'DRV-022',
      name: 'Medical Certificate',
      info: 'Driver: Ana María Lopez',
      status: 'Expiring' as const,
      time: '14 days left',
      icon: 'picture_as_pdf'
    }
  ]
};

export const activityLogs = [
  { time: '10:42 AM', type: 'Vehicle Moving', location: 'Av. Paseo de la Reforma 222, Juarez', details: 'Speed: 45 km/h', icon: 'location_on', status: 'success' },
  { time: '09:15 AM', type: 'Route Deviation', location: 'Circuito Interior Bicentenario, Condesa', details: '+2.4 km off route', icon: 'warning', status: 'error', priority: 'High Priority' },
  { time: '08:30 AM', type: 'Fuel Alert', location: 'Calle Liverpool 136, Juarez', details: 'Sudden drop detected (12%)', icon: 'local_gas_station', status: 'warning' },
  { time: '08:00 AM', type: 'Engine Start', location: 'Base Depot - Spider Fleet HQ', details: 'Driver: Juan Pérez', icon: 'key', status: 'info' },
  { time: '07:45 AM', type: 'Pre-trip Inspection', location: 'Base Depot - Spider Fleet HQ', details: 'Passed', icon: 'fact_check', status: 'success' },
];

export const users = [
  { name: 'Sarah Connor', email: 'sarah@spiderfleet.com', role: 'Admin' as const, status: 'Active', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKHqGRYAomv3hMnkg1YeFg96z4IQ3ctp9bTg1M-_JTStoV4oF2RDRhsZZOvirD9RSR8NbjPhBThf0FjXXLpnR25ifNojMLuWHzHeraFlqPECBW-TFmrvt1Glyiar0qVFkT1ltHpBrJ_hhCCwK5lYWwGDnDzeLdtg5o2jotsQUcLiAKe7DTbEZFRXl934nqp1BHOjOsJg9bkyPcyc1Nd-Nt_zAsnkaPpg0fJgE8_eTZuIH9EbrdVfyw54x5H64Xs-FrVBPbDTIlbQE' },
  { name: 'John Doe', email: 'john@spiderfleet.com', role: 'Manager' as const, status: 'Active', initials: 'JD' },
  { name: 'Kyle Reese', email: 'kyle@spiderfleet.com', role: 'Viewer' as const, status: 'Invited', initials: 'KR' },
];

export const auditLogs = [
  { timestamp: 'Oct 24, 2024', time: '09:42 AM', user: 'Sarah Johnson', action: 'Created' as const, description: 'Added new vehicle SF-2094 to operational fleet.', ip: '192.168.1.42', initials: 'SJ' },
  { timestamp: 'Oct 24, 2024', time: '08:15 AM', user: 'Mike Chen', action: 'Updated' as const, description: 'Modified fuel limit threshold for Heavy Transport Group.', ip: '10.0.0.12', initials: 'MC' },
  { timestamp: 'Oct 23, 2024', time: '04:55 PM', user: 'Sarah Johnson', action: 'Deleted' as const, description: 'Removed driver profile D-4421 from active roster.', ip: '192.168.1.42', initials: 'SJ' },
  { timestamp: 'Oct 23, 2024', time: '02:30 PM', user: 'System Auto', action: 'Updated' as const, description: 'Auto-adjusted tire pressure sensors for vehicle SF-1002.', ip: 'Localhost', initials: 'SYS' },
];
