import Image from 'next/image';
import FooterElement from './FooterElement';
import logo from '../../../public/logo.svg';
import locationIcon from '../../../public/icon-location.svg';
import phoneIcon from '../../../public/icon-phone.svg';
import emailIcon from '../../../public/icon-email.svg';

export default function Footer() {
	return (
		<footer className="bg-(--navy-950) text-white px-5 py-20 flex flex-col gap-15 md:px-15">
			<div>
				<Image
					src={logo}
					alt="Fylo logo"
				/>
			</div>
			<div className="flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-x-20 lg:grid-cols-4">
				<div>
					<FooterElement
						icon={locationIcon}
						text="Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
					/>
				</div>
				<div className="flex flex-col gap-5">
					<FooterElement
						icon={phoneIcon}
						text="+1-543-123-4567"
					/>
					<FooterElement
						icon={emailIcon}
						text="example@fylo.com"
					/>
				</div>
				<div>
					<ul>
						<li>
							<a
								href="#"
								className="hover:font-bold"
							>
								About Us
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:font-bold"
							>
								Jobs
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:font-bold"
							>
								Press
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:font-bold"
							>
								Blog
							</a>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<li>
							<a
								href="#"
								className="hover:font-bold"
							>
								Contact Us
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:font-bold"
							>
								Terms
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:font-bold"
							>
								Privacy
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
