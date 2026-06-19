import "./TestimonialsSection.css"

function TestimonialsSection() {
  return (
    <section className='testimonials'>
			<h2>Customer Reviews</h2>

			<div className="reviews-container">
				<div className="review-card">
					<h3>★★★★★</h3>
					<p>Amazing food and quick delivery.</p>
					<span>- Rahul</span>
				</div>

				<div className="review-card">
					<h3>★★★★★</h3>
					<p>Best food ordering experience.</p>
					<span>- Priya</span>
				</div>

				<div className="review-card">
					<h3>★★★★★</h3>
					<p>Fresh food and affordable prices.</p>
					<span>- Amit</span>
				</div>
			</div>			
    </section>
  )
}

export default TestimonialsSection;