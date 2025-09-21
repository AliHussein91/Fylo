import {Raleway} from 'next/font/google';

const raleway = Raleway({
	subsets: ['latin'],
});

export default function SubscriptionCard() {
	return (
		<section className="text-center px-3 w-full bg-gradient-to-b from-(--navy-900) from-50% to-(--navy-950) to-50%">
			<div className="flex flex-col gap-5 bg-(--navy-850) rounded-xl px-4 py-8 lg:px-12 shadow-xl max-w-[900px] mx-auto">
				<h1 className={`${raleway.className} font-bold text-xl`}>
					Get early access today
				</h1>
				<p>
					It only takes a minute to sign up and our free starter tier is
					extremely generous. If you have any questions, our support team would
					be happy to help you
				</p>
				<div className='flex flex-col md:flex-row md:gap-8 gap-5'>
					<input
						type="email"
						name="email"
						id="email   "
						placeholder="email@example.com"
						className={`bg-white rounded-full w-full py-3 `}
					/>
					<button
						className={`${raleway.className} font-bold w-full text-center py-3 bg-(--cyan-500) hover:bg-(--teal-200) cursor-pointer rounded-full md:basis-2xs`}
					>
						Get Started For Free
					</button>
				</div>
			</div>
		</section>
	);
}
