import { useNavigate } from 'react-router-dom';
import css from './MainPage.module.css'

export default function MainPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/catalog");
  };
    return (
        <section className={css.section}>
            <div>
                <h1>Campers of your dreams</h1>
                <p className={css.p}>You can find everything you want in our catalog</p>
                <a className={css.a} onClick={handleButtonClick}>View Now</a>
            </div>
        </section>
    )
}