import '../Styles/Contactme.css'
import { FaLinkedin, FaEnvelope, FaGithubSquare } from "react-icons/fa";


function Contactme() {
    return (
        <div className='Contactme'>
                       <div className="contact-title">
                <h2>
                Contact me
                </h2>
            </div>
                       <div className='container-contact-icons'>
                <div>
                    <a href='https://www.linkedin.com/in/sasha-valenzuela-polanco-aaa892172/'>
                    <FaLinkedin className='icon-contact linkedin' />
                    </a>
                    
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/sasha-valenzuela-polanco-aaa892172/'>
                    <FaEnvelope className='icon-contact mail'/>
                    </a>
                    
                </div>
                <div>
                    <a href='https://github.com/sashaariel'>
                    <FaGithubSquare className='icon-contact github-contact'/>
                    </a>
                </div>
            </div>
           
        </div>
    )
}

export default Contactme;