import { useNavigate, useLocation } from 'react-router-dom'
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg'
import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg'
import { ReactComponent as PersonalOutLineIcon } from '../assets/svg/personOutlineIcon.svg'
import { Link } from 'react-router-dom'


const Navbar = () => {
    // const navigate = useNavigate()
    const location = useLocation()

    const pathMatchRoute = (route) => {
        if(route === location.pathname) {
            return true
        }
    }


  return (
    <>
       <footer className="navbar">
         <nav className="navbarNav">
             <ul className="navbarListItems">
                 <li className="navbarListItem" >
                     <Link to='/'>
                     <ExploreIcon fill={pathMatchRoute('/') ? '#2c2c2c' : 'gray'} width='36px' height='36px'/>
                     </Link>
                     <p className={
                        pathMatchRoute('/')
                        ? 'navbarListItemNameActive'
                        : 'navbarListItemName'
                     }>Explore</p>
                 </li>
                 <li className="navbarListItem">
                     <Link to='/offers'>
                     <OfferIcon fill={pathMatchRoute('/offers') ? '#2c2c2c' : 'gray'} width='36px' height='36px'/>
                     </Link>
                     <p className={
                        pathMatchRoute('/offers')
                        ? 'navbarListItemNameActive'
                        : 'navbarListItemName'
                     }>Offers</p>
                 </li>
                 <li className="navbarListItem">
                     <Link to='profile'>
                     <PersonalOutLineIcon fill={pathMatchRoute('/profile') ? '#2c2c2c' : 'gray'} width='36px' height='36px'/>
                     </Link>
                     <p className={
                        pathMatchRoute('/profile')
                        ? 'navbarListItemNameActive'
                        : 'navbarListItemName'
                     }>Profile</p>
                 </li>
             </ul>
         </nav>
       </footer>

    </>
  )
}

export default Navbar
























// // import { useNavigate, useLocation } from 'react-router-dom'
// import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg'
// import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg'
// import { ReactComponent as PersonalOutLineIcon } from '../assets/svg/personOutlineIcon.svg'
// import 

// const Navbar = () => {
//     // const navigate = useNavigate()
//     // const location = useLocation()

//   return (
//     <>
//       <footer className="navbar">
//         <nav className="navbarNav">
//             <ul className="navbarListItems">
//                 <li className="navbarListItem" >
//                     <ExploreIcon fill='#2c2c2c' width='36px' height='36px'/>
//                     <p>Explore</p>
//                 </li>
//                 <li className="navbarListItem">
//                     <OfferIcon fill='#2c2c2c' width='36px' height='36px'/>
//                     <p>Offer</p>
//                 </li>
//                 <li className="navbarListItem">
//                     <PersonalOutLineIcon fill='#2c2c2c' width='36px' height='36px'/>
//                     <p>Profile</p>
//                 </li>
//             </ul>
//         </nav>
//       </footer>
//     </>
//   )
// }

// export default Navbar
