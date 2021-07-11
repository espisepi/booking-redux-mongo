


export function tableSanitize( table ) {
    return {
        ...table,
        capacity: parseInt(table.capacity),
        isAvailable: table.isAvailable === 'true', // convert to boolean type
        default: table.default === 'true',
    }
}

export function tablesSanitize( tables ) {
    return tables.map( table => ( tableSanitize(table) ) );
}