import { Card, CardContent, IconButton} from "@mui/material";
import css from './CampersItem.module.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import heart from "../../img/heart.svg";
import redHeart from "../../img/red-heart.svg";
import star from "../../img/star.svg";
import map from "../../img/map.svg";
import FeaturesList from "../FeaturesList/FeaturesList";
import { useDispatch, useSelector } from "react-redux";
import { fetchSelected } from "../../redux/selected/slice";
import { selectSelected } from "../../redux/selected/selector";


export default function CampersItem({ camper }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [clicked, setClicked] = useState(false);
    const selected = useSelector(selectSelected);
    
    

    const handleClicked = (id) => {
        setClicked(!clicked);
         dispatch(fetchSelected(id)); 
              
    }
    const handleClicke = (id) => {
        navigate(`/catalog/${id}`)
    }

    useEffect(() => {
       
    })
    return (
        <Card sx={{ width: '888px', height: '368px', padding: '24px', borderRadius:'20px', boxShadow:'none', border: '1px solid #DADDE1'}}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding:'0' }}>
                <img style={{ width: '292px', height: '320px', objectFit: 'cover', borderRadius: '10px' }} src={camper.gallery[0].original} alt={camper.name} />
                <div style={{width:'524px', height:'320px'}}>
                    <div className={css.title}>
                        <h2>{camper.name}</h2>
                        <div className={css.price}>
                            <p>&euro;{camper.price},00</p>
                            <IconButton variant="text" type="button"
                                sx={{
                                    outline: '0px solid #fff',
                                    '&:focus': {
                                        outline:'0px solid #fff'
                                    }
                                }}
                                onClick={()=>handleClicked(camper.id)}
                                color={clicked ? 'error' : 'default'}>
                                {clicked||selected.includes(camper.id) ?
                                    <img src={redHeart} alt="like" /> :
                                    <img src={heart} alt="like" />}
                            </IconButton>                            
                        </div>
                    </div>
                    <div className={css.wrapper}>
                        <div className={css.reviews}>
                            <img src={star} alt="star" />
                            <p>{camper.rating}</p>
                            <p>({camper.reviews.length} Reviews)</p>
                        </div>
                        <div className={css.reviews}>
                            <img src={map} alt="map" />
                            <p>{camper.location}</p>
                        </div>
                    </div>                    
                    <p className={css.description}>{camper.description}</p>
                    <FeaturesList camper={camper} />
                    <a className={css.a} onClick={()=>{handleClicke(camper.id)}}>Show more</a>
                </div>
            </CardContent>
        </Card>
    )
}