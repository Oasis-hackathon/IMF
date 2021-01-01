import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

// TOTAL_SLIDE는 전체 사진파일 개수 - 1
const TOTAL_SLIDES = 2;
const IMG_SIZE = 200;
const MARGIN_SIZE = 20;

const Container = styled.div`
   width: 100%;
   display: flex;
   overflow: hidden;
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


const IMG = styled.img`
   width: 200px;
   height: 200px;
   margin: 0 20px;
   border-radius: 3rem;
   z-index: 1;
`;

const Slide = ({imgurl}) => {
   return (
      <IMG src={imgurl} />
   )
}


export default function Slider() {

   const [currentSlide, setCurrentSlide] = useState(0);
   const slideRef = useRef(null);
   
   const nextSlide = () => {
      if (currentSlide < TOTAL_SLIDES) {
         setCurrentSlide(currentSlide + 1);
      }
   };

   const prevSlide = () => {
      if (currentSlide > 0) {
         setCurrentSlide(currentSlide - 1);
      }
   };

   useEffect(() => {
      slideRef.current.style.transition = "all 0.2s ease-in-out";
      slideRef.current.style.transform = `translateX(-${currentSlide*(IMG_SIZE + MARGIN_SIZE*2)}px)`;
   }, [currentSlide]);

   return (
      <Container>
         <img className="slider-button" src="/images/buttons/left.png" alt="leftButton" onClick={prevSlide}/>
         <SlidesContainer>
            <Slides ref={slideRef}>
               <Slide imgurl={window.location.origin + "/images/img1.png"} />
               <Slide imgurl={window.location.origin + "/images/img2.png"} />
               <Slide imgurl={window.location.origin + "/images/img3.png"} />
            </Slides>
         </SlidesContainer>
         <img className="slider-button" src="/images/buttons/right.png" alt="rightButton" onClick={nextSlide}/>
      </Container>
   );
}