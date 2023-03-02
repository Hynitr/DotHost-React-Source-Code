import logo from './img/4.png';

const Navbar = () => {
    return ( 


        <nav className="navbar navbar-expand-xl navbar-dark fixed-top px-2 px-lg-0">
            <div className="container">

                <a href="./" className="navbar-brand fw-bold text-dark"><img src={ logo } alt="DotHost Logo" className="me-2"/>DotHost</a>

               

                <div className="offcanvas offcanvas-end" id="navbarOffcanvas">
                    
                    <div className="offcanvas-body">
                        <div className="navbar-nav justify-content-end flex-grow-1 px-5">
                            <a style={{ color: '#000 !important' }} className="nav-item pt-4 pt-lg-0 nav-link active" aria-current="page" href="#home" >Home</a>
                            <a style={{ color: '#000 !important' }} className="nav-item pt-4 pt-lg-0 nav-link" href="#hosting">Web Hosting</a>
                            <a style={{ color: '#000 !important' }} className="nav-item pt-4 pt-lg-0 nav-link" href="./registerdomain">Register Domains</a> <a style={{ color: '#000 !important' }} className="nav-item pt-4 pt-lg-0 nav-link" target="_blank" rel="noreferrer" href="https://dothost.com.ng:2083">WordPress</a>
                            <a style={{ color: '#000 !important' }} className="nav-item pt-4 pt-lg-0 nav-link" target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=2348102569402&text=I%20need%20help%20with%20your%20hosting%20platform">Support</a>
                           
                        </div>
                    </div>

                </div>

            </div>

           
        </nav>
        
     );
}
 
export default Navbar;