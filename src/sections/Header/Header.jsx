
import { useEffect, useState } from 'react';
import Container from '../../components/Container'
// import logo from '../../images.logo2.png'
import logo from '../../images/logo2.png'
import { MdLightMode } from "react-icons/md";

function Header() {

  let [theme, setTheme] = useState(false);

  useEffect(() => {

    if (theme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

  }, [theme]);


  return (
    <div className="py-4 border-b dark:border-[#666]">

      <Container className="flex justify-between items-center">
        <img src={logo} className='w-26 h-28 dark:brightness-200' alt="logo" />
        <MdLightMode onClick={() => setTheme(!theme)} className={`text-3xl cursor-pointer  ${theme && 'text-white'}`} />
      </Container>
    </div>
  )
}

export default Header