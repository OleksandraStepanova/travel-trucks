import { List, ListItem } from "@mui/material";
import css from "./FeaturesList.module.css";
import diagram from "../../img/diagram.svg";
import fuel from "../../img/fuel-pump.svg";
import kitchen from "../../img/cup-hot.svg";
import wind from "../../img/wind.svg";
import droplet from "../../img/bi_droplet.svg";
import radio from "../../img/ui-radios.svg";


export default function FeaturesList({camper}) {
    return (
        <List sx={{
            display: 'flex',
            flexDirection:'row',
            gap: "8px",
            flexWrap: 'wrap',
            marginBottom:'24px'
        }}>
                        <ListItem sx={{
                            gap: "8px",
                            padding: '12px 18px',
                            borderRadius: '100px',                            
                            height: '48px',
                            backgroundColor:'#F2F4F7',
                            display:"flex",
                            width: 'auto'
                        }}>
                            <img src={diagram} alt="diagram" />
                            <p className={css.characteristics}>{camper.transmission}</p>
                        </ListItem>
                        <ListItem sx={{
                            gap: "8px",
                            padding: '12px 18px',
                            borderRadius: '100px',
                            height: '48px',
                            backgroundColor:'#F2F4F7',
                            display:"flex",
                            width: 'auto'
                        }}>
                            <img src={fuel} alt="fuel" />
                            <p className={css.characteristics}>{camper.engine}</p>
                        </ListItem>
                        {camper.kitchen&&<ListItem sx={{
                            gap: "8px",
                            padding: '12px 18px',
                            borderRadius: '100px',
                            height: '48px',
                            backgroundColor:'#F2F4F7',
                            display:"flex",
                            width: 'auto'
                        }}>
                            <img src={kitchen} alt="kitchen" />
                            <p className={css.characteristics}>Kitchen</p>
                        </ListItem>}
                        {camper.AC&&<ListItem sx={{
                            gap: "8px",
                            padding: '12px 18px',
                            borderRadius: '100px',
                            height: '48px',
                            backgroundColor:'#F2F4F7',
                            display:"flex",
                            width: 'auto'
                        }}>
                            <img src={wind} alt="AC" />
                            <p className={css.characteristics}>AC</p>
                        </ListItem>}
                        {camper.bathroom&&<ListItem sx={{
                            gap: "8px",
                            padding: '12px 18px',
                            borderRadius: '100px',
                            height: '48px',
                            backgroundColor:'#F2F4F7',
                            display:"flex",
                            width: 'auto'
                        }}>
                            <img src={droplet} alt="droplet" />
                            <p className={css.characteristics}>Bathroom</p>
                        </ListItem>}
                        {camper.radio&&<ListItem sx={{
                            gap: "8px",
                            padding: '12px 18px',
                            borderRadius: '100px',
                            height: '48px',
                            backgroundColor:'#F2F4F7',
                            display:"flex",
                            width: 'auto'
                        }}>
                            <img src={radio} alt="radio" />
                            <p className={css.characteristics}>Radio</p>
                        </ListItem>}                   
                     </List>
    )
}