import logo from './img/4.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 


        <nav className="navbar navbar-expand-xl navbar-dark fixed-top px-2 px-lg-0">
            <div className="container">

                <a href="./" className="navbar-brand fw-bold text-dark"><img src={ logo } alt="DotHost Logo" className="me-2"/>DotHost</a>

               

                <div className="offcanvas offcanvas-end" id="navbarOffcanvas">
                    
                    <div className="offcanvas-body">
                        <div className="navbar-nav justify-content-end flex-grow-1 px-5">
                            <Link style={{ color: '#000 !important' }} className="nav-item pt-4 pt-lg-0 nav-link active" aria-current="page" to="/#home" >Home</Link>
                            <Link style={{ color: '#000 !important' }} className="nav-item pt-4 pt-lg-0 nav-link" to="/#hosting">Web Hosting</Link>
                            <Link style={{ color: '#000 !important' }} className="nav-item pt-4 pt-lg-0 nav-link" to="/#domains">Register Domains</Link> 
                            <a style={{ color: '#000 !important' }} className="nav-item pt-4 pt-lg-0 nav-link" target="_blank" rel="noreferrer" href="https://dothost.com.ng:2083">WordPress</a>
                            <a style={{ color: '#000 !important' }} className="nav-item pt-4 pt-lg-0 nav-link" target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=2348102569402&text=I%20need%20help%20with%20your%20hosting%20platform">Support</a>
                           
                        </div>
                    </div>

                </div>

            </div>

           
        </nav>
        
     );
}
 
export default Navbar;