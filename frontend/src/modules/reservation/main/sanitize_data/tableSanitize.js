


export function tableSanitize( table ) {
    return {
        ...table,
        capacity: parseInt(table.capacity),
        isAvailable: table.isAvailable === 'true', // convert to boolean type
    }
}

export function tablesSanitize( tables ) {
    if(Array.isArray(tables)) { return tables.map( table => ( tableSanitize(table) ) ); }
    return tableSanitize(tables);
}