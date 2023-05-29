import React from 'react';
import Banner from '../../Components/Navbar/Banner';
import OurService from '../Shared/OurService';
import Times from './Times/Times';
import CustomerSays from '../Shared/CustomerSays/CustomerSays';
import OurDoctors from '../Shared/OurDoctors/OurDoctors';
import ConstactForm from './ContactForm/ConstactForm';

const Home = () => {
    return (
        <div>
            <Banner/>
            <OurService/>
            <Times/>
            <CustomerSays/>
            <OurDoctors/>
            <ConstactForm/>
        </div>
    );
};

export default Home;