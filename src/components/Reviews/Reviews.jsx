import { useSelector } from "react-redux";
import { selectCamperById } from "../../redux/campers/selector";
import { List, ListItem } from "@mui/material";
import css from './Rewievs.module.css';
import star from '../../img/star.svg'

function StarsRaiting({rating}){
    const stars = Array.from({ length: rating }, (_, index) => (
        <span key={index}>
            <img src={star} alt="star" />
        </span>
    ));    
    return <div>{stars}</div>
    }

export default function Reviews() {
    const camper = useSelector(selectCamperById);
    
    
    return (
        <>
            {camper && <List sx={{width:'631px'}}>
                {camper.reviews.map((review) => 
                (<ListItem key={review.reviewer_name} sx={{display:'flex',flexDirection:'column', alignItems:'start'}}>
                    <div className={css.info}>
                        <div className={css.ava}>{review.reviewer_name}</div>
                        <div className={css.rating}>
                            <p className={css.name}>{review.reviewer_name}</p>
                            <StarsRaiting rating={review.reviewer_rating}/>                        
                        </div>
                    </div>  
                    <p className={css.comment}>{review.comment}</p>
                    </ListItem>)
                )}
            </List>}
        </>
    )
}