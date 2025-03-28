import './Home.css'
import { assets } from '../../assets/assets'

const Home = () => {
  return (
    <div className="home">
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

        <img
          src={assets.lepestok_main}
          alt="Lepestok"
          className="home-image-main"
        />
      </div>

      <div className="home-benefits">
        <h1>
          Чому саме <span>spark academy</span>?
        </h1>
      </div>
    </div>
  )
}

export default Home
