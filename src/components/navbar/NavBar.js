import "./NavBar.css"
import { Link } from 'react-router-dom'


const NavBar = ({ cartCount }) => {
    return (
        <>
            <div>
                <nav>
                    <h1>Shopping Website</h1>
                    <Link to="/addcart"><button>Cart ({cartCount})</button></Link>
                </nav>
            </div>
        </>
    )
}

export default NavBar;