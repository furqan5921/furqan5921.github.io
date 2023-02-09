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
import AVTR2 from "../../assets/abuzer.jpeg"
import AVTR3 from "../../assets/muskan.jpeg"
import AVTR4 from "../../assets/shivani.jpeg"
const data = [
  {
    avatar:AVTR1,
    name:"Pratap Chandra Deo",
    review: "He is very capable of handling complex situations involving reasonable responsibility and carries out his tasks with mindfulness and a positive approach to things. He is always the person to come to when you have a difficult situation. Manages his time efficiently and gets the best out of any situation."
},
{
  avatar:AVTR2,
  name:"Abuzer Haseeb",
  review: "A great developer with very strong problem-solving skills. A fantastic person to work with, and is not only a multi-skilled and insightful colleague but also an inspiring strategist."
},{
  avatar:AVTR3,
  name:"Muskan Tamrakar",
  review: "It's been a while since I know Furqan, he is full of passion, dedication, and hard work. As I observed him, he is surely a good problem solver and has leadership qualities too. I have seen him being serious about the deadlines and writing clean code."
},
{
  avatar:AVTR4,
  name: "Shivani Awasthi",
  review: "He is very hardworking and intelligent guy,he has good attitude towards learning new concepts ,possesses good knowlege of MERN."
}
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
