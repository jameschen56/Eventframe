import { NavLink } from "react-router-dom"
import MyFooter from '../Footer';
import './Handle404.css'

const Handle404 = () => {
    return (
      <>
        <div className="handle404">
            <h2>Well this is awkward !!</h2>
            <p>What you're looking for isn't here. This is what technical folks call a 404 page.</p>
            <NavLink to="/" className="return_home" >Click here, to return home</NavLink>
        </div>
        <div>
            <MyFooter />
        </div>
      </>
    )
}

export default Handle404;