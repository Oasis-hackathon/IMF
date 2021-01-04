import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import PostingSlider from "./PostingSlider";

// TOTAL_SLIDE는 전체 사진파일 개수 - 1
const TOTAL_SLIDES = 2;
const IMG_SIZE = 190;
const SLIDE_MARGIN = 20;
const Slide = PostingSlider;

const Container = styled.div`
   width: 100%;
   display: flex;
   overflow: hidden;
   margin: 0 auto;
   margin-bottom: 3rem;
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
      }
   };

   const prevSlide = () => {
      if (currentSlide > 0) {
         setCurrentSlide(currentSlide - 1);
      }
   };

   useEffect(() => {
      slideRef.current.style.transition = "all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)";
      slideRef.current.style.transform = `translateX(-${currentSlide*(IMG_SIZE + SLIDE_MARGIN * 2)}px)`;
   }, [currentSlide]);

   return (
      <Container>
         <img className="slider-button" src="/images/buttons/left.png" alt="leftButton" onClick={prevSlide}/>
         <SlidesContainer>
            <Slides ref={slideRef}>
               <Slide src={window.location.origin + "/images/detail1.png"} />
               <Slide src={window.location.origin + "/images/detail2.png"} />
               <Slide src={window.location.origin + "/images/detail3.png"} />
               <Slide src={window.location.origin + "/images/detail1.png"} />
               <Slide src={window.location.origin + "/images/detail2.png"} />
               <Slide src={window.location.origin + "/images/detail3.png"} />
            </Slides>
         </SlidesContainer>
         <img className="slider-button" src="/images/buttons/right.png" alt="rightButton" onClick={nextSlide}/>
      </Container>
   );
}