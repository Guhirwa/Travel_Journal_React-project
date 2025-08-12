import React from 'react'

const JournarEntry = () => {
  return (
    <article className = 'flex mx-auto w-2/5 gap-6 mt-6'>
        <div className = 'w-40 h-52 shrink-0'>
            <img className = 'h-full w-full bg-cover rounded-md' src="/src/assets/images/Mount_Fuji.jpg" alt="mount fuji" />
        </div>
        <div> 
            <div className = 'flex'>
                <img src="/src/assets/images/location_icon.svg" alt="map marker icon" />
                <span className = 'font-medium'>JAPAN</span>
                <a className = 'ml-3 text-gray-600 underline' target = '_blank' href="https://maps.app.goo.gl/FJpfbrPHGJ4aZNxN8">View on Google Map</a>
            </div>
            <h2 className = 'font-bold my-2 text-2xl'>Mount Fuji</h2>
            <p className = 'font-bold  my-3'>12 Jan, 2025 - 24 Sept 2025</p>
            <p className = 'font-light'>
                Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet)
                Mount Fuji is the single most poular tourist site in Japan, for both Japanese and foreign tourists.
            </p>
        </div>

    </article>
  )
}

export default JournarEntry