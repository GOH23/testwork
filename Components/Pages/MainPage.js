'use client';
import axios from '../../Components/Config/axios';
import { useContext, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { LoadingProvider } from '../Static/Provider';
import CatalogCard from '../CatalogCard';
import CarouselCard from './CarouselCard';
export default function MainPage() {
    const { viewedProducts } = useContext(LoadingProvider)
    useEffect(() => {

    }, [])
    return (<div className="main_box">
        <p className='dekstop_title'>Недавно просмотренные товары</p>
        <Swiper wrapperClass='dekstop_carousel'
            pagination={{
                dynamicBullets: true
            }}
            navigation={false}
            slidesPerView={2}
            spaceBetween={30}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    navigation: true
                },
                400: {
                    slidesPerView: 1,
                },
                639: {
                    slidesPerView: 2,
                },
                865: {
                    slidesPerView: 3
                },
            }}
            modules={[Pagination,Navigation]}
        >
            {viewedProducts.map((el, ind) => {
                return (<SwiperSlide key={ind} >
                    <CarouselCard item={el} />
                </SwiperSlide>)
            })}
        </Swiper>
    </div>)
}