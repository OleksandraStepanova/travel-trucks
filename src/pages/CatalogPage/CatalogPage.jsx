import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import CampersList from "../../components/CampersList/CampersList";


export default function CatalogPage() {
     const dispatch = useDispatch();
     useEffect(() => {
        dispatch(fetchCampers())
     }, [dispatch])
    
    return (<>
        <CampersList/>
    </>)
}