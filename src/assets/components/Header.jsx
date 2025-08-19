import globeIcon from '/src/assets/images/globe_image.svg'

const Header = (props) => {
  return (
    <header className = 'bg-[#F55A5A] flex justify-center text-white h-[55px] items-center'>
      <img className = 'w-6 mr-2' src = {globeIcon} alt = "globe Icon" />
      <h1 className = 'text-xl font-bold font-serif'>My Travel Journal</h1>
    </header>
  )
}

export default Header 