const Header = (props) => {
  return (
    <header className = 'bg-[#F55A5A] flex justify-center text-white h-[55px] items-center'>
      <img className = 'w-6 mr-2' src = {props.globeIcon.src} alt = {props.globeIcon.alt} />
      <h1 className = 'text-xl font-bold font-serif'>{props.generalText}</h1>
    </header>
  )
}

export default Header