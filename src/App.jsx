import Header from './assets/components/Header'
import JournarEntry  from './assets/components/JournarEntry'
import data from '/src/data.js'

const App = () => {

  const entryElements = data.map((entry) => {
    return (
      <JournarEntry 
        img = {entry.img}
        title = {entry.title}
        country = {entry.country}
        googleMapsLink = {entry.googleMapsLinks}
        dates = {entry.dates}
        text = {entry.text}
      />
    )
  })
 
  return (
    <>
      <Header />
      {entryElements}
    </>
  )
}

export default App