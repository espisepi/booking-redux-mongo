import React from 'react'
import ReservationForm from '../../../components/App/Reservation/ReservationForm'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { resetCreateReservation } from '../../../main/redux/actions/reservationActions'


const ReservationFormContainer = () => {

    const { reservation: reservationCreate } = useSelector( state => state.reservationCreate );

    const dispatch = useDispatch();
    const resetReservation = () => dispatch( resetCreateReservation() );

    return (
        <div>
            <ReservationForm reservation={reservationCreate} resetReservation={resetReservation} />
        </div>
    )
}

export default ReservationFormContainer
