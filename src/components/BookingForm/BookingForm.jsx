import FormForBooking from '../FormForBooking/FormForBooking'
import css from './BookingForm.module.css'

export default function BookingForm() {
    return (
        <div className={css.wrapper}>
            <h3 className={css.title}>Book your campervan now</h3>
            <p className={css.text}>Stay connected! We are always ready to help you.</p>
            <FormForBooking/>
        </div>
    )
}