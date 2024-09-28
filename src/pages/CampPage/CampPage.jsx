import {List, ListItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCamperById } from "../../redux/campers/selector";
import { fetchCamperById } from "../../redux/campers/operations";
import { useEffect } from "react";
import css from './CampPage.module.css';


export default function CapmPage() {
    
    const dispatch = useDispatch();
    const {
        id,
    } = useParams();


    useEffect(() => {
         dispatch(fetchCamperById(id))
     }, [dispatch, id])
    
    const camper = useSelector(selectCamperById);    

    return (<>
        {camper&&<section className={css.camp}>
            <h2 className={css.title}>{camper.name}</h2>
            <div className={css.wrapper}>
                <div className={css.reviews}>
                    <img src="../../../public/star.svg" alt="star" />
                    <p>{camper.rating}</p>
                    {camper.reviews&&<p>({camper.reviews.length} Reviews)</p>}
                </div>
                <div className={css.location}>
                    <img src="../../../public/map.svg" alt="map" />
                    <p>{camper.location}</p>
                </div>
            </div>
            <p className={css.price}>&euro;{camper.price},00</p>
            <List sx={{display:'flex', justifyContent:'space-between'}}>
                {camper.gallery[0]&&<ListItem>
                    <img className={css.image} src={camper.gallery[0].original} alt="firs image" />
                </ListItem>}
                {camper.gallery[1]&&<ListItem>
                    <img className={css.image} src={camper.gallery[1].original} alt="second image" />
                </ListItem>}
                {camper.gallery[2]&&<ListItem>
                    <img className={css.image} src={camper.gallery[2].original} alt="third image" />
                </ListItem>}
                {camper.gallery[3]&&<ListItem>
                    <img className={css.image} src={camper.gallery[3].original} alt="forth image" />
                </ListItem>}
            </List>
        </section>    }
    </>
    )

}