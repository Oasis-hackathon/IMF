import React, { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import styled from "styled-components";

const Container = styled.div`
   width: 200px;
   overflow: hidden;
`;

const Button = button`
   all: unset;
   border: 1px solid coral;
   padding: 0.5em 2em;
   color: coral;
   border-radius: 0px;
   &:hover {
      transition: all 0.3s ease-in-out;
      background-color: coral;
      color: #fff;
   }
`;
const SliderContainer = styled.div`
   width: 200px;
   display: flex;
`;
const TOTAL_SLIDES = 2;
// TOTAL_SLIDE는 전체 사진파일 개수 - 1
export default function Slider() {

   const [currentSlide, setCurrentSlide] = useState(0);
   const slideRef = useRef(null);
   
   const nextSlide = () => {
      if (currentSlide < TOTAL_SLIDES) {
         setCurrentSlide(currentSlide + 1);
      }
   };

   const prevSlide = () => {
      if (currentSlide !== 0) {
         setCurrentSlide(currentSlide - 1);
      }
   };

   useEffect(() => {
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
   }, [currentSlide]);

   return (
      <Container>
      <Button><img src="/images/buttons/left.png"onClick={prevSlide}/></Button>
         <SliderContainer ref={slideRef}>
            <Slide img={window.location.origin + "/images/img1.png"} />
            <Slide img={window.location.origin + "/images/img2.png"} />
            <Slide img={window.location.origin + "/images/img3.png"} />
         </SliderContainer>
         <Button><img src="/images/buttons/right.png" onClick={nextSlide}/></Button>
      </Container>
   );
}