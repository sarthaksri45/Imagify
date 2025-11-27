import React from 'react'
import { assets } from '../assets/assets';
import Header from '../components/Header';
import Steps from '../components/Steps';
import Description from '../components/Description';
import Testimonials from '../components/Testimonials';
import Genimage from '../components/Genimage.jsx';

const Home = () => {
  return (
    <div>
     <Header/>
     <Steps/>
     <Description/>
     <Testimonials/>
     <Genimage/>
    </div>
  )
};

export default Home
