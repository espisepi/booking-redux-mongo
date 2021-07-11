


export function tableSanitize( table ) {

    return {
        ...table,
        capacity: parseInt(table.capacity), // convert to number type
        isAvailable: Boolean(table.isAvailable), // convert to boolean type
    }
}

export function tablesSanitize( tables ) {
    if(Array.isArray(tables)) { return tables.map( table => ( tableSanitize(table) ) ); }
    return tableSanitize(tables);
}

export function tablesWithReservationSanitize( tables, reservations ) {

    const tablesWithSanitize = tablesSanitize( tables );

    const tablesSanitizeWithReservation = tablesWithSanitize.map( table => {
        const reservation = reservations.filter( reserva => reserva.table === table.id);
        if(reservation[0]) {
            return {
                ...table,
                isAvailable: false,
                reservation: reservation[0]
            }
        }
        return {
            ...table
        };
    });

    return tablesSanitizeWithReservation;
}