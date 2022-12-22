
import '../Styles/Experience.css'

function Experience() {
    return (
        <div className='Experience'>
          <div className='expiriene-title'>  
          <h4>My path in web development</h4>
            <h2>EXPERIENCE
            </h2>
            
            </div>
            <div className="timeline">
                <div className="timeline__component">
                    <div className="timeline__date timeline__date--right">December, 2022</div>
                </div>
                <div className="timeline__middle">
                    <div className="timeline__point"></div>
                </div>
                <div className="timeline__component timeline__component--bg">
                    <h2 className="timeline__title">I create my own proyect</h2>
                    <p className="timeline__paragraph">
                        I create my own project fot my first freelance job, creating the desing of the page
                        and developing the code for the right functioning. 💻
                    </p>
                </div>
                <div className="timeline__component timeline__component--bg">
                    <h2 className="timeline__title">My firts web with React.js</h2>
                    <p className="timeline__paragraph">
                    I learn React.js in front-end classes, at Fundación YPF. 
                    </p>
                    <p className="timeline__paragraph">
                    So I decide create my cv presentation with this technology. 💪
                    </p>
                </div>
                <div className="timeline__middle">
                    <div className="timeline__point"></div>
                </div>
                <div className="timeline__component">
                    <div className="timeline__date">November, 2022</div>
                </div>
                <div className="timeline__component">
                    <div className="timeline__date timeline__date--right">March, 2022</div>
                </div>
                <div className="timeline__middle">
                    <div className="timeline__point"></div>
                </div>
                <div className="timeline__component timeline__component--bg">
                    <h2 className="timeline__title">I learn Html, Css, and Js</h2>
                    <p className="timeline__paragraph">
                        I learn by my self, and with classes from YPF, putting in practice creating my firts projects with partners , using Html Css y JavaScript. 👩‍💻 
                    </p>
                </div>
                <div className="timeline__component timeline__component--bottom timeline__component--bg">
                    <h2 className="timeline__title">I start watching programing videos</h2>
                    <p className="timeline__paragraph">
                    I start watching youtube videos and studying with a friend for fun, learning for the first time Html and Css. 🤓  </p>
                    <p className="timeline__paragraph">
                        
                    </p>
                </div>
                <div className="timeline__middle">
                    <div className="timeline__point"></div>
                    <div className="timeline__point timeline__point--bottom"></div>
                </div>
                <div className="timeline__component timeline__component--bottom">
                    <div className="timeline__date">June 28, 2021</div>
                </div>
            </div>

          
            {/* <div className='container'>
                <div className='card'>
                    <img src={require('../img/veeam.png')} />
                    <h4>Veeam Software</h4>
                    <p>2021-2019</p>
                    <strong> Infraestructure Expert </strong>
                </div>
                <div className='card'>
                    <img src={require('../img/lenovo.jpg')} />
                    <h4>Lenovo</h4>
                    <p>2019-2018</p>
                    <strong> Ecommerce </strong>
                </div>
                <div className='card'>
                    <img src={require('../img/Atento.JPG')} />
                    <h4>Atento</h4>
                    <p>2018-2016</p>
                    <strong>Telemarketer</strong>
                </div>
            </div>
         */}
         </div>

    )
 }

export default Experience;