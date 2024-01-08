import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import '../components/style/ResidentsCard.css'

const ResidentsCard = ({url}) => {

    const [residents, getResidents] = useFetch(url)

    useEffect(() => {
        getResidents()
    }, [])

  return (
    <article className="resident">
        <header className="resident__header">
        <img className="resident__img" src={residents?.image} alt="" />
        <div className="resident__status">
            <div className={`resident__Status__circle ${residents?.status}`}>
                <span className="resident__satus__value">{residents?.status}</span>
            </div>
        </div>
        </header>
        <section className="resident__body">
            <h3 className="resident__name">{residents?.name}</h3>
            <hr className="resident__hr"/>
            <ul className="resident__list">
            <li className="resident__item"><span className="resident__label">Species: </span><span className="resident__value">{residents?.species}</span></li>
            <li className="resident__item"><span className="resident__label">Origin: </span><span className="resident__value">{residents?.origin.name}</span></li>
            <li className="resident__item"><span className="resident__label">Episodes where appear: </span><span className="resident__value">{residents?.episode.length}</span></li>                
            </ul>
        </section>
    </article>
  )
}

export default ResidentsCard