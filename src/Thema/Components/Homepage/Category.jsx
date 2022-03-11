import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/css/bundle";
import "swiper/css/pagination";
import den from '../../Assets/svg/auto-repair.svg'
import { useRef } from "react";

function Category() {
    const [xid, setXid] = useState("")
    SwiperCore.use([Autoplay])

    const swiperRef = React.useRef(null);

    const List = [
        {
            icon: require('../../Assets/png/category/select.png'),
            name: 'Hepsi',
            id: '1'
        },
        {
            icon: require('../../Assets/png/category/cooking-pot.png'),
            name: 'Ev yemeği ve atıştırmalıklar',
            id: '2'
        },
        {
            icon: require('../../Assets/png/category/crossroad.png'),
            name: 'Yol yardım ',
            id: '3'
        },
        {
            icon: require('../../Assets/png/category/broom.png'),
            name: 'Temizlik&Hijyen',
            id: '4'
        },
        {
            icon: require('../../Assets/png/category/car-repair.png'),
            name: 'Oto Tamir&Bakım',
            id: '5'
        },
        {
            icon: require('../../Assets/png/category/repair.png'),
            name: 'Ustalık Onarım',
            id: '6'
        },
        {
            icon: require('../../Assets/png/category/solution(1).png'),
            name: 'Tekno destek',
            id: '7'
        },
        {
            icon: require('../../Assets/png/category/food-truck.png'),
            name: 'Taşıma Kurye',
            id: '8'
        },
        {
            icon: require('../../Assets/png/category/car-wash.png'),
            name: 'Araba Temizliği',
            id: '9'
        },
        {
            icon: require('../../Assets/png/category/foam.png'),
            name: 'Bakım Güzellik',
            id: '10'
        },
        {
            icon: require('../../Assets/png/category/honesty.png'),
            name: 'Komşudan Kirala',
            id: '11'
        },
        {
            icon: require('../../Assets/png/category/accountability.png'),
            name: 'İş takip',
            id: '12'
        },
        {
            icon: require('../../Assets/png/category/animal.png'),
            name: 'Evcil Hayvan Bakımı ',
            id: '13'
        },
        {
            icon: require('../../Assets/png/category/blood-pressure.png'),
            name: 'Sağlık ',
            id: '14'
        },
        {
            icon: require('../../Assets/png/category/mandala.png'),
            name: 'Fal &astroloji ',
            id: '15'
        },
        {
            icon: require('../../Assets/png/category/gardening.png'),
            name: 'Bahçe işleri',
            id: '16'
        },
        {
            icon: require('../../Assets/png/category/old-woman.png'),
            name: 'Yaşlı çocuk hasta bakımı',
            id: '17'
        },
        {
            icon: require('../../Assets/png/category/elearning.png'),
            name: 'Özel ders ',
            id: '18'
        },
        {
            icon: require('../../Assets/png/category/bathrobe.png'),
            name: 'Prof. Masaj',
            id: '19'
        },
        {
            icon: require('../../Assets/png/category/keys.png'),
            name: 'Anahtarcı',
            id: '20'
        },
        {
            icon: require('../../Assets/png/category/propeller.png'),
            name: 'Diğer',
            id: '21'
        },


    ]

    return (
        <div>
            <Swiper
                ref={swiperRef}
                breakpoints={{
                    320: {
                        width: 300,
                        slidesPerView: 2,
                    },
                    500: {
                        width: 545,
                        slidesPerView: 2,
                    },

                    640: {
                        width: 640,
                        slidesPerView: 3,
                    },

                    768: {
                        width: 700,
                        slidesPerView: 4,
                    },

                    1400: {
                        width: 1200,
                        slidesPerView: 7
                    }
                }}
                spaceBetween={0}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}

                className="category"
            >
                {List.map((category, index) => (
                    <SwiperSlide>

                        <div className="cetegory-wrapper" key={index} >
                            <div className="category-icon-wrapper" style={category.id === xid ? { background: 'white', boxShadow: '5px 5px 50px 3px rgba(0,0,0,0.18)' } : { fill: '#EBEBEB' }} >
                                <div className="category-icon">
                                    {/* <div style={category.id === xid ? { fill: '#36C1A7' } : { fill: 'black' }} >{`$'../../Assets/png/category'/${category.icon}.png`}</div> */}
                                    <img src={category.icon} style={{ width: '90px' }} />
                                </div>
                            </div>
                            <div className='category-name' style={category.id === xid ? { cursor: 'pointer', color: '#36C1A7' } : { cursor: 'pointer', color: '#7D7D7D' }} id={category.id} onClick={e => setXid(e.target.id)}>{category.name}</div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className='swiper-button-prev pe-4' style={{ color: '#3BC9B0' }} onClick={() => swiperRef.current.swiper.slidePrev()} />
                <div className='swiper-button-next ps-4' style={{ color: '#3BC9B0' }} onClick={() => swiperRef.current.swiper.slideNext()} />

            </Swiper>


        </div>
    )
}

export default Category