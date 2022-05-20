import './css/navbar.css';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useNavigate } from "react-router-dom";


export const Navbar = () => {
    const navigate=useNavigate();
    return (
        <>

            <div id="navbar">
                <div>
                    <Link to='/'>Home</Link>
                </div>
                <div>
                    <p>input box and the search icon</p>
                </div>
                <div>
                    <Link to='/login'>Login</Link>
                </div>
                <div>
                    <Link to='/register'>Register</Link>
                </div>
                <div>
                    <Badge color='secondary' style={{cursor:"pointer"}}>
                        <ShoppingCartIcon onClick={()=>true?navigate('/cart'):"Not true"}/>
                    </Badge>
                    {/* <Link to='/cart'>Cart</Link> */}
                </div>
            </div>
        </>
    )
}