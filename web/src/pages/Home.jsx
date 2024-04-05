import { useEffect, useState } from "react"
import Loader from "../components/Loader"
import ScrollToTop from "../components/ScrollToTop"
import HeroBg from "../components/Hero"
import IconCard from "../components/IconCard"
import { PiChatsCircle } from "react-icons/pi";
import { FaCalendarAlt } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { HiCheckCircle } from "react-icons/hi";
import { Row, Col } from "antd"
import PromoCard from "../components/PromoCard"
import Banner from "../components/Banner"
import OslBanner from "../components/OslBanner"
import ServiceSliderCards from "../components/ServiceSliderCards"
import Footer from "../components/Footer"

// const cardData = [
//     {
//       title: 'Card 1',
//       description: 'Description for Card 1',
//       image: '/path/to/image1.jpg'
//     },
//     {
//       title: 'Card 2',
//       description: 'Description for Card 2',
//       image: '/path/to/image2.jpg'
//     },
//     {
//       title: 'Card 3',
//       description: 'Description for Card 3',
//       image: '/path/to/image3.jpg'
//     },
//     {
//       title: 'Card 4',
//       description: 'Description for Card 3',
//       image: '/path/to/image3.jpg'
//     }
//   ];

const Home = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.title = "OSL Spaces | Home"
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoading(false)
    }, 1000)

  },[])
  return (
    <>
        <div className="bg-[#FBF9F2] h-auto">
            <div>
                { loading && <Loader /> }
                <HeroBg />
            </div>

            <section>

                <div className="grid grid-cols-1 lg:grid-cols-3 mt-[300px] md:mt-[100px] lg:mt-[200px] gap-6 mb-[100px]">
                    <IconCard icon={<PiChatsCircle />} heading={'We are here to assist'} text={'Call +234 806 578 4393 to contact us.'} />
                    <IconCard icon={<FaCalendarAlt />} heading={'Booking Assistant'} text={'Call +234 806 578 4393 to contact us.'} />
                    <IconCard icon={<RiMoneyDollarCircleLine />} heading={'More Services'} text={'Call +234 806 578 4393 to contact us.'} />
                </div>
            </section>

            <section>
                <div className="flex justify-between w-full items-center">
                    <div className="flex flex-col">
                        <span className="text-[#FDBB03] text-[14px] tracking-wider uppercase">PROMO DEALS</span>
                        <span className="text-mydark font-bold text-3xl">Promo Deals</span>
                    </div>

                    <div className="flex gap-3 items-center">
                        <span className="font-semibold">Best Price Guaranteed</span>
                        <HiCheckCircle size={24} />
                    </div>
                </div>
                <Row className="mt-5" gutter={20}>
                    <Col xs={24} md={12}>
                        <PromoCard img={'/img/offer_img01.jpg'} title={'Conference Room'} type={'Weekly'} size={'large'} price={12000} endDate={'Nov 2023'} startDate={'Oct 2023'} key={1} />
                        
                    </Col>
                    <Col xs={24} md={12}>
                        <Row gutter={20}>
                            <Col xs={24} md={12} className="mb-3">
                                <PromoCard img={'/img/offer_img04.jpg'} title={'Team Space for 4'} type={'Weekly'} size={'small'} price={12000} endDate={'Nov 2023'} startDate={'Oct 2023'} key={2} />
                            </Col>
                            <Col xs={24} md={12} className="mb-3">
                                <PromoCard img={'/img/offer_img04.jpg'} title={'Team Space for 4'} type={'Weekly'} size={'small'} price={12000} endDate={'Nov 2023'} startDate={'Oct 2023'} key={2} />
                            </Col>
                            <Col xs={24} md={12}>
                                <PromoCard img={'/img/offer_img04.jpg'} title={'Team Space for 4'} type={'Weekly'} size={'small'} price={12000} endDate={'Nov 2023'} startDate={'Oct 2023'} key={2} />
                            </Col>
                            <Col xs={24} md={12}>
                                <PromoCard img={'/img/offer_img04.jpg'} title={'Team Space for 4'} type={'Weekly'} size={'small'} price={12000} endDate={'Nov 2023'} startDate={'Oct 2023'} key={2} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>

            <div className="w-full mt-[100px]">
                <Banner />
                <OslBanner />
            </div>

            <section>
                <div className="mt-[100px]">
                    <ServiceSliderCards />
                </div>
            </section>

            <ScrollToTop />

            <Footer />
        </div>
    </>
  )
}

export default Home