// import Nav from './Nav'

import { Link } from 'react-router-dom'

const Header = () => {
   return (
      <header className="fixed w-full bg-white h-16 z-50 flex flex-row justify-between items-center border-b-2 border-green-400 px-6">
         <div className="logo">
            <Link to="/">
               <h1 className="text-2xl">Courses</h1>
            </Link>
         </div>
         {/* <Nav /> */}
         <Link to="/playground">playground</Link>
      </header>
   )
}

export default Header
