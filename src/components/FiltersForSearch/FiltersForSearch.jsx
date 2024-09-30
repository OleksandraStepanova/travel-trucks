import css from './FiltersForSearch.module.css';
import wind from '../../img/wind.svg';
import diagram from '../../img/diagram.svg';
import cup from '../../img/cup-hot.svg';
import radio from '../../img/ui-radios.svg';
import droplet from '../../img/bi_droplet.svg';
import alcove from '../../img/alcove.svg';
import fully from '../../img/fully.svg';
import van from '../../img/van.svg';
import { Field, Formik, Form} from 'formik';
import { useDispatch } from 'react-redux';
import { changeFilter, clearFilter } from '../../redux/filters/slice';
import { fetchCampers } from '../../redux/campers/operations';
import toast from 'react-hot-toast';

const notifyError = () => toast.error("Nothing was found for this query");


export default function FiltersForSearch() {    
    const dispatch = useDispatch();
    
    return (<div className={css.wrapper}>  
       

        <Formik
            initialValues={{
                location: '',
                form: '',
                AC: false,
                bathroom: false,
                kitchen: false,
                radio: false,
                transmission: false,
            }}
            onSubmit={(values,{resetForm}) => {
                dispatch(clearFilter())
                dispatch(changeFilter(values)) 
               
                dispatch(fetchCampers()).unwrap().then().catch((error) => {
                    if (error) notifyError();
                })
                resetForm()
            }}
        >
            {({ values, setFieldValue}) => (

                <Form className={css.form}>
                <label className={css.text} htmlFor='location'>Location</label>
                    <Field id='location' name='location' className={css.location} type="text" placeholder='Kyiv' />
                    <p className={css.text}>Filters</p>
                <label className={css.title}>Vehicle type</label>    
                <div className={css.list}>
                    <div onClick={()=>{setFieldValue('form','panelTruck')}} className={css.container} style={{border:values.form==='panelTruck'?'1px solid #E44848':'1px solid #DADDE1'}}>
                        <img src={van} alt="van" />
                        <p>Van</p>
                    </div>           
                    <div onClick={()=>{setFieldValue('form','fullyIntegrated')}} className={css.container} style={{border:values.form==='fullyIntegrated'?'1px solid #E44848':'1px solid #DADDE1'}}>
                        <img src={fully} alt="fullyIntegrated" />
                        <p className={css.p}>Fully Integrated</p>
                    </div>                
                    <div onClick={()=>{setFieldValue('form','alcove')}} className={css.container} style={{border:values.form==='alcove'?'1px solid #E44848':'1px solid #DADDE1'}}>
                        <img src={alcove} alt="alcove" />
                        <p>Alcove</p>
                    </div>
                </div>
                    <h3 className={css.title}>Vehicle equipment</h3>
                    <div  className={css.list}>
                        <div onClick={() => { setFieldValue('AC', !values.AC) }} className={css.container} style={{border:values.AC===true?'1px solid #E44848':'1px solid #DADDE1'}}>
                            <img src={wind} alt="wind" />
                            <p>AC</p>
                        </div>
                        <div  onClick={() => { setFieldValue('transmission', !values.transmission) }} className={css.container} style={{border:values.transmission===true?'1px solid #E44848':'1px solid #DADDE1'}}>
                            <img src={diagram} alt="diagram" />
                            <p>Automatic</p>
                        </div>
                        <div onClick={() => { setFieldValue('kitchen', !values.kitchen) }} className={css.container} style={{border:values.kitchen===true?'1px solid #E44848':'1px solid #DADDE1'}}>
                            <img src={cup} alt="cup" />
                            <p>Kitchen</p>
                        </div>
                        <div onClick={() => { setFieldValue('radio', !values.radio) }} className={css.container} style={{border:values.radio===true?'1px solid #E44848':'1px solid #DADDE1'}}>
                            <img src={radio} alt="radio" />
                            <p>Radio</p>
                        </div>
                        <div onClick={() => { setFieldValue('bathroom', !values.bathroom) }} className={css.container} style={{border:values.bathroom===true?'1px solid #E44848':'1px solid #DADDE1'}}>
                            <img src={droplet} alt="droplet" />
                            <p>Bathroom</p>
                        </div>
                    </div>
                <button type='submit' className={css.button}>Searsh</button>
            </Form>
            )}        
            
        </Formik>         
    </div>)
}