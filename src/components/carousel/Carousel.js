import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import styles from "./Carousel.module.css";

import Card from "../card/Card";

import Data from "../Data";

const Carousel = () => {

  return (
    <div>
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className={styles.Swiper}
            breakpoints={{
                641:{
                    slidesPerView: 2
                },
                7681:{
                    slidesPerView: 3
                },
                1025:{
                    slidesPerView: 4
                }
            }}
        >

                {Data.map((product, index) => {
                    return (
                        <SwiperSlide
                            className={styles.SwiperSlide}
                            key={index}
                        >
                            <div className={styles.SwiperImg} >
                                <Card 
                                    id={product.id}
                                    image={product.image}
                                    title={product.title}
                                    price={product.price}
                                />
                            </div>
                        </SwiperSlide>
                    )
                })}
        </Swiper>
    </div>
  )
}

export default Carousel