import '../Styles/Hello.css'

function Hello() {
    return (
        <div className="container-cover">
            <div className='cover'>
                <section className='text-cover'>
            <h1> Hello! I'm Sasha, Frontend Developer</h1>
            <a href='https://drive.google.com/file/d/114jGktMjXABtqgk66A6X7NceBg4zl-x0/view?usp=sharing' className='btn-resume'>
                My Resume
            </a>
            </section>
            <section className='cover-image'>
                      <img
              src={require('../img/hero-img.png')}
              alt='Imagen logo' />
         
          </section>
          </div>
        </div>
    )
}

export default Hello;