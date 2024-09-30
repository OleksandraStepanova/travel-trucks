import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import CampersList from "../../components/CampersList/CampersList";
import FiltersForSearch from "../../components/FiltersForSearch/FiltersForSearch";
import { selectACFilter, selectFormFilter, selectLocationFilter } from "../../redux/filters/selector";
import toast,{ Toaster } from "react-hot-toast";
import { selectError, selectIsLoading } from "../../redux/campers/selector";
import Loader from "../../components/Loader/Loader";

const notifyError = () => toast.error("Nothing was found for this query");


export default function CatalogPage() {
    
    const dispatch = useDispatch();
    const location = useSelector(selectLocationFilter).trim();    
    const form = useSelector(selectFormFilter);
    const AC = useSelector(selectACFilter);
   

    useEffect(() => {      
        
        dispatch(fetchCampers({ location, form, AC })).unwrap().then().catch((error) => {
            if (error) notifyError();
        })
    }, [dispatch, location, form, AC])
    
    const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectError);
    
    return (<section style={{display:'flex',justifyContent:'space-between', paddingRight:'64px'}}>
        <FiltersForSearch />
        {isLoading&&<Loader/>}
        <CampersList />
        {isError&&<Toaster/>}
    </section>)
}