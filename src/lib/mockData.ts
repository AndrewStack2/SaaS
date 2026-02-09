export const vehicles = [
  {
    id: 'FLT-029',
    name: 'Nissan Versa 2023',
    type: 'sedan',
    color: 'white',
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
      city: 'CDMX, MX',
      heading: 'NO 320°',
    },
    fuel: 78,
    odometer: 45231,
    battery: '12.6V',
    efficiency: 12.4,
    lastUpdateKey: '2_mins_ago',
    health: 92,
  },
  {
    id: 'FLT-104',
    name: 'Toyota Prius',
    type: 'hybrid',
    color: 'silver',
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
      address: 'Depósito Central',
      city: 'Guadalajara, MX',
      heading: 'N 0°',
    },
    fuel: 45,
    odometer: 12840,
    battery: '13.1V',
    efficiency: 22.5,
    lastUpdateKey: '15_mins_ago',
    health: 98,
  },
  {
    id: 'FLT-003',
    name: 'Ford Transit',
    type: 'van',
    color: 'blue',
    status: 'Service' as const,
    speed: '0 km/h',
    duration: '2_days',
    driver: {
      id: 'DRV-005',
      name: 'Carlos Ruiz',
      initials: 'CR',
      rating: 4.7,
    },
    location: {
      address: 'Taller Norte',
      city: 'Monterrey, MX',
      heading: 'S 180°',
    },
    fuel: 12,
    odometer: 89320,
    battery: '11.8V',
    efficiency: 9.8,
    lastUpdateKey: '1_day_ago',
    health: 65,
  }
];

export const inspections = [
  {
    id: 1,
    titleKey: 'daily_pre_trip',
    dateKey: 'today_time',
    inspector: 'Juan Pérez',
    status: 'Failed' as const,
    issueKey: 'tire_damage_issue',
    descriptionKey: 'tire_damage_desc',
    photos: 4,
  },
  {
    id: 2,
    titleKey: 'monthly_maintenance',
    dateKey: 'oct_12_2024',
    inspector: 'Spider Service Center',
    status: 'Passed' as const,
    photos: 2,
  },
  {
    id: 3,
    titleKey: 'return_from_service',
    dateKey: 'oct_05_2024',
    inspector: 'Admin User',
    status: 'Warning' as const,
    descriptionKey: 'return_service_desc',
    photos: 1,
  },
  {
    id: 4,
    titleKey: 'post_trip_inspection',
    dateKey: 'sep_28_2024',
    inspector: 'Juan Pérez',
    status: 'Passed' as const,
    photos: 0,
  }
];

export const serviceHistory = [
  {
    date: 'Oct 24, 2023',
    typeKey: 'oil_change_filters',
    icon: 'water_drop',
    provider: 'AutoFix Mexico City',
    mileage: '45,200 km',
    cost: '$1,200.00 MXN',
  },
  {
    date: 'Aug 15, 2023',
    typeKey: 'tire_rotation_4',
    icon: 'tire_repair',
    provider: 'Bridgestone Center',
    mileage: '40,150 km',
    cost: '$850.00 MXN',
  },
  {
    date: 'Jun 02, 2023',
    typeKey: 'brake_pads_replacement',
    icon: 'build_circle',
    provider: 'Nissan Service Center',
    mileage: '35,000 km',
    cost: '$3,200.00 MXN',
  },
  {
    date: 'Jan 15, 2023',
    typeKey: 'major_service_30k',
    icon: 'fact_check',
    provider: 'Nissan Service Center',
    mileage: '30,005 km',
    cost: '$5,400.00 MXN',
  }
];

export const documents = [
  {
    nameKey: 'insurance_policy',
    provider: 'AXA Seguros • Full Coverage',
    id: 'Pol: MX-99283-22',
    status: 'Active' as const,
    expires: 'Dec 12, 2024',
    progress: 75,
    remainingKey: '245_days_remaining',
    icon: 'verified_user',
    color: 'indigo'
  },
  {
    nameKey: 'circulation_card',
    provider: 'Tarjeta de Circulación',
    id: 'ID: 8829-AAA',
    status: 'Expired' as const,
    expires: 'Oct 01, 2023',
    progress: 100,
    remainingKey: 'action_required',
    icon: 'badge',
    color: 'red'
  },
  {
    nameKey: 'license_plates',
    provider: 'State of Mexico',
    id: 'FLT-029',
    status: 'Valid' as const,
    expires: 'May 2024',
    progress: 40,
    remainingKey: '6_months_remaining',
    icon: 'directions_car',
    color: 'gray'
  }
];

