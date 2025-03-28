import './TopBar.css'
import { assets } from '../../assets/assets'

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-social">
        <p>Соцмережі:</p>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon instagram"
          >
            <img src={assets.instagram_icon} alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon facebook"
          >
            <img src={assets.facebook_icon} alt="Facebook" />
          </a>
        </div>
      </div>
      <div className="top-bar-contacts">
        <div className="gmail-part">
          <img src={assets.gmail_icon} alt="Gmail" />
          <a href="mailto:sprk.english@gmail.com" className="email">
            sprk.english@gmail.com
          </a>
        </div>

        <div className="separator"></div>

        <div className="phone-part">
          <img src={assets.phone_icon} alt="Phone" />
          <a href="tel:+380000000000" className="phone">
            +380 00 000 00000
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopBar
