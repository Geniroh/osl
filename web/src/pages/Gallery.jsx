import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { Col, Row } from 'antd'
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import GalleryCard from '../components/GalleryCard';
import { Link } from "react-router-dom";

const Gallery = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
  return (
    <div>

        <div className='bg-[#19498C] min-h-[375px] '>
            <Navbar />

            <div className='pt-[90px] flex items-center flex-col gap-3'>
                <h3 className='text-white text-6xl font-bold'>Gallery</h3>

                <div className='text-white text-xl'>
                    <Link to="/"><span>Home</span></Link> <span className='mx-2'>|</span> <span className='text-secondary'>Gallery</span>
                </div>
            </div>
        </div>

        <section className='mt-[150px]'>

            <Row gutter={6}>
                <Col xs={24} md={12} lg={12} className='mb-5'>
                    <GalleryCard img={'/img/about_img01.jpg'} />
                </Col>
                <Col xs={24} md={12} lg={12} className='mb-5'>
                    <GalleryCard img={'/img/img1.JPG'} />
                </Col>
                <Col xs={24} md={12} lg={12} className='mb-5'>
                    <GalleryCard img={'/img/img7.jpg'} />
                </Col>
                <Col xs={24} md={12} lg={12} className='mb-5'>
                    <GalleryCard img={'/img/img2.JPG'} />
                </Col>
                <Col xs={24} md={12} lg={12} className='mb-5'>
                    <GalleryCard img={'/img/offer_img03.jpg'} />
                </Col>
                <Col xs={24} md={12} lg={12} className='mb-5'>
                    <GalleryCard img={'/img/img6.jpg'} />
                </Col>
            </Row>
        </section>

        <ScrollToTop />

        <div className='mt-[100px]'>
            <Footer />
        </div>
    </div>
  )
}

export default Gallery