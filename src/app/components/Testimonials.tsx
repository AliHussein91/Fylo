import Image from 'next/image';
import quotesIcon from '../../../public/bg-quotes.png';
import userImage1 from '../../../public/profile-1.jpg';
import userImage2 from '../../../public/profile-2.jpg';
import userImage3 from '../../../public/profile-3.jpg';
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
	const testimonials = [
		{
			id: 1,
			testimonial:
				'Fylo has improved out team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine',
			user: 'Satish Patel',
			role: 'Founder & CEO, Huddle',
			image: userImage1,
		},
		{
			id: 2,
			testimonial:
				'Fylo has improved out team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine',
			user: 'Bruce McKenzie',
			role: 'Founder & CEO, Huddle',
			image: userImage2,
		},
		{
			id: 3,
			testimonial:
				'Fylo has improved out team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine',
			user: 'Iva Boyd',
			role: 'Founder & CEO, Huddle',
			image: userImage3,
		},
	];
	return (
		<section className='px-6 py-20 max-w-[1440px] relative'>
			<Image
				src={quotesIcon}
				alt="Quotes icon"
                className='pl-2 w-[32px] lg:w-[50px] lg:absolute lg:left-3 lg:top-13 h-auto lg:-z-1'
			/>
			<div className='grid gap-7 sm:grid-cols-2 lg:grid-cols-3'>
                {testimonials.map(testimonial => {
                    return (
                        <TestimonialCard key={testimonial.id} user={testimonial.user} role={testimonial.role} testimonial={testimonial.testimonial} image={testimonial.image}/>
                    )
                })}
            </div>
		</section>
	);
}
