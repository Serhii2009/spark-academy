import './MainSection.css'
import { assets } from '../../assets/assets'

const Home = () => {
  return (
    <div className="home-main">
      <div className="home-text-content">
        <h1>Якісні знання - основа успіху</h1>

        <p className="description">
          Мрієте вільно подорожувати, будувати карʼєру в міжнародній компанії
          або впевнено спілкуватись з людьми з усього світу?
          <br />
          Англійська мова - це двері, які відчиняють безмежний простір
          можливостей для росту та розвитку.
          <br />А <span>SparkAcademy</span> - це ключ до втілення цих
          можливостей в життя!
        </p>

        <button className="home-cta-button">Записатися на курс</button>
      </div>

      <div className="circle-container">
        <div className="circle"></div>
      </div>

      <img
        src={assets.lepestok_main}
        alt="Lepestok"
        className="home-image-main"
      />
    </div>
  )
}

export default Home
