import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import CategoriesSection from '../../components/CategoriesSection/CategoriesSection'
import PopularFoodsSection from '../../components/PopularFoodsSection/PopularFoodsSection'
import WhyChooseUsSection from '../../components/WhyChooseUsSection/WhyChooseUsSection'
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection'

function HomePage() {
  return (
    <>
      <HeroSection />

      <CategoriesSection />
      
      <PopularFoodsSection />

      <WhyChooseUsSection />

      <TestimonialsSection />
    </>
  )
}

export default HomePage;