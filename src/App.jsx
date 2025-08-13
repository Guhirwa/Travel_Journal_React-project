import React from 'react'
import Header from './assets/components/Header'
import JournarEntry  from './assets/components/JournarEntry'
import mountFuji from '/src/assets/images/Mount_Fuji.jpg'
import mapIcon from '/src/assets/images/location_icon.svg'

const App = () => {
  return (
    <>
      <Header />
      <JournarEntry 
        mountFuji = {{
          src: mountFuji,
          alt: "mount fuji"
        }}
        mapIcon = {{
          src: mapIcon,
          alt: "map marker icon"
        }}
        mapLink = {{
          target:"_blank",
          href: "https://maps.app.goo.gl/FJpfbrPHGJ4aZNxN8",
          text: "View on Google Map"
        }}
        mountName = "Mount Fuji"
        date = "12 Jan, 2025 - 24 Sept 2025"
        generalText = " Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet) Mount Fuji is the single most poular tourist site in Japan, for both Japanese and foreign tourists."
      />
    </>
  )
}

export default App