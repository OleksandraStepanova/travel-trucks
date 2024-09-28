import { Card, CardContent, IconButton, List, ListItem } from "@mui/material";
import css from './CampersItem.module.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heart from "../../img/heart.svg";
import redHeart from "../../img/red-heart.svg";
import star from "../../img/star.svg";
import map from "../../img/map.svg";
import diagram from "../../img/diagram.svg";
import fuel from "../../img/fuel-pump.svg";
import kitchen from "../../img/cup-hot.svg";
import wind from "../../img/wind.svg";
import droplet from "../../img/bi_droplet.svg";
import radio from "../../img/ui-radios.svg";

export default function CampersItem({ camper }) {
    const navigate = useNavigate();
    const [clicked, setClicked] = useState(false)
    const handleClicked = () => {
        setClicked(!clicked);
    }
    const handleClicke = (id) => {
        navigate(`/catalog/${id}`)
    }

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
                                onClick={handleClicked}
                                color={clicked ? 'error' : 'default'}>
                                {clicked ?
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
                    <List sx={{
                        display: 'flex',
                        gap: "8px",
                        flexWrap: 'wrap',
                        marginBottom:'24px'
                    }}>
                        <ListItem sx={{
                            gap: "8px",
                            padding: '12px 18px',
                            borderRadius: '100px',
                            width: '143px',
                            height: '48px',
                            backgroundColor:'#F2F4F7',
                        }}>
                            <img src={diagram} alt="diagram" />
                            <p className={css.characteristics}>{camper.transmission}</p>
                        </ListItem>
                        <ListItem sx={{
                            gap: "8px",
                            padding: '12px 18px',
                            borderRadius: '100px',
                            width: '143px',
                            height: '48px',
                            backgroundColor:'#F2F4F7',
                        }}>
                            <img src={fuel} alt="fuel" />
                            <p className={css.characteristics}>{camper.engine}</p>
                        </ListItem>
                        {camper.kitchen&&<ListItem sx={{
                            gap: "8px",
                            padding: '12px 18px',
                            borderRadius: '100px',
                            width: '143px',
                            height: '48px',
                            backgroundColor:'#F2F4F7',
                        }}>
                            <img src={kitchen} alt="kitchen" />
                            <p className={css.characteristics}>Kitchen</p>
                        </ListItem>}
                        {camper.AC&&<ListItem sx={{
                            gap: "8px",
                            padding: '12px 18px',
                            borderRadius: '100px',
                            width: '143px',
                            height: '48px',
                            backgroundColor:'#F2F4F7',
                        }}>
                            <img src={wind} alt="AC" />
                            <p className={css.characteristics}>AC</p>
                        </ListItem>}
                        {camper.bathroom&&<ListItem sx={{
                            gap: "8px",
                            padding: '12px 18px',
                            borderRadius: '100px',
                            width: '143px',
                            height: '48px',
                            backgroundColor:'#F2F4F7',
                        }}>
                            <img src={droplet} alt="droplet" />
                            <p className={css.characteristics}>Bathroom</p>
                        </ListItem>}
                        {camper.radio&&<ListItem sx={{
                            gap: "8px",
                            padding: '12px 18px',
                            borderRadius: '100px',
                            width: '143px',
                            height: '48px',
                            backgroundColor:'#F2F4F7',
                        }}>
                            <img src={radio} alt="radio" />
                            <p className={css.characteristics}>Radio</p>
                        </ListItem>}                   
                     </List>
                    <a className={css.a} onClick={()=>{handleClicke(camper.id)}}>Show more</a>
                </div>
            </CardContent>
        </Card>
    )
}