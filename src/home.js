import homepicture from './img/service-single.gif';
import customersupport from './img/team.svg'
import Domainchecker from './domainchecker';

const Homepage = () => {
    return ( 

        <div className='container'>

            <div className="pt-5 mt-5" id="home">
                    <div className="container">
                            <div className="row">
                                
                                    <div className="col-lg-6 col-12" id="domains">
                                        <h1 className="mt-4 pt-lg-5 mt-lg-3 display-3 mb-4">Hosting your website takes <span style={{color: '#7ec3f7'}}>five minutes!</span></h1>
                                        <p className="mb-3">With our hassle-free hosting and easy-to-use control panel, you can have your website online and ready to use within five minutes. 🚀😍</p>
                                    
                                        <div className="col-lg-6 col-md-12 mobileviewhide d-block d-lg-none pt-lg-5 mt-lg-3 MT-4">
                                            <img src={ homepicture } className="img-fluid" alt="DotHost" />
                                        </div>
                                
                                    
                                       
                                            <Domainchecker/>


                                    </div>  

                                    <div className="col-lg-6 col-md-12 mobileviewshow d-none d-lg-block pt-lg-5 mt-lg-3 mt-4">
                                        <img src={ homepicture } className="img-fluid" alt="DotHost" />
                                    </div>

                            </div>
                    </div>
            
            </div>

            <div className="mb-5 pb-5 mt-5" id="about">
            <div className="container">
                <div className="col-12">
                    <h2 className="display-3 mb-4 pt-4 text-center">Hosting with us is easy! 😍</h2>
                    <div className="row ">
                        <div className="col-lg-4 col-12 mt-2 mt-lg-4">
                            <div className="card">
                                <div className="card-body px-5">
                                    <i className="fa-brands fa-wordpress mt-2"></i>
                                    <h4 className="card-title mb-3 mt-3">WordPress Install</h4>
                                    <p className="card-text mb-3">All our web hosting plan support Wordpress and other softaculous applications</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 mt-5 mt-lg-4">
                            <div className="card">
                                <div className="card-body px-5">
                                    <i className="fa-brands fa-expeditedssl mt-2"></i>
                                    <h4 className="card-title mb-3 mt-3">Free SSL Certificate</h4>
                                    <p className="card-text mb-3">To secure your website, We give and support free SSL Certificate on all hosting plan</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 mt-5 mt-lg-4">
                            <div className="card">
                                <div className="card-body px-5">
                                    <i className="fa-solid fa-gauge mt-2"></i>
                                    <h4 className="card-title mb-3 mt-3">Unlimited Traffic</h4>
                                    <p className="card-text mb-3">Enjoy unlimited data traffic or bandwidth on every of our hosting plan without any stress.</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 mt-5">
                            <div className="card">
                                <div className="card-body px-5">
                                    <i className="fa-solid fa-server"></i>
                                    <h4 className="card-title mb-3 mt-3">Monthly Backup</h4>
                                    <p className="card-text mb-3">We automatically backup your files and send you a notification every month</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 mt-5">
                            <div className="card">
                                <div className="card-body px-5">
                                    <i className="fa-solid fa-envelope mt-2"></i>
                                    <h4 className="card-title mb-3 mt-3">Unlimited Custom Emails</h4>
                                    <p className="card-text mb-3">Create multiple custom email on every annual plan purchased</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 mt-5">
                            <div className="card">
                                <div className="card-body px-5">
                                    <i className="fa-sharp fa-solid fa-clock mt-2"></i>
                                    <h4 className="card-title mb-3 mt-3">99.9% Uptime</h4>
                                    <p className="card-text mb-3">We assure you of 99.9% guarantee that your website will always be live on the web.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>


            <div className="mb-5 pb-3" id="hosting">
                <div className="container">
                    <div className="col-12">
                        <h2 className="display-3 text-center">No-hassle hosting plan</h2>
                        <p className="text-center mb-5">Low-cost hosting plans tailored to meet your needs</p>

                        <div className="row justify-content-center">

                            
                            <div className="col-12 col-md-6 col-lg-4 mb-5">
                                <div className="single-price-plan px-5 me-2">
                                    
                                    <div className="price-plan-title pt-5 text-center">
                                        <h6>Student Hosting</h6>
                                    </div>
                                    
                                    <div className="price-plan-value text-center mb-4">
                                        <h1>₦3,000<small>/yr</small></h1>
                                    </div>
                                
                                    
                                    <div className="price-plan-desc">
                                        <p><i className="fa fa-check me-1"></i> 3 GB Disk Space</p>
                                        <p><i className="fa fa-check me-1"></i> Unlimited Bandwidth</p>
                                        <p><i className="fa fa-check me-1"></i> Unlimited Email Account</p>
                                        <p><i className="fa fa-check me-1"></i> 1-Click WordPress Install</p>
                                        <p><i className="fa fa-check me-1"></i> Your own Cpanel</p>
                                        <p><i className="fa fa-check me-1"></i> No Add-on Domain</p>
                                        <p><i className="fa fa-check me-1"></i> Unlimited Database</p>
                                        <p><i className="fa fa-check me-1"></i> Free Secured SSL Certificate</p>
                                    </div>

                                    
                                    <a href="https://paystack.com/pay/studenthosting"><button className="btn btn-dark px-5 py-3 mt-4 mb-5 rounded-pill"> Choose this Plan</button></a>
            
                                </div>
                            </div>
                            
                            
                            <div className="col-12 col-md-6 col-lg-4 mb-5">
                                <div className="single-price-plan px-5 me-2">
                                    
                                    <div className="price-plan-title pt-5 text-center">
                                        <h6>Affiliate Hosting</h6>
                                    </div>
                                    
                                    <div className="price-plan-value text-center mb-4">
                                        <h1>₦5,000<small>/yr</small></h1>
                                    </div>
                                
                                    
                                    <div className="price-plan-desc">
                                        <p><i className="fa fa-check me-1"></i> 10 GB Disk Space</p>
                                        <p><i className="fa fa-check me-1"></i> Unlimited Bandwidth</p>
                                        <p><i className="fa fa-check me-1"></i> Unlimited Email Account</p>
                                        <p><i className="fa fa-check me-1"></i> 1-Click WordPress Install</p>
                                        <p><i className="fa fa-check me-1"></i> Your own Cpanel</p>
                                        <p><i className="fa fa-check me-1"></i> 1-Addon Domain</p>
                                        <p><i className="fa fa-check me-1"></i> Unlimited Database</p>
                                        <p><i className="fa fa-check me-1"></i> Free Secured SSL Certificate</p>
                                    </div>

                                
                                    <a href="https://paystack.com/pay/affiliatehosting"><button className="btn btn-dark px-5 py-3 mt-4 mb-5 rounded-pill"> Choose this Plan</button></a>
            
                                </div>
                            </div>

                            
                            <div className="col-12 col-md-6 col-lg-4 mb-5">
                                <div className="single-price-plan px-5 me-2">
                                    
                                    <div className="price-plan-title pt-5 text-center">
                                        <h6>Mini Hosting</h6>
                                    </div>
                                    
                                    <div className="price-plan-value text-center mb-4">
                                        <h1>₦15,000<small>/yr</small></h1>
                                    </div>
                                
                                    
                                    <div className="price-plan-desc">
                                        <p><i className="fa fa-check me-1"></i> 30 GB Disk Space</p>
                                        <p><i className="fa fa-check me-1"></i> Unlimited Bandwidth</p>
                                        <p><i className="fa fa-check me-1"></i> Unlimited Email Account</p>
                                        <p><i className="fa fa-check me-1"></i> 1-Click WordPress Install</p>
                                        <p><i className="fa fa-check me-1"></i> Your own Cpanel</p>
                                        <p><i className="fa fa-check me-1"></i> 3-Addon Domains</p>
                                        <p><i className="fa fa-check me-1"></i> Unlimited Database</p>
                                        <p><i className="fa fa-check me-1"></i> Free Secured SSL Certificate</p>
                                    </div>

                                
                                    <a href="https://paystack.com/pay/minihosting"><button className="btn btn-dark px-5 py-3 mt-4 mb-5 rounded-pill"> Choose this Plan</button></a>
            
                                </div>
                            </div>

                            
            
                        </div>

                        <div className="row justify-content-center">

                            
                            <div className="col-12 col-md-6 col-lg-4 mb-5">
                                <div className="single-price-plan px-5 me-2">
                                    
                                    <div className="price-plan-title pt-5 text-center">
                                        <h6>Starter Hosting</h6>
                                    </div>
                                    
                                    <div className="price-plan-value text-center mb-4">
                                        <h1>₦25,000<small>/yr</small></h1>
                                    </div>
                                
                                    
                                    <div className="price-plan-desc">
                                        <p><i className="fa fa-check me-1"></i> 50 GB Disk Space</p>
                                        <p><i className="fa fa-check me-1"></i> Unlimited Bandwidth</p>
                                        <p><i className="fa fa-check me-1"></i> Unlimited Email Account</p>
                                        <p><i className="fa fa-check me-1"></i> 1-Click WordPress Install</p>
                                        <p><i className="fa fa-check me-1"></i> Your own Cpanel</p>
                                        <p><i className="fa fa-check me-1"></i> 4-Addon Domains</p>
                                        <p><i className="fa fa-check me-1"></i> Unlimited Database</p>
                                        <p><i className="fa fa-check me-1"></i> Free Secured SSL Certificate</p>
                                    </div>

                                    
                                    <a href="https://paystack.com/pay/starterhosting"><button className="btn btn-dark px-5 py-3 mt-4 mb-5 rounded-pill"> Choose this Plan</button></a>
            
                                </div>
                            </div>
                            
                            
                            <div className="col-12 col-md-6 col-lg-4 mb-5">
                                <div className="single-price-plan px-5 me-2">
                                    
                                    <div className="price-plan-title pt-5 text-center">
                                        <h6>Standard Hosting</h6>
                                    </div>
                                    
                                    <div className="price-plan-value text-center mb-4">
                                        <h1>₦60,000<small>/yr</small></h1>
                                    </div>
                                
                                    
                                    <div className="price-plan-desc">
                                        <p><i className="fa fa-check me-1"></i> 90 GB Disk Space</p>
                                        <p><i className="fa fa-check me-1"></i> Unlimited Bandwidth</p>
                                        <p><i className="fa fa-check me-1"></i> Unlimited Email Account</p>
                                        <p><i className="fa fa-check me-1"></i> 1-Click WordPress Install</p>
                                        <p><i className="fa fa-check me-1"></i> Your own Cpanel</p>
                                        <p><i className="fa fa-check me-1"></i> 5-Addon Domains</p>
                                        <p><i className="fa fa-check me-1"></i> Unlimited Database</p>
                                        <p><i className="fa fa-check me-1"></i> Free Secured SSL Certificate</p>
                                    </div>

                                
                                    <a href="https://paystack.com/pay/dothoststandardhosting"><button className="btn btn-dark px-5 py-3 mt-4 mb-5 rounded-pill"> Choose this Plan</button></a>
            
                                </div>
                            </div>

                            
                            <div className="col-12 col-md-6 col-lg-4 mb-5">
                                <div className="single-price-plan px-5 me-2">
                                    
                                    <div className="price-plan-title pt-5 text-center">
                                        <h6>Platinum Hosting</h6>
                                    </div>
                                    
                                    <div className="price-plan-value text-center mb-4">
                                        <h1>₦120,000<small>/yr</small></h1>
                                    </div>
                                
                                
                                    <div className="price-plan-desc">
                                        <p><i className="fa fa-check me-1"></i> Unlimited Disk Space</p>
                                        <p><i className="fa fa-check me-1"></i> Unlimited Bandwidth</p>
                                        <p><i className="fa fa-check me-1"></i> Unlimited Email Account</p>
                                        <p><i className="fa fa-check me-1"></i> 1-Click WordPress Install</p>
                                        <p><i className="fa fa-check me-1"></i> Your own Cpanel</p>
                                        <p><i className="fa fa-check me-1"></i> 8-Addon Domains</p>
                                        <p><i className="fa fa-check me-1"></i> Unlimited Database</p>
                                        <p><i className="fa fa-check me-1"></i> Free Secured SSL Certificate</p>
                                    </div>

                                
                                    <a href="https://paystack.com/pay/platinumhosting"><button className="btn btn-dark px-5 py-3 mt-4 mb-5 rounded-pill"> Choose this Plan</button></a>
            
                                </div>
                            </div>

                            
            
                        </div>
                    </div>
                </div>
            </div>


            <div className="mb-5 pb-2" id="customer">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 mb-4">
                            <img src={ customersupport } alt="DotHost" className="img-fluid w-100"/>
                        </div>

                        <div className="col-lg-6 col-12">
                            <h2 className="display-3 mb-3">Got Questions?</h2>
                            <p className="mb-1">Whenever you need our assistance, we are more than willing to listen to you and address your needs in any timely manner </p>
                        
                        
                            <a href="https://api.whatsapp.com/send?phone=2348102569402&text=I%20just%20made%20payments%20on%20DotHost"><button className="btn btn-dark px-5 py-3 mt-4 mb-5 rounded-pill"> Talk to a support member</button></a>
                            
                            
                        </div>
                        

                    </div>
                    
                </div>
             </div>
           
        </div>
      

    

     );
}
 
export default Homepage;