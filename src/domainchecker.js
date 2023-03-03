import React, { useState } from 'react';
import loader from './img/loading.gif';


const Domainchecker = () => {

    const [nameofdomain, setDomainName] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [isSuccessfull, setIsSuccessfull] = useState(false);
    const [thisDomainName, setThisDomainName] = useState('');
    const [thisDomainPrice, setThisDomainPrice] = useState('');
    const [thisDomainPricePay, setThisDomainPricePay] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const getdomain = { nameofdomain };

        //console.log(JSON.stringify(getdomain));

        setIsPending(true);
        setIsSuccessfull(false);

        fetch('http://localhost/hynitr/dothost/api/', {
            method: 'POST',
            body: JSON.stringify(getdomain)

        }).then(response => response.json())
          .then((data) => {

            setIsPending(false);

            const domainstatus= data[2];
            setThisDomainName(data[0]);

            if(domainstatus === true) {

                setThisDomainPrice(data[1]);
                setThisDomainPricePay(data[3]);
                setIsSuccessfull(true);

            } else {

                setIsSuccessfull(false);
            }  

            

        }).catch(error => console.error(error));

        
    }

    return ( 

        <div className="search">

            <form onSubmit={handleSubmit}>
                <input type="text" value={nameofdomain} onChange={(e) => setDomainName(e.target.value)} placeholder="Enter Your Domain Name" className="text-secondary" required/>
                <input type="submit" value="Search"/>
               
            </form>


            {isPending && <div className="domain-price-help col-12 mt-3 d-flex align-items-center justify-content-center text-center col-lg-6 text-secondary">
            <img src={ loader } className='img-fluid' alt="DotHost" width="40"></img>
            </div>}

            {!isPending && !isSuccessfull && <div className="domain-price-help mt-4 mb-5 col-12 d-flex align-items-center justify-content-between col-lg-6 text-secondary">
            <p className="text-center">.com</p>
            <p className="text-center">.com.ng</p>
            <p className="text-center">.org</p>
            <p className="text-center">.net</p>
            <p className="text-center">.edu</p>
            <p className="text-center">.xyz</p>
            <p className="text-center">.co</p>
            </div>}


            {isSuccessfull && 
            
                <div>
                    <div className="card-body mt-3 py-2 py-lg-4" style={{backgroundColor: '#dff3ff', marginTop: '20'}}>
							<div className="row dm">
								<div className="col-12 col-lg-6 text-center col-md-4 mb-3 mb-lg-0">
									<h6 className="px-3 pt-2 text-success">{ thisDomainName } is available</h6>
								</div>
								<div className="col-12 col-lg-3 col-md-4 text-center mb-2 mb-lg-0">
									<h6 className="px-3 pt-2 text-ce">NGN{ thisDomainPrice }</h6>
								</div>
								<div className="col-12 col-lg-3 col-md-4 text-center mb-3 mb-lg-0">
									<button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Buy Now</button>
								</div>
								
							</div>
			        </div>


                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Buy "{thisDomainName}" Domain </h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>

                                    <div className="modal-body justify-content-center text-center">
                                        <form>
                                            <div className="row mb-3">
                                                <div className="col-12 mb-3">
                                                    <input type="text" className="form-control" placeholder="First Name" id="first-name" required/>
                                                    <input type='text' hidden/>
                                                </div>
                                                <div className="col-12">
                                                    <input type="text" className="form-control" placeholder="Last Name" id="last-name" required/>
                                                    <input type='text' hidden/>
                                                </div>
                                            </div>
                                            <div className="col-12 mb-3">
                                                <input type="email" className="form-control" placeholder="Email Address" id="email-address" required/>
                                                <input type="number" id="amount" value={thisDomainPricePay} onChange={(e) => setThisDomainPricePay(e.target.value)} hidden/>
                                            </div>
                                            <div className="col-12 mb-3">
                                                <input type="number" className="form-control" placeholder="Phone Number" id="phone" required/>
                                                <input type="text" className="form-control" value={thisDomainName} onChange={(e) => setThisDomainName(e.target.value)} id="domain" hidden/>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="submit" className="btn btn-dark">Make Payment</button>
                                                </div>
                                        </form>
                                    </div>
                                
                            </div>
                        </div>
                    </div>

                </div>
                

                }


        </div>
     );
}
 
export default Domainchecker;