import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId, useState } from "react";
import { Box, Paper } from "@mui/material";
import DatePicker from "react-datepicker";
import css from './FormForBooking.module.css'
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";

export default function FormForBooking() {
    const id = useId();
    const [startDate, setStartDate] = useState(new Date());

     const BookingSchema = Yup.object().shape({
        name: Yup.string().min(3, 'To Short!').max(50, 'To Long!').required('Required!'),
        email: Yup.string().email("Invalid email address").required('Required!'),
        bookingDate: Yup.date().required('Required!'),
        comment: Yup.string().min(3, 'To Short!').max(250, 'To Long!'),
    });
    return (
        <>
            <Formik initialValues={{
                name: '',
                email: '',
                bookingDate: startDate,
                comment:''
            }}
                onSubmit={((_,{resetForm}) => {
                    toast.success('Booking is successful')
                    resetForm()
                })}
                validationSchema={BookingSchema}
            >
                <Paper elevation={0} sx={{ width: '527px' }}>                 
                    <Box component={Form} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '14px',
                        alignItems: 'center',
                        width: '527px'
                    }}>                        
                        <Box sx={{ display: 'flex' }}>
                            <ErrorMessage name="name" component="span"  className={css.message}/>
                            <Field type='text'
                                name="name"
                                id={`${id}+name`}
                                placeholder='Name*'
                                className={css.input} 
                            />
                            
                        </Box>                        
                        <Box sx={{ display: 'flex' }}>
                            <ErrorMessage name="email" component="span" className={css.message}/>
                            <Field type='text'
                                name="email"
                                id={`${id}+email`}
                                placeholder='Email*'
                                className={css.input}
                            />
                            
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <ErrorMessage name="bookingDate" component="span" className={css.message} />
                            <DatePicker  name="bookingDate" placeholderText="Booking date*"  className={css.input}
                                id={`${id}+bookingDate`} selected={startDate} onChange={(date) => setStartDate(date)}/>
                        </Box>                        
                        <Box sx={{ display: 'flex' }}>
                            <ErrorMessage name="comment" component="span" className={css.message}/>
                            <Field
                                as='textarea'
                                type='text'
                                name="comment"
                                id={`${id}+comment`}
                                placeholder='Comment'
                                className={css.comment}                            
                            />                            
                        </Box>
                        <button className={css.button} type="submit">Send</button>
                    </Box>
                </Paper>                
            </Formik>
            <Toaster/>
        </>        
    )    
}