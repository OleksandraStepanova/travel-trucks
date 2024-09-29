import { useSelector } from "react-redux";
import { selectCamperById } from "../../redux/campers/selector";
import FeaturesList from "../FeaturesList/FeaturesList";
import css from './Features.module.css';
import { List, ListItem } from "@mui/material";
import BookingForm from "../BookingForm/BookingForm";

export default function Features() {
    const camper = useSelector(selectCamperById);
    return (
        <section className={css.features}>
            {camper && <div>
                <div className={css.info}>
                    <FeaturesList camper={camper} />
                    <h3 className={css.ditails}>Vehicle details</h3>
                    <List sx={{display:'flex', flexDirection:'column', gap:"16px", paddingTop:'24px', marginTop:'24px', borderTop:'1px solid #DADDE1'}}>
                        <ListItem sx={{width:'527px', justifyContent:'space-between', padding:'0', height:'24px'}}>
                            <p className={css.item}>Form</p>
                            <p className={css.item}>{camper.form}</p>
                        </ListItem>
                        <ListItem sx={{width:'527px', justifyContent:'space-between', padding:'0', height:'24px'}}>
                            <p className={css.item}>Length</p>
                            <p className={css.item}>{camper.length}</p>
                        </ListItem>
                        <ListItem sx={{width:'527px', justifyContent:'space-between', padding:'0', height:'24px'}}>
                            <p className={css.item}>Width</p>
                            <p className={css.item}>{camper.width}</p>
                        </ListItem>
                        <ListItem sx={{width:'527px', justifyContent:'space-between', padding:'0', height:'24px'}}>
                            <p className={css.item}>Height</p>
                            <p className={css.item}>{camper.height}</p>
                        </ListItem>
                        <ListItem sx={{width:'527px', justifyContent:'space-between', padding:'0', height:'24px'}}>
                            <p className={css.item}>Tank</p>
                            <p className={css.item}>{camper.tank}</p>
                        </ListItem>                        
                        <ListItem sx={{width:'527px', justifyContent:'space-between', padding:'0', height:'24px'}}>
                            <p className={css.item}>Consumption</p>
                            <p className={css.item}>{camper.consumption}</p>
                        </ListItem>

                    </List>
                </div>
            </div>}
            <BookingForm/>
        </section>
    )
}