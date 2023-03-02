import footerlogo from './img/4.png';
import homeicon from './img/icons/home-2.svg';
import wordpress from './img/icons/3741719.png';

const Footer = () => {
    return ( 
        
        <footer id="footer" className="pt-3 mb-5" >

            <section className="d-none d-lg-block container">
            
                <hr/>
                
    
    
                  <div className="row">

                    <div className="col-12 d-lg-none d-md-none text-center">
                        <p className="text-dark fw-bold fs-5 text-decoration-none"><img src={ footerlogo } alt="DotHost" className="img-fluid fotlogo"/>  DotHost <small>powered by Hynitr</small></p>
                      </div>

                      <div className="col-12 col-lg-6 text-start d-none d-lg-block d-md-block">
                        <p className="text-dark fw-bold fs-5 text-decoration-none"><img src={ footerlogo } alt="DotHost" className="img-fluid fotlogo"/> DotHost <small>powered by Hynitr</small></p>
                      </div>

                      <div className="col-6 mt-4 d-none d-lg-block text-end">
                          <div className="row">
                            <div className="col-3">
                               <a className="text-decoration-none text-dark" href="./registerdomain"><h6>Domains</h6></a> 
                            </div>
                            <div className="col-3">
                                <a className="text-decoration-none text-dark" href="#hosting"><h6>Hosting</h6></a> 
                            </div>
                            <div className="col-3">
                                <a className="text-decoration-none text-dark" target="_blank" href="https://youtube.com/playlist?list=PLERLvzUF210VY9Cl8sZ0xvKQ2UO8R6CD1" rel="noreferrer"><h6>Tutorials</h6></a> 
                            </div>
                            <div className="col-3">
                                <a className="text-decoration-none text-dark" href="./support"><h6>Support</h6></a> 
                            </div>
                          </div>
                      </div>
            
                    </div>
            </section>

            <section className="d-block d-lg-none fixed-bottom bg-white py-2 px-2 mobilenav">
                <div className="container justify-content-center text-center m-auto mt-2">
                    <div className="row">
                        <div className="col-3">
                            <img src={ homeicon } alt="Home" className="img-fluid img-responsive" />
                            <p className='mb-0 pb-0'>Home</p>
                        </div>
                        <div className="col-3">
                            <img src={ homeicon } alt="Home" className="img-fluid img-responsive" />
                            <p className='mb-0 pb-0'>Buy Domain</p>
                        </div>
                        <div className="col-3">
                            <img src={ homeicon } alt="Home" className="img-fluid img-responsive" />
                            <p className='mb-0 pb-0'>Hosting</p>
                        </div>
                        <div className="col-3">
                            <img src={ wordpress } alt="Home" className="img-fluid img-responsive" width="25" />
                            <p className='mb-0 pb-0'>WordPress</p>
                        </div>
                    </div>
                </div>
            </section>
        
        </footer>


     );
}
 
export default Footer;