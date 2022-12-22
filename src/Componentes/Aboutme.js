
import '../Styles/Aboutme.css';
import { FaBookReader, FaVolumeUp, FaMapMarkerAlt } from "react-icons/fa";

function Aboutme() {
    return (
        <div className="Aboutme">
            <div className='Aboutme-container'>
                <section className='Aboutme-text'>
                    <h2>
                        ABOUT ME
                    </h2>
                    <p>
                        I'm Sasha, I dedicate my time to cretae projects for web sites, using front-end technologies.
                        Throughout my career <strong>I've dedicated myself to technology </strong>from different areas, starting in sales, to later <strong>provide technical advice to clients</strong>, for integrations into their on-premise and cloud infrastructures.
                        Nowadays I'm dedicated to web development, through front-end technologies, and <strong>every day I study and learn more about different libraries, design and the back-end path </strong>.
                        <br>
                        </br>
                        <br>
                        </br>
                        I am a multifaceted woman, with great interest in technologies current, constantly carrying out training courses in programming and hardware, having a great attraction towards the knowledge and new challenges.
                    </p>
                </section>
                <section className='Aboutme-icons'>
                    <FaBookReader
                    className='About-icon'/>
                    <p>29 years old </p>
                    <FaVolumeUp 
                    className='About-icon'/>
                    <p>Spanish & English</p>
                    <FaMapMarkerAlt
                    className='About-icon' />
                    <p>Argentina & Chile</p>
                </section>
                <section className='Aboutme-image'>
                    <img
                        className='image-sasha'
                        src={require('../img/web-desing-sasha2.png')}
                        alt='Image Sasha'
                    />
                </section>
            </div>
        </div>
    );
}

export default Aboutme;