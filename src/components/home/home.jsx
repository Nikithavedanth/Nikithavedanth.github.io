import './home.css';
import { Social} from "./social";
import { Data } from "./data";
import profileImage from '../../assets/Nikki.jpg';
const Home = () => {
    return(
        <section className="home section" id="home">
            <div className="home__portrait-wrap">
                <img className="home__img" src={profileImage} alt="Nikitha Vedant Madabhushi" />
                <span className="home__portrait-note">Curious by nature. Thoughtful by design.</span>
            </div>
            <div className="home__container container">
                <div className="home__content">
                    <Social />
                    <Data />
                </div>
            </div>
        </section>
    )
}
export default Home;