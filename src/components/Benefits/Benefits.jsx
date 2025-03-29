import './Benefits.css'
import { assets } from '../../assets/assets'

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="circle-bg"></div>

      <h2>
        Чому саме <span>spark academy</span>?
      </h2>

      <div className="cards-container">
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src={assets.firstbenefit} alt="Методика" />
              <h3>Ефективна та комплексна методика</h3>
            </div>
            <div className="card-back">
              <p>
                Фокусуємось на мовних трендах та сучасних, ефективних підходах
                до вивчення мови. Актуальні автентичні матеріали та ресурси,
                інтерактивні методики та розмовні клуби. Кожен урок це крок до
                Вашої мовної впевненості.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src={assets.secondbenefit} alt="Викладачі" />
              <h3>Висококваліфіковані викладачі</h3>
            </div>
            <div className="card-back">
              <p>
                Наші викладачі – сертифіковані фахівці, які точно знають, як
                навчити Вас англійської. CELTA, DELTA, TESOL, TEFL – не просто
                набір літер, а гарантія Вашого успіху.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src={assets.thirdbenefit} alt="Прогрес" />
              <h3>Система постійного відстеження прогресу</h3>
            </div>
            <div className="card-back">
              <p>
                Регулярний моніторинг знань та прогресу дозволяє бачити реальні
                результати, а персональні рекомендації та коригування
                навчального плану, відповідно до Ваших досягнень, гарантують
                ефективність навчання.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src={assets.forthbenefit} alt="Екзамени" />
              <h3>Спеціалізація на підготовці до екзаменів</h3>
            </div>
            <div className="card-back">
              <p>
                Отримайте структуровану програму підготовки, практику реальних
                тестів та експертний супровід на кожному етапі навчання, щоб Ви
                з впевненістю склали іспити.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src={assets.fifthbenefit} alt="Підхід" />
              <h3>Адаптивний підхід</h3>
            </div>
            <div className="card-back">
              <p>
                Жодних шаблонів, тільки індивідуальний підхід, враховуючи Ваші
                цілі та стиль навчання. Ми перетворюємо складне на зрозуміле.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src={assets.sixthbenefit} alt="Ціни" />
              <h3>Доступні ціни</h3>
            </div>
            <div className="card-back">
              <p>
                Навчання без стресу для бюджету — пропонуємо доступні ціни та
                гнучкі варіанти оплати, щоб Ви могли зосередитись на своєму
                прогресі, а не на витратах.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits
