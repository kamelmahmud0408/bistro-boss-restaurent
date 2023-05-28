import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featureImg from '../../../assets/home/featured.jpg'
import './Feature.css'

const Feature = () => {
    return (
        <section className='featured-img bg-fixed text-white pt-8 my-20 '>
            <SectionTitle subHeading='Check it out' heading='FROM OUR MENU' ></SectionTitle>
            <div className='md:flex justify-center items-center pb-20 pt-12 px-36 contant-div'>
                <div>
                    <img src={featureImg} alt="" />
                </div>
                <div className='md:ml-10 space-y-4'>
                    <p>March 20, 2023</p>
                    <h3>WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='btn btn-outline border-0 border-b-4'>order now</button>
                </div>
            </div>
        </section>
    );
};

export default Feature;