export const alerts = {
  critical: [
    {
      id: 'FLT-029',
      nameKey: 'insurance_policy',
      infoKey: 'versa_assigned_juan',
      status: 'EXPIRED' as const,
      timeKey: '2_days_ago',
      icon: 'security'
    },
    {
      id: 'FLT-045',
      nameKey: 'vehicle_verification',
      infoKey: 'hiace_cargo_unit',
      status: 'EXPIRED' as const,
      timeKey: 'yesterday',
      icon: 'verified'
    },
    {
      id: 'DRV-089',
      nameKey: 'driver_license',
      infoKey: 'driver_miguel',
      status: 'EXPIRED' as const,
      timeKey: '5_days_ago',
      icon: 'badge'
    }
  ],
  warnings: [
    {
      id: 'FLT-012',
      nameKey: 'circulation_card',
      infoKey: 'aveo_sales_team',
      status: 'Expiring' as const,
      timeKey: '5_days_left',
      icon: 'directions_car'
    },
    {
      id: 'FLT-099',
      nameKey: 'tag_device_plan',
      infoKey: 'np300_logistics',
      status: 'Expiring' as const,
      timeKey: '12_days_left',
      icon: 'shield'
    },
    {
      id: 'DRV-022',
      nameKey: 'medical_certificate',
      infoKey: 'driver_ana',
      status: 'Expiring' as const,
      timeKey: '14_days_left',
      icon: 'picture_as_pdf'
    }
  ]
};

export const activityLogs = [
  { time: '10:42 AM', typeKey: 'vehicle_moving', location: 'Av. Paseo de la Reforma 222, Juárez', detailsKey: 'speed_45', icon: 'location_on', status: 'success' },
  { time: '09:15 AM', typeKey: 'route_deviation', location: 'Circuito Interior Bicentenario, Condesa', detailsKey: 'off_route_2_4', icon: 'warning', status: 'error', priorityKey: 'high_priority' },
  { time: '08:30 AM', typeKey: 'fuel_alert', location: 'Calle Liverpool 136, Juárez', detailsKey: 'sudden_drop_12', icon: 'local_gas_station', status: 'warning' },
  { time: '08:00 AM', typeKey: 'engine_start', location: 'Base Depot - HQ Spider Fleet', detailsKey: 'driver_juan', icon: 'key', status: 'info' },
  { time: '07:45 AM', typeKey: 'pre_trip_inspection', location: 'Base Depot - HQ Spider Fleet', detailsKey: 'passed', icon: 'fact_check', status: 'success' },
];

export const users = [
  { name: 'Sarah Connor', email: 'sarah@spiderfleet.com', role: 'Admin' as const, status: 'Active', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKHqGRYAomv3hMnkg1YeFg96z4IQ3ctp9bTg1M-_JTStoV4oF2RDRhsZZOvirD9RSR8NbjPhBThf0FjXXLpnR25ifNojMLuWHzHeraFlqPECBW-TFmrvt1Glyiar0qVFkT1ltHpBrJ_hhCCwK5lYWwGDnDzeLdtg5o2jotsQUcLiAKe7DTbEZFRXl934nqp1BHOjOsJg9bkyPcyc1Nd-Nt_zAsnkaPpg0fJgE8_eTZuIH9EbrdVfyw54x5H64Xs-FrVBPbDTIlbQE' },
  { name: 'John Doe', email: 'john@spiderfleet.com', role: 'Manager' as const, status: 'Active', initials: 'JD' },
  { name: 'Kyle Reese', email: 'kyle@spiderfleet.com', role: 'Viewer' as const, status: 'Invited', initials: 'KR' },
];

export const auditLogs = [
  { timestamp: '24 Oct, 2024', time: '09:42 AM', user: 'Sarah Johnson', action: 'Created' as const, descriptionKey: 'added_vehicle_sf2094', ip: '192.168.1.42', initials: 'SJ' },
  { timestamp: '24 Oct, 2024', time: '08:15 AM', user: 'Mike Chen', action: 'Updated' as const, descriptionKey: 'modified_fuel_threshold', ip: '10.0.0.12', initials: 'MC' },
  { timestamp: '23 Oct, 2024', time: '04:55 PM', user: 'Sarah Johnson', action: 'Deleted' as const, descriptionKey: 'removed_driver_d4421', ip: '192.168.1.42', initials: 'SJ' },
  { timestamp: '23 Oct, 2024', time: '02:30 PM', user: 'System Auto', action: 'Updated' as const, descriptionKey: 'auto_adjusted_tire_pressure', ip: 'Localhost', initials: 'SYS' },
];
