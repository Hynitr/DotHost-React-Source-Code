import successgif from './img/success.gif';

const Success = () => {

    return ( 

        <div className="pt-5 mt-5 py-3 px-4" id="success">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 pt-lg-5 mt-lg-3 d-block d-lg-none d-md-none">
                        <img src={ successgif } alt="DotHost" className="img-fluid"/>
                    </div>

                    <div className="col-lg-6 col-12" id="domains">
                        <h1 className="mt-3 pt-lg-5 mt-lg-3 display-3 mb-4">We've received <span style={{color: '#7ec3f7'}}>your payment!</span></h1>
                        <p className="mb-3"> Thanks for entrusting us with your domain/hosting. Our billing team will contact you within the next two minutes. You may also contact our customer support team using the button below.</p>
                    
                        <a href="https://api.whatsapp.com/send?phone=2348102569402&text=I%20just%20made%20payments%20on%20DotHost" rel="noreferrer"><button className="btn btn-dark px-5 py-3 mt-4 mb-5 rounded-pill"> Talk to our support team</button></a>
                    
                    </div>
                    <div className="col-lg-6 pt-lg-5 mt-lg-3 d-none d-lg-block d-md-block">
                        <img src={ successgif } alt="DotHost" className="img-fluid"/>
                    </div>

                </div>
                
            </div>
        </div>


     );
}
 
export default Success;