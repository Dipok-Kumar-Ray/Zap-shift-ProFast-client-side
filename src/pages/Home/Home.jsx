import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../services/Services';
import ClientLogosMarquee from '../clientLogosMarquee/ClientLogosMarquee';
import Benefits from '../benefits/Benefits';
import BeMerchant from '../beMerchant/BeMerchant';

const Home = () => {
    return (
        <div>
           <Banner/>
           <Services/>
           <ClientLogosMarquee/>
           <Benefits/>
           <BeMerchant/>
        </div>
    );
};

export default Home;