import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../services/Services';
import ClientLogosMarquee from '../clientLogosMarquee/ClientLogosMarquee';

const Home = () => {
    return (
        <div>
           <Banner/>
           <Services/>
           {/* <ClientLogosMarquee/> */}
        </div>
    );
};

export default Home;