import { NavLink } from "react-router-dom";
import css from './Navigation.module.css'

export default function Navigation() {
    return (
        <nav className={css.nav}>
            <NavLink to="/" className={({isActive})=>isActive?css.active:css.a}>Home</NavLink>
            <NavLink to="/catalog" className={({isActive})=>isActive?css.active:css.a} >Catalog</NavLink>
        </nav>
    )
}