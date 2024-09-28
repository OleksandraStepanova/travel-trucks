import { List, ListItem } from "@mui/material";
import { useSelector } from "react-redux";
import { selectCampersItem } from "../../redux/campers/selector";
import CampersItem from "../CampersItem/CampersItem";

export default function CampersList() {
    const campers = useSelector(selectCampersItem);
    return (
        <List>
            {campers.map((camper) => (
                <ListItem key={camper.id}>
                    <CampersItem camper={camper} />
                </ListItem>
            ))}
        </List>
    )
}