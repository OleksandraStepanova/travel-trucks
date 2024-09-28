import { Card, CardContent, IconButton, List, ListItem } from "@mui/material";
import css from './CampersItem.module.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
                                    <img src="../../../public/red-heart.svg" alt="like" /> :
                                    <img src="../../../public/heart.svg" alt="like" />}
                            </IconButton>                            
                        </div>
                    </div>
                    <div className={css.wrapper}>
                        <div className={css.reviews}>
                            <img src="../../../public/star.svg" alt="star" />
                            <p>{camper.rating}</p>
                            <p>({camper.reviews.length} Reviews)</p>
                        </div>
                        <div className={css.reviews}>
                            <img src="../../../public/map.svg" alt="map" />
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
                            <img src="../../../public/diagram.svg" alt="diagram" />
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
                            <img src="../../../public/fuel-pump.svg" alt="fuel" />
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
                            <img src="../../../public/cup-hot.svg" alt="kitchen" />
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
                            <img src="../../../public/wind.svg" alt="AC" />
                            <p className={css.characteristics}>AC</p>
                        </ListItem>}
                     </List>
                    <a className={css.a} onClick={()=>{handleClicke(camper.id)}}>Show more</a>
                </div>
            </CardContent>
        </Card>
    )
}