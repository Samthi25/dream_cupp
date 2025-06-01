import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import InfoSection from "../components/homepage/InfoSection";
import DreamCard from "../components/homepage/DreamCard";
import './HomePage.css';

function HomePage() {
  return (
    <div>
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        <div>
          <img src="/images/image1.jpg" alt="Slide 1" className="carousel-img" />
        </div>
        <div>
          <img src="/images/image2.jpg" alt="Slide 2" className="carousel-img" />
        </div>
        <div>
          <img src="/images/image3.jpg" alt="Slide 3" className="carousel-img" />
        </div>
        <div>
          <img src="/images/image4.jpg" alt="Slide 4" className="carousel-img" />
        </div>
        <div>
          <img src="/images/image5.jpg" alt="Slide 5" className="carousel-img" />
        </div>
        <div>
          <img src="/images/image6.jpg" alt="Slide 6" className="carousel-img" />
        </div>
      </Carousel>
      <InfoSection />  
      <DreamCard />
    </div>
  );

}

export default HomePage;