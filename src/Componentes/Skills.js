import '../Styles/Skills.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaAws, FaBootstrap, FaGitAlt } from "react-icons/fa";



function Skills() {
    return (
        <div className='container-skills'>
            <div className="title-skills">
                <h2> SKILLS </h2>
            </div>
            <div className='container-skills-and-img'>
                <div className="container-skills-icons">
                    <div>
                        <FaHtml5 className='icono-skils html' />
                        <p>HTML</p>
                    </div>
                    <div>
                        <FaCss3Alt className='icono-skils css' />
                        <p>CSS</p>
                    </div>
                    <div>
                        <FaBootstrap className='icono-skils bootstrap' />
                        <p>Bootstrap</p>
                    </div>
                    <div>
                        <FaJs className='icono-skils js' />
                        <p>JavaScript</p>
                    </div>
                    <div>
                        <FaReact className='icono-skils react' />
                        <p>React</p>
                    </div>
                    <div>
                        <FaGithub className='icono-skils github' />
                        <p>Github</p>
                    </div>
                    <div>
                        <FaGitAlt className='icono-skils git' />
                        <p>Git</p>
                    </div>
                    <div>
                        <FaAws className='icono-skils aws' />
                        <p>AWS</p>
                    </div>
                </div>
                <div className='img-skills-container'>
                    <img src={require('../img/skills.png')}
                        alt='imagen de skills'
                        className='img-skills' />
                </div>
            </div>
        </div>
    )
}


export default Skills