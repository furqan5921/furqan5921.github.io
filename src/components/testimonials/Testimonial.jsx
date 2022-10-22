import React from 'react'
import "./testimonial.css"
import {  Pagination  } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/autoplay"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import AVTR1 from "../../assets/pratap.jpeg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"
const data = [
  {
    avatar:AVTR1,
    name:"Pratap Chandra Deo",
    review: "He is very capable of handling complex situations involving reasonable responsibility and carries out his tasks with mindfulness and a positive approach to things. He is always the person to come to when you have a difficult situation. Manages his time efficiently and gets the best out of any situation."
},
{
  avatar:AVTR2,
  name:"Someone",
  review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim nemo nobis quos nihil itaque. Tempore est ullam sapiente nemo, ipsa incidunt. Quos molestias tenetur, neque inventore est dolore totam dolor?"
},{
  avatar:AVTR3,
  name:"Someone",
  review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim nemo nobis quos nihil itaque. Tempore est ullam sapiente nemo, ipsa incidunt. Quos molestias tenetur, neque inventore est dolore totam dolor?"
},{
  avatar:AVTR4,
  name:"Someone",
  review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim nemo nobis quos nihil itaque. Tempore est ullam sapiente nemo, ipsa incidunt. Quos molestias tenetur, neque inventore est dolore totam dolor?"
},
]
const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Colleagues</h5>
      <h2>Testimonials</h2>
      <Swiper  className="container testimonials__container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
      //  navigation
       pagination={{ clickable: true }}
       
      >
        {
          data.map(({name,avatar,review},index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
          <div className="client__avatar">
            <img src={avatar} alt={"name"} />
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
              {review}
            </small>
        </SwiperSlide>
            )
          })
        }
        
        
      </Swiper>
    </section>
   
  )
}

export default Testimonial
