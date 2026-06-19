import "./WhyChooseUsSection.css"

function WhyChooseUsSection() {
  return (
    <section className='why-choose-us'>
			<h2>Why Choose Us?</h2>

			<div className='feature-container'>
				<div className='feature-card'>
					<h3>Fast Delivery</h3>
					<p>Get your food delivered quickly.</p>
				</div>

				<div className='feature-card'>
					<h3>Fresh Ingredients</h3>
					<p>Prepared using quality ingredients.</p>
				</div>

				<div className='feature-card'>
					<h3>Affordable Prices</h3>
					<p>Delicious meals at reasonable prices.</p>
				</div>
			</div>
		</section>
  )
}

export default WhyChooseUsSection;