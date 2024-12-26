import React from 'react';

import sslBadge from '../assets/Badges/SSLBadge.svg'
import ipv6Badge from '../assets/Badges/IPv6.svg'
import secure from '../assets/Badges/DomainSecure.png'

const Footer = () => {
    return(
    <div className="Badges">
        <a href="https://dnschecker.org/ipv6-compatibility-checker.php" target="_blank" rel="noopener noreferrer">
        <img className="Badge" src={ipv6Badge} title="IPv6 Fully Compatible"/>
        </a>
        <a href="https://www.ssllabs.com/ssltest/analyze.html?d=bnny.us" target="_blank" rel="noopener noreferrer">
        <img className="Badge" src={sslBadge} title="A+ SSL Rating"/>
        </a>
        <a href="https://internetsecure.org/?domain=bnny.us" target="_blank" rel="noopener noreferrer">
        <img className="Badge" src={secure} title="Domain Fully Secured"/>
        </a>
    </div>);
};

export default Footer;