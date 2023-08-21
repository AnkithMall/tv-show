import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <header>
            <Container className='header text-center' fluid>
               <Link to={"/"}>
                <h2 className=''>Fav-Show</h2>
               </Link> 
            </Container>
        </header>
    )
}

export default HeaderComponent;