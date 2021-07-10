import React, { useEffect, useState } from 'react'

import { months, times, backend_uri } from '../../config/config';

import ReservationList from './ReservationList';

const Reservation = () => {

    const [tables, setTables] = useState([])

    useEffect(()=>{
        const getTables = async () => {
            const date = new Date();
            const time = times[0]
            const dateTimeFormatted = formatDateTime(date, time);
            
            const res = await fetch(`${backend_uri}/availability`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    date: dateTimeFormatted
                })
            });

            const resJson = await res.json();

            const tablesFiltered = filterTables(resJson.tables, 0, "Any Location");
            
            setTables(tablesFiltered);

        }
        getTables();
    },[])

    return (
        <div>
            <ReservationList tables={tables} />
        </div>
    )
}

// helpers -

function filterTables(tables, size, location) {
    const res = tables.filter(

        table =>

          (size > 0 
            ? table.capacity >= size 
            : true) 
            
            &&

          (location !== "Any Location"
            ? table.location === location
            : true)

      );

    return res;
}

// date: Date
// time: string -> "9AM" || "10AM" ...
function formatDateTime( date, time ) {
    
    const dateFormat =
      months[date.getMonth()] +
      " " +
      date.getDate() +
      " " +
      date.getFullYear();
    let timeFormat = time.slice(0, -2);
    timeFormat = time > 12 ? time + 12 + ":00" : time + ":00";
    // console.log(time);
    const datetime = new Date(dateFormat + " " + timeFormat);
    // console.log(datetime)
    return datetime;
}


export default Reservation
