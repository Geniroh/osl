import { useEffect, useState } from "react"
import Loader from "../components/Loader"
import Navbar from "../components/Navbar"
import ScrollToTop from "../components/ScrollToTop"
import ComponentWithOverlay from "../components/Hero2"
import BackgroundChanger from "../components/BackgroundChanger"

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [index, setIndex] = useState(0);
  const backgrounds = ['offer_img01.jpg','offer_img06.jpg', 'imgSpace4.jpg', 'img_ac.jpg']

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)

    const timer = setTimeout(() => {
      // setFadeIn(true);
      setIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
      // setTimeout(() => setFadeIn(false), 1000);
    }, 2000);

    return () => clearTimeout(timer);
  },[])
  return (
    <>
      <div className="h-[2000px]">
        <div>
          {
            loading && <Loader />
          }
          <ScrollToTop />
          

          {/* <div className="h-[90vh] md:h-screen w-full slider-bg" style={{
            backgroundImage: `url('/img/${backgrounds[index]}')`,
            }}>
            <Navbar />
          </div> */}
          <BackgroundChanger />
          {/* <ComponentWithOverlay /> */}
        </div>
      </div>
    </>
  )
}

export default Home