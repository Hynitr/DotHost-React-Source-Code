import footerlogo from './img/4.png';
import phone from './img/icons/call.svg';
import domain from './img/icons/cloud-add.svg';
import hosting from './img/icons/driver.svg';
import wordpress from './img/icons/wordpress.svg';

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
                               <a className="text-decoration-none text-dark" href="#domain"><h6>Domains</h6></a> 
                            </div>
                            <div className="col-3">
                                <a className="text-decoration-none text-dark" href="#hosting"><h6>Hosting</h6></a> 
                            </div>
                            <div className="col-3">
                                <a className="text-decoration-none text-dark" target="_blank" rel="noreferrer" href="https://dothost.com.ng:2083"><h6>WordPress</h6></a> 
                            </div>
                            <div className="col-3">
                                <a className="text-decoration-none text-dark" target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=2348102569402&text=I%20need%20help%20with%20your%20hosting%20platform"><h6>Support</h6></a> 
                            </div>
                          </div>
                      </div>
            
                    </div>
            </section>

            <section className="d-block d-lg-none fixed-bottom bg-white py-2 px-2 mobilenav">
                <div className="container justify-content-center text-center m-auto mt-2">
                    <div className="row">
                      
                        <div className="col-3">
                            <a href="#hosting" className="text-decoration-none text-dark">
                                <img src={ hosting } alt="Home" className="img-fluid img-responsive" />
                                <p className='mb-0 pb-0'>Hosting</p>
                            </a>
                        </div>
                        
                        <div className="col-3">
                            <a href="#domain" className="text-decoration-none text-dark">
                                <img src={ domain } alt="Home" className="img-fluid img-responsive" />
                                <p className='mb-0 pb-0'>Buy Domain</p>
                            </a>
                        </div>
                        <div className="col-3">
                            <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=2348102569402&text=I%20need%20help%20with%20your%20hosting%20platform" className="text-decoration-none text-dark">
                                <img src={ phone } alt="Home" className="img-fluid img-responsive" />
                                <p className='mb-0 pb-0'>Support</p>
                            </a>
                        </div>
                        <div className="col-3">
                            <a target="_blank" rel="noreferrer" href="https://dothost.com.ng:2083" className="text-decoration-none text-dark">
                                <img src={ wordpress } alt="Home" className="img-fluid img-responsive" width="25" />
                                <p className='mb-0 pb-0'>WordPress</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        
        </footer>


     );
}
 
export default Footer;