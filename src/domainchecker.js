import React, { useState } from 'react';

const Domainchecker = () => {

    const [domainname, setDomainName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Domainname:', domainname);
    };

    return ( 

        <form onSubmit={handleSubmit}>
            <input type="text" name="domainname" value={domainname} onChange={(e) => setDomainName(e.target.value)}  placeholder="Enter Your Domain Name" className="text-secondary" required/>
            <input type="button" value="Search" id="submit"/>
        </form>
     );
}
 
export default Domainchecker;