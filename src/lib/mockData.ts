export const vehicles = [
  {
    id: 'FLT-029',
    name: 'Nissan Versa 2023',
    type: 'Sedán',
    color: 'Blanco',
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
    lastUpdate: 'Hace 2 mins',
    health: 92,
  },
  {
    id: 'FLT-104',
    name: 'Toyota Prius',
    type: 'Híbrido',
    color: 'Plata',
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
    lastUpdate: 'Hace 15m',
    health: 98,
  },
  {
    id: 'FLT-003',
    name: 'Ford Transit',
    type: 'Van',
    color: 'Azul',
    status: 'Service' as const,
    speed: '0 km/h',
    duration: '2 días',
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
    lastUpdate: 'Hace 1d',
    health: 65,
  }
];

export const inspections = [
  {
    id: 1,
    title: 'Inspección Diaria Previa',
    date: 'Hoy, 08:30 AM',
    inspector: 'Juan Pérez',
    status: 'Failed' as const,
    issue: 'Daño en neumático delantero izquierdo',
    description: 'El conductor reportó un corte visible en el costado del neumático delantero izquierdo. La presión se mantiene pero se recomienda el reemplazo inmediato.',
    photos: 4,
  },
  {
    id: 2,
    title: 'Revisión Mensual de Mantenimiento',
    date: '12 Oct, 2024',
    inspector: 'Centro de Servicio Spider',
    status: 'Passed' as const,
    photos: 2,
  },
  {
    id: 3,
    title: 'Retorno de Servicio',
    date: '05 Oct, 2024',
    inspector: 'Usuario Admin',
    status: 'Warning' as const,
    description: 'Vehículo devuelto con rayones menores en la defensa trasera que no estaban presentes antes del servicio. Notado para revisión de seguro.',
    photos: 1,
  },
  {
    id: 4,
    title: 'Inspección Post-Viaje',
    date: '28 Sep, 2024',
    inspector: 'Juan Pérez',
    status: 'Passed' as const,
    photos: 0,
  }
];

export const serviceHistory = [
  {
    date: '24 Oct, 2023',
    type: 'Cambio de Aceite y Filtros',
    icon: 'water_drop',
    provider: 'AutoFix CDMX',
    mileage: '45,200 km',
    cost: '$1,200.00 MXN',
  },
  {
    date: '15 Ago, 2023',
    type: 'Rotación de Llantas (4)',
    icon: 'tire_repair',
    provider: 'Bridgestone Center',
    mileage: '40,150 km',
    cost: '$850.00 MXN',
  },
  {
    date: '02 Jun, 2023',
    type: 'Reemplazo de Pastillas de Freno',
    icon: 'build_circle',
    provider: 'Centro de Servicio Nissan',
    mileage: '35,000 km',
    cost: '$3,200.00 MXN',
  },
  {
    date: '15 Ene, 2023',
    type: 'Servicio Mayor 30,000 km',
    icon: 'fact_check',
    provider: 'Centro de Servicio Nissan',
    mileage: '30,005 km',
    cost: '$5,400.00 MXN',
  }
];

export const documents = [
  {
    name: 'Póliza de Seguro',
    provider: 'AXA Seguros • Cobertura Amplia',
    id: 'Pol: MX-99283-22',
    status: 'Active' as const,
    expires: '12 Dic, 2024',
    progress: 75,
    remaining: '245 días restantes',
    icon: 'verified_user',
    color: 'indigo'
  },
  {
    name: 'Tarjeta de Circulación',
    provider: 'Secretaría de Movilidad',
    id: 'ID: 8829-AAA',
    status: 'Expired' as const,
    expires: '01 Oct, 2023',
    progress: 100,
    remaining: 'Acción Requerida',
    icon: 'badge',
    color: 'red'
  },
  {
    name: 'Placas de Circulación',
    provider: 'Estado de México',
    id: 'FLT-029',
    status: 'Valid' as const,
    expires: 'Mayo 2024',
    progress: 40,
    remaining: '~6 meses restantes',
    icon: 'directions_car',
    color: 'gray'
  }
];

