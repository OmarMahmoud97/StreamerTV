import "./NavBar.scss";
import AvatarImg from '../../assets/images/Mohan-muruge.jpg';
import NavLogo from '../../assets/logo/BrainFlix-logo.svg'


export default function NavBar() {
  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <div className="nav__logo-wrapper">
          <div className="nav__logo">
            <img src={NavLogo} alt="logo" className="nav__logo-img" />
          </div>
        </div>
        <div className="nav__search-wrapper">
          <div className="nav__search">
            <input className="nav__input" type="text" name="input" id="search" placeholder="Search" />
          </div>
          <div className="nav__avatar-mobile">
            <img className="nav__mohan-mobile" src={AvatarImg} alt="img" />
          </div>
        </div>
        <div className="nav__btn-wrapper">
          <div className="nav__btn">
            <a href="google.com" className="nav__anchor" >
              <p className="nav__upload">Upload</p>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}