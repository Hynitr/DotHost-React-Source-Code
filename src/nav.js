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
                            <a style={{ color: '#000 !important' }} className="nav-item pt-4 pt-lg-0 nav-link" href="./registerdomain">Register Domains</a>
                            <a style={{ color: '#000 !important' }} className="nav-item pt-4 pt-lg-0 nav-link" target="_blank" rel="noreferrer" href="https://youtube.com/playlist?list=PLERLvzUF210VY9Cl8sZ0xvKQ2UO8R6CD1">Tutorials</a>
                            <a style={{ color: '#000 !important' }} className="nav-item pt-4 pt-lg-0 nav-link" href="./support">Support</a>
                         
                        </div>
                    </div>

                </div>

            </div>

           
        </nav>
        
     );
}
 
export default Navbar;