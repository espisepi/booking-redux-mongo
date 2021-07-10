import React from 'react'


const Chairs = ({ chairs, available }) => {
    const arrayChairs = new Array(chairs).fill(0);
    console.log(arrayChairs)
    const component = arrayChairs.map( (v,i) => (
        <span 
            key={i}
            className={available ? 'chair-not-available' : 'chair-available' }
        ></span>
    ) )
    console.log(component)
    return (null
        // {...component}
        // { arrayChairs.map( (v,i) => (
        //     <span 
        //         key={i}
        //         className={available ? 'chair-not-available' : 'chair-available' }
        //     />
        // ) ) }
    )
}

const Table = ({ id, chairs, name, available }) => {
    console.log(chairs)
    return (
        <div className="table-container">
            <div className="table-chairs">
                <Chairs chairs={chairs} available={available} />
            </div>
            <p className="table-name">{name}</p>
        </div>
    )
}

export default Table
