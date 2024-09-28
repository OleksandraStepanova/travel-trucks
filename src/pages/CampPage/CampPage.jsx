import {List, ListItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useParams } from "react-router-dom";
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
            <List sx={{display:'flex', justifyContent:'flex-start',padding:'0', marginBottom:"28px"}}>
                {camper.gallery[0]&&<ListItem sx={{padding:'0'}}>
                    <img className={css.image} src={camper.gallery[0].original} alt="firs image" />
                </ListItem>}
                {camper.gallery[1]&&<ListItem sx={{padding:'0'}}>
                    <img className={css.image} src={camper.gallery[1].original} alt="second image" />
                </ListItem>}
                {camper.gallery[2]&&<ListItem sx={{padding:'0'}}>
                    <img className={css.image} src={camper.gallery[2].original} alt="third image" />
                </ListItem>}
                {camper.gallery[3]&&<ListItem sx={{padding:'0'}}>
                    <img className={css.image} src={camper.gallery[3].original} alt="forth image" />
                </ListItem>}
            </List>
            <p className={css.description}>{camper.description}</p>
            <ul className={css.navList}>
                <li className={css.nav}>
                    <NavLink to="features" className={({isActive})=>isActive?css.active:css.a}>Features</NavLink>
                </li>
                <li className={css.nav} >
                    <NavLink to="reviews" className={({isActive})=>isActive?css.active:css.a}>Reviews</NavLink>
                </li>
            </ul>
            <Outlet />
        </section>}
    </>
    )

}