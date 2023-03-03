import React, { useState } from 'react';
import loader from './img/loading.gif';

const Domainchecker = () => {

    const [nameofdomain, setDomainName] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const getdomain = { nameofdomain };

        //console.log(JSON.stringify(getdomain));

        setIsPending(true);

        fetch('http://localhost/hynitr/dothost/api/', {
            method: 'POST',
            body: getdomain,
        }).then((response) => {
            console.log(response);
            setIsPending(false);
        })

    }

    return ( 

        <div className="search">

            <form onSubmit={handleSubmit}>
                <input type="text" value={nameofdomain} onChange={(e) => setDomainName(e.target.value)} placeholder="Enter Your Domain Name" className="text-secondary" required/>
                <input type="submit" value="Search"/>
            </form>

            {isPending && <div className="domain-price-help col-12 mt-3 d-flex align-items-center justify-content-center text-center col-lg-6 text-secondary" id="msg">
            <img src={ loader } className='img-fluid' alt="DotHost" width="40"></img>
            </div>}

            {!isPending && <div className="domain-price-help mt-4 mb-5 col-12 d-flex align-items-center justify-content-between col-lg-6 text-secondary" id="msg">
            <p className="text-center">.com</p>
            <p className="text-center">.com.ng</p>
            <p className="text-center">.org</p>
            <p className="text-center">.net</p>
            <p className="text-center">.edu</p>
            <p className="text-center">.xyz</p>
            <p className="text-center">.co</p>
            </div>}

           
            

        </div>
     );
}
 
export default Domainchecker;