import { List, ListItem } from "@mui/material";
import { useSelector } from "react-redux";
import { selectCampersItem } from "../../redux/campers/selector";
import CampersItem from "../CampersItem/CampersItem";
import { useState } from "react";
import css from './CampersList.module.css'

export default function CampersList() {

    const campers = useSelector(selectCampersItem);

    const [visibleCards, setVisibleCards] = useState(4);
    const cardPerPage = 4;
    const loadMoreCard = () => {
        setVisibleCards((prevVisibleCards) => prevVisibleCards + cardPerPage);
    }
    const totalPage = campers.length;   


    return (
        <section style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <List>
                {campers.slice(0,visibleCards).map((camper) => (
                    <ListItem key={camper.id}>
                        <CampersItem camper={camper} />
                    </ListItem>
                ))}
            </List>
            {visibleCards<totalPage&&<button onClick={loadMoreCard} className={css.button}>Load more</button>}
        </section>
    )
}