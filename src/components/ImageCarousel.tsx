"use client";
// import { Carousel } from 'antd'
import { NextPage } from 'next'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { css } from "@emotion/css";
import '@splidejs/react-splide/css';
import Image from 'next/image';
import clsx from 'clsx';

interface Props {
    images: string[]
}

const ImageCarousel: NextPage<Props> = ({ images }) => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (
        <div className='mt-5'>
            <Splide>
                {images.map((item, index) => (
                    <SplideSlide className="relative overflow-hidden rounded-2xl bg-black/30" key={index}>
                        <Image
                        loading='lazy'
                            className="h-[16rem] md:h-[25rem] w-full object-contain"
                            width={0}
                            height={0}
                            sizes="100vw"
                            src={item} alt={''} />
                        
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    )
}

export default ImageCarousel