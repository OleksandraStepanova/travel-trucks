import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import CampersList from "../../components/CampersList/CampersList";
import FiltersForSearch from "../../components/FiltersForSearch/FiltersForSearch";
import { selectFormFilter, selectLocationFilter } from "../../redux/filters/selector";


export default function CatalogPage() {
    const dispatch = useDispatch();
    const location = useSelector(selectLocationFilter).trim();    
    const form = useSelector(selectFormFilter);
   

    useEffect(() => {      
        dispatch(fetchCampers({ location, form }))             
     }, [dispatch, location, form])
    
    return (<section style={{display:'flex',justifyContent:'space-between', paddingRight:'64px'}}>
        <FiltersForSearch/>
        <CampersList/>
    </section>)
}