export const alerts = {
  critical: [
    {
      id: 'FLT-029',
      name: 'Póliza de Seguro',
      info: 'Nissan Versa 2023 • Asignado a Juan Pérez',
      status: 'EXPIRED' as const,
      time: 'Hace 2 días',
      icon: 'security'
    },
    {
      id: 'FLT-045',
      name: 'Verificación Vehicular',
      info: 'Toyota HiAce 2021 • Unidad de Carga',
      status: 'EXPIRED' as const,
      time: 'Ayer',
      icon: 'verified'
    },
    {
      id: 'DRV-089',
      name: 'Licencia de Conducir',
      info: 'Conductor: Miguel Ángel Torres',
      status: 'EXPIRED' as const,
      time: 'Hace 5 días',
      icon: 'badge'
    }
  ],
  warnings: [
    {
      id: 'FLT-012',
      name: 'Tarjeta de Circulación',
      info: 'Chevrolet Aveo 2022 • Equipo de Ventas',
      status: 'Expiring' as const,
      time: '5 días restantes',
      icon: 'directions_car'
    },
    {
      id: 'FLT-099',
      name: 'Plan de Dispositivo TAG',
      info: 'Nissan NP300 • Logística',
      status: 'Expiring' as const,
      time: '12 días restantes',
      icon: 'shield'
    },
    {
      id: 'DRV-022',
      name: 'Certificado Médico',
      info: 'Conductora: Ana María Lopez',
      status: 'Expiring' as const,
      time: '14 días restantes',
      icon: 'picture_as_pdf'
    }
  ]
};

export const activityLogs = [
  { time: '10:42 AM', type: 'Vehículo en Movimiento', location: 'Av. Paseo de la Reforma 222, Juárez', details: 'Velocidad: 45 km/h', icon: 'location_on', status: 'success' },
  { time: '09:15 AM', type: 'Desviación de Ruta', location: 'Circuito Interior Bicentenario, Condesa', details: '+2.4 km fuera de ruta', icon: 'warning', status: 'error', priority: 'High Priority' },
  { time: '08:30 AM', type: 'Alerta de Combustible', location: 'Calle Liverpool 136, Juárez', details: 'Caída repentina detectada (12%)', icon: 'local_gas_station', status: 'warning' },
  { time: '08:00 AM', type: 'Encendido de Motor', location: 'Depósito Base - HQ Spider Fleet', details: 'Conductor: Juan Pérez', icon: 'key', status: 'info' },
  { time: '07:45 AM', type: 'Inspección Pre-viaje', location: 'Depósito Base - HQ Spider Fleet', details: 'Aprobado', icon: 'fact_check', status: 'success' },
];

export const users = [
  { name: 'Sarah Connor', email: 'sarah@spiderfleet.com', role: 'Admin' as const, status: 'Active', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKHqGRYAomv3hMnkg1YeFg96z4IQ3ctp9bTg1M-_JTStoV4oF2RDRhsZZOvirD9RSR8NbjPhBThf0FjXXLpnR25ifNojMLuWHzHeraFlqPECBW-TFmrvt1Glyiar0qVFkT1ltHpBrJ_hhCCwK5lYWwGDnDzeLdtg5o2jotsQUcLiAKe7DTbEZFRXl934nqp1BHOjOsJg9bkyPcyc1Nd-Nt_zAsnkaPpg0fJgE8_eTZuIH9EbrdVfyw54x5H64Xs-FrVBPbDTIlbQE' },
  { name: 'John Doe', email: 'john@spiderfleet.com', role: 'Manager' as const, status: 'Active', initials: 'JD' },
  { name: 'Kyle Reese', email: 'kyle@spiderfleet.com', role: 'Viewer' as const, status: 'Invited', initials: 'KR' },
];

export const auditLogs = [
  { timestamp: '24 Oct, 2024', time: '09:42 AM', user: 'Sarah Johnson', action: 'Created' as const, description: 'Agregó nuevo vehículo SF-2094 a la flota operativa.', ip: '192.168.1.42', initials: 'SJ' },
  { timestamp: '24 Oct, 2024', time: '08:15 AM', user: 'Mike Chen', action: 'Updated' as const, description: 'Modificó el umbral de límite de combustible para el Grupo de Transporte Pesado.', ip: '10.0.0.12', initials: 'MC' },
  { timestamp: '23 Oct, 2024', time: '04:55 PM', user: 'Sarah Johnson', action: 'Deleted' as const, description: 'Eliminó perfil de conductor D-4421 de la lista activa.', ip: '192.168.1.42', initials: 'SJ' },
  { timestamp: '23 Oct, 2024', time: '02:30 PM', user: 'System Auto', action: 'Updated' as const, description: 'Ajuste automático de sensores de presión de neumáticos para el vehículo SF-1002.', ip: 'Localhost', initials: 'SYS' },
];
