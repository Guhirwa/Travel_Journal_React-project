import locationIcon from '/src/assets/images/location_icon.svg'

const JournarEntry = (props) => {
  return (
    <article className = 'flex mx-auto w-2/5 gap-6 my-10'>
        <div className = 'w-40 h-52 shrink-0'>
            <img className = 'h-full w-full bg-cover rounded-md' src={props.img.src} alt = {props.img.alt} />
        </div>
        <div> 
            <div className = 'flex items-center'>
                <img className = 'h-auto w-5 mr-3' src = {locationIcon} alt = "location Icon" />
                <span className = 'font-medium'>{props.country}</span>
                 <a className = 'ml-3 text-gray-600 underline' target = '_blank' href = {props.googleMapsLink} >View on Google Maps</a>
            </div>
            <h2 className = 'font-bold my-2 text-2xl'>{props.title}</h2>
            <p className = 'font-bold  my-3'>{props.dates}</p>
            <p className = 'font-light'>{props.text}</p>
        </div>
    </article>
  )
}

export default JournarEntry