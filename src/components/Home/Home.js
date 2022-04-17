import React from 'react';
import Carrosel from '../Carrosel/Carrosel';
import Description from '../Description/Description';
import Extra from '../Extra/Extra';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
             <Carrosel/>
             <Services/>
             <Extra/>
             {/* <Description/> */}
        </div>
    );
};

export default Home;