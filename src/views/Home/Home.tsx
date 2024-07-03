import Card from "@/components/Card/Card";
import CollectionComponent from "@/components/Collection/Collection";
import Pricing from "@/components/Pricing/Pricing";
import TestimonialComponent from "@/components/Testimonial/Testimonial";
import React from "react";
import BlogsViews from "../Blogs/Blogs";
import HomePageScroll from "@/components/Scroll/HomeScroll";

const HomeViews = () => {
  return (
    <>
      <HomePageScroll />
      <CollectionComponent />
      <Card />
      <TestimonialComponent />
      {/* <BlogsViews /> */}
      <Pricing />
    </>
  );
};

export default HomeViews;
