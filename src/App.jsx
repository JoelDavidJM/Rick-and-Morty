
import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationCard from './components/LocationCard'
import ResidentsCard from './components/ResidentsCard'

function App() {

  const locationId = getRandomNumber(126)
  const [inputValue, setInputValue] = useState(locationId)
  const url = `https://rickandmortyapi.com/api/location/${inputValue}`
  const [location, getLocation, hasError] = useFetch(url)

  useEffect(() => {
    getLocation()
  }, [inputValue])

  const inputLocation = useRef()

  const hadleSubmint = e => {
    e.preventDefault()
    setInputValue(inputLocation.current.value)
  }

  return (
    <div>
      <img className='div__img' src="https://i.pinimg.com/originals/29/bd/26/29bd261d201e956588ee777d37d26800.gif" alt="" />
      <form className='form' onSubmit={hadleSubmint} >
        <input className='form__input' ref={inputLocation} type="text" />
        <button className='form__button'>Search</button>
      </form>
      {
        hasError
          ? 
          <>
          <h2 className='div__hasError-h2'>❌Hey! you must provide an id from 1 to 126</h2>
          <img className='div__hasError-img' src="https://i.pinimg.com/originals/da/7a/8e/da7a8ef32e993c6b6b854622aac0badc.gif" alt="" />
          </>
          : (
            <>
              < LocationCard
                location={location}
              />
              <div className='resident__container'>
                {
                  location?.residents.map(url => (
                    <ResidentsCard
                      key={url}
                      url={url}
                    />
                  ))
                }
              </div>
            </>
          )
      }


    </div>
  )
}

export default App
