export const arsFormatter = (value )  => {
    if (value === undefined || value === null) return '-';
    if (value === 0) return '$ 0';
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(value);
  };