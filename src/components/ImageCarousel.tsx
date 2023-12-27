"use client";
import { Carousel } from 'antd'
import { NextPage } from 'next'

interface Props { }

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const ImageCarousel: NextPage<Props> = () => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (
        <>
            <Carousel afterChange={onChange}>
                <div>
                    <img style={contentStyle} src="https://media.graphassets.com/HZ0A8QCaTDqFcgBwFA9V" alt="" />
                </div>
                <div>
                    <img style={contentStyle} src="https://media.graphassets.com/HZ0A8QCaTDqFcgBwFA9V" alt="" />
                </div>
                <div>
                    <img style={contentStyle} src="https://media.graphassets.com/HZ0A8QCaTDqFcgBwFA9V" alt="" />
                </div>
            </Carousel>
        </>
    )
}

export default ImageCarousel