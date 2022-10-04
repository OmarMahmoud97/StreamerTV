import "./NavBar.scss";
import AvatarImg from "../../assets/images/Mohan-muruge.jpg";
import UploadImg from "../../assets/icons/upload.svg";
import NavLogo from "../../assets/logo/BrainFlix-logo.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <div className="nav__logo-wrapper">
          <div className="nav__logo">
            <img src={NavLogo} alt="logo" className="nav__logo-img" />
          </div>
        </div>
        <div className="nav__content-wrapper">
          <div className="nav__search-wrapper">
            <div className="nav__search">
              <input
                className="nav__input"
                type="text"
                name="input"
                id="search"
                placeholder="Search"
              />
            </div>
            <div className="nav__avatar-mobile">
              <img className="nav__mohan-mobile" src={AvatarImg} alt="img" />
            </div>
          </div>
          <div className="nav__btn-wrapper">
            <div className="nav__btn">
              <Link to="/upload" className="nav__link">
                <button className="nav__anchor">
                  <img
                    className="nav__upload"
                    src={UploadImg}
                    alt="Upload link"
                  ></img>
                  <p className="nav__upload-text">Upload</p>
                </button>
              </Link>
            </div>
          </div>
          <div className="nav__avatar-tablet">
            <img className="nav__mohan-tablet" src={AvatarImg} alt="img" />
          </div>
        </div>
      </div>
    </nav>
  );
}
