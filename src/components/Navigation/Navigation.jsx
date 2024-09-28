import { NavLink } from "react-router-dom";
import css from './Navigation.module.css'

export default function Navigation() {
    return (
        <nav className={css.nav}>
            <NavLink className={css.a} to='/'>Home</NavLink>
            <NavLink className={css.a} to='/catalog'>Catalog</NavLink>
        </nav>
    )
}