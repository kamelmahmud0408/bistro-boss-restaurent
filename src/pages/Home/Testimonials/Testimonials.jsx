import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';

const Testimonials = () => {
    const [reviews, setReview] = useState([])
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => {
                setReview(data)
            })
    }, [])
    return (
        <section className='my-20'>
            <SectionTitle heading='TESTIMONIALS' subHeading='What Our Clients Say'></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className=' flex flex-col items-center space-y-4 p-10 m-20 mt-0'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p>{review.details}</p>
                            <h3 className='text-2xl text-orange-400 '>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;