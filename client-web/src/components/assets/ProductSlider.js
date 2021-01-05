import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ProductContainer from "./ProductContainer";

// TOTAL_SLIDE는 전체 사진파일 개수 - 1
const IMG_SIZE = 190;
const SLIDE_MARGIN = 20;
const Slide = ProductContainer;

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

const Slider = ({products}) => {

   const TOTAL_SLIDES = Object.keys(products).length - 1;
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

   const renderSlide = () => {
   
      const keys = Object.keys(products);
      return(
         keys.map(k => { return <Slide data={products[k]} /> })
      )
   }

   return (
      <Container>
         <img className="slider-button" src="/images/buttons/left.png" alt="leftButton" onClick={prevSlide}/>
         <SlidesContainer>
            <Slides ref={slideRef}>
               {renderSlide()}
            </Slides>
         </SlidesContainer>
         <img className="slider-button" src="/images/buttons/right.png" alt="rightButton" onClick={nextSlide}/>
      </Container>
   );
}

export default Slider;