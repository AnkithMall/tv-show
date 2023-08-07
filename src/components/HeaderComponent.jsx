import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <header>
            <Container className='header text-center' fluid>
               <Link to={"/"}>
                <h2 className=''>FavShow</h2>
               </Link> 
            </Container>
        </header>
    )
}

export default HeaderComponent;