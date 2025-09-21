// import Image from "next/image";

import Footer from './components/Footer';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import Features from './components/Features';
import StayProductive from './components/StayProductive';


export default function Home() {
	return (
		<>
			<NavBar />
			<main className="flex flex-col items-center justify-center text-white">
				<Intro />
				<Features />
				<StayProductive />
			</main>
			<Footer />
		</>
	);
}
