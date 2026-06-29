"use client"
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";
import SectionHeading from "@/components/Helper/SectionHeading";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Review = () => {
  return (
    <div className="pt-16 pb-16">
      {/* Section heading */}
      <SectionHeading
        heading="What Our Clients Say"
        subHeading="Real feedback from professionals who trust our platform."
      />

      {/* Carousel with review cards */}
      <Carousel
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
      >
        <ReviewCard
          image="/images/u1.png"
          title="Great Quality!"
          username="Jasica Doe"
          userRole="App Developer"
        />
        <ReviewCard
          image="/images/u2.png"
          title="Awesome Work!"
          username="Ravi Perera"
          userRole="Web Developer"
        />
        <ReviewCard
          image="/images/u3.png"
          title="Great Quality!"
          username="David Saw"
          userRole="Game Developer"
        />
      </Carousel>
    </div>
  );
};

export default Review;
