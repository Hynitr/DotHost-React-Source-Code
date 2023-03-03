import successgif from './img/success.gif';

const Error404 = () => {

    return ( 

        <div className="pt-5 mt-5 py-3 px-4" id="success">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 pt-lg-5 mt-lg-3 d-block d-lg-none d-md-none">
                        <img src={ successgif } alt="DotHost" className="img-fluid"/>
                    </div>

                    <div className="col-lg-6 col-12" id="domains">
                        <h1 className="mt-3 pt-lg-5 mt-lg-3 display-3 mb-4">Not<span style={{color: '#7ec3f7'}}> Found</span></h1>
                        <p className="mb-3"> The link you are trying to access can't be found. Kindly check the link and try-again</p>
                    
                        <a href="./" rel="noreferrer"><button className="btn btn-dark px-5 py-3 mt-4 mb-5 rounded-pill"> Go to HomePage</button></a>
                    
                    </div>
                    <div className="col-lg-6 pt-lg-5 mt-lg-3 d-none d-lg-block d-md-block">
                        <img src={ successgif } alt="DotHost" className="img-fluid"/>
                    </div>

                </div>
                
            </div>
        </div>


     );
}
 
export default Error404;