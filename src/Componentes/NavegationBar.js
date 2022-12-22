import '../Styles/Header.css'


function Header() {
  return (
    <header>
      <div className='container-header'>
        <div className="logo">
          <a href="#">
            <img
              src={require('../img/logo_sasha.png')}
              alt='Imagen logo' />
          </a>
        </div>
        <div className='menu'>
          <nav>
            <ul>
              <li> <a href='#'> About me</a> </li>
              <li> <a href='#'> Expirience</a> </li>
              <li> <a href='#'> Skills</a> </li>
              <li> <a href="https://www.linkedin.com/in/sasha-valenzuela-polanco-aaa892172"> Contact me</a> </li>
            </ul>
          </nav>
        </div>
      </div>
      </header>
      );
}

export default Header;