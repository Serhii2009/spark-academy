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
        {/* Картка 1 */}
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

        {/* Картка 2 */}
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src={assets.secondbenefit} alt="Викладачі" />
              <h3>Професійні викладачі</h3>
            </div>
            <div className="card-back">
              <p>
                Наші викладачі - сертифіковані фахівці з міжнародними дипломами
              </p>
            </div>
          </div>
        </div>

        {/* Картка 3 */}
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src="/icons/progress.svg" alt="Прогрес" />
              <h3>Відстеження прогресу</h3>
            </div>
            <div className="card-back">
              <p>Регулярно оцінюємо ваші знання та адаптуємо програму</p>
            </div>
          </div>
        </div>

        {/* Картка 4 */}
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src="/icons/exams.svg" alt="Екзамени" />
              <h3>Підготовка до іспитів</h3>
            </div>
            <div className="card-back">
              <p>
                Структуровані курси для підготовки до IELTS, TOEFL та інших
                іспитів
              </p>
            </div>
          </div>
        </div>

        {/* Картка 5 */}
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src="/icons/approach.svg" alt="Підхід" />
              <h3>Індивідуальний підхід</h3>
            </div>
            <div className="card-back">
              <p>Програма навчання, що відповідає вашим цілям та рівню</p>
            </div>
          </div>
        </div>

        {/* Картка 6 */}
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src="/icons/prices.svg" alt="Ціни" />
              <h3>Доступні ціни</h3>
            </div>
            <div className="card-back">
              <p>
                Якісне навчання за доступною вартістю з гнучкими умовами оплати
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits
