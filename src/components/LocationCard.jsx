import '../components/style/LocationCard.css'

const LocationCard = ({location}) => {
  return (
    <article className='article'>
        <h2 className='article__h2'>{location?.name}</h2>
        <ul className='article__ul'>
            <li className='article__li'><span className='article__span'>Type</span><span className='article__span-li'>{location?.type}</span></li>
            <li className='article__li'><span className='article__span'>Dimension</span><span className='article__span-li'>{location?.dimension}</span></li>
            <li className='article__li'><span className='article__span'>Population</span><span className='article__span-li'>{location?.residents.length}</span></li>
        </ul>
    </article>
  )
}

export default LocationCard