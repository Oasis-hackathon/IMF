import { addLeadingSlash } from "history/PathUtils";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import history from "../../history";

// TOTAL_SLIDE는 전체 사진파일 개수 - 1
const TOTAL_SLIDES = 1;

const Slide = styled.img`
   position: relative;
   width: 94%;
   margin: 0 3%;
   height: auto;
`;

const Container = styled.div`
   width: 100%;
   display: flex;
   margin: 2rem auto;
   margin-top: 4rem;
`;

const SlidesContainer = styled.div`
   width: 100%;
   display: flex;
   overflow: hidden;
`;

const Slides = styled.div`
   width: 100%;
   display: flex;
`;

export default function Slider() {

   const [currentSlide, setCurrentSlide] = useState(0);
   const slideRef = useRef(null);

   const nextSlide = () => {
      if (currentSlide < TOTAL_SLIDES) {
         setCurrentSlide(currentSlide + 1);
      } else {
         setCurrentSlide(0);
      }
   };

   const prevSlide = () => {
      if (currentSlide > 0) {
         setCurrentSlide(currentSlide - 1);
      }
   };

   useEffect(() => {
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${currentSlide*100}%)`;
   }, [currentSlide]);

   const onClick = () => {
      history.push("/show_products/my_univ/graduation");
   }

   const onClick2 = () => {
      history.push("/show_products/my_univ/graduation");
   }

   return (
      <Container>
         <img className="slider-button" src="/images/buttons/left.png" alt="leftButton" onClick={prevSlide}/>
         <SlidesContainer>
            <Slides ref={slideRef}>
               <Slide className="main-img no-drag" onClick={onClick} src={window.location.origin + "/images/main1.png"} />
               <Slide className="main-img no-drag" onClick={onClick2} src={window.location.origin + "/images/main2.png"} />
            </Slides>
         </SlidesContainer>
         <img className="slider-button" src="/images/buttons/right.png" alt="rightButton" onClick={nextSlide}/>
      </Container>
   );
}