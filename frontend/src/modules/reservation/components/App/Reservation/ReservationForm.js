import React from 'react'
import PropTypes from 'prop-types'

const ReservationForm = ({ reservation, onChange, handleSubmit, editMode, resetReservation }) => {
    const { name, phone, email } = reservation;
    return (
        <div>
            Reservation Form
            <input type="text" name="name" value={name} onChange={onChange} />
            <input type="text" name="phone" value={phone} onChange={onChange} />
            <input type="text" name="email" value={email} onChange={onChange} />

            <button type="button" onClick={handleSubmit} >{ editMode ? (<span>edit</span>) : (<span>create</span>) }</button>
            <button type="button" onClick={resetReservation} >Exit</button>
        </div>
    )
}

// ReservationForm.defaultProps = {
//     reservation: {
//         name: 'name reserve',
//         phone: '',
//         email: 'email@email.com'
//     }
// }

ReservationForm.propTypes = {
    reservation: PropTypes.shape({
        table: PropTypes.string,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }),
    onChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    editMode: PropTypes.bool
}

export default ReservationForm
