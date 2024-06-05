import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Slider({children}){

    const responsive = {
        tv: {
            breakpoint: { max: 4000, min: 2300 },
            items: 4,
            slidesToSlide: 4,
            partialVisibilityGutter: 50
        },
        superLargeDesktop: {
            breakpoint: { max: 2300, min: 1200 },
            items: 3,
            slidesToSlide: 3,
            partialVisibilityGutter: 40
        },
        desktop: {
          breakpoint: { max: 1200, min: 1024 },
          items: 2,
          slidesToSlide: 2,
          partialVisibilityGutter: 70
        },
        tablet:{
            breakpoint: { max: 1024, min: 650 },
            items: 2,
            slidesToSlide: 2,
            partialVisibilityGutter: 20           
        },
        sm_tablet: {
          breakpoint: { max: 650, min: 552 },
          items: 1,
          slidesToSlide: 1,
          partialVisibilityGutter: 200
        },
        mobile: {
          breakpoint: { max: 552, min: 450 },
          items: 1,
          slidesToSlide: 1,
          partialVisibilityGutter: 100
        },
        small_mobile:{
            breakpoint: { max: 450, min: 310 },
            items: 1,
            slidesToSlide: 1,
            partialVisibilityGutter: 40
        },
        xsmall_mobile: {
            breakpoint: { max: 310, min: 0 },
            items: 1,
            slidesToSlide: 1,
            partialVisibilityGutter: 0
        }
    };

    return(
            <Carousel
                responsive={responsive}
                infinite={true}
                removeArrowOnDeviceType={["xsmall_mobile","sm_tablet","tablet", "mobile","small_mobile"]}
                partialVisible={true}
            >
                {children}
            </Carousel>
    )
}