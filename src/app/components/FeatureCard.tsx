import Image from "next/image"
import {  Raleway } from "next/font/google";

const raleway = Raleway({
    subsets: ['latin'],
});

export default function FeatureCard ({image, title, description}: {image: string, title: string, description: string}) {
    return (
        <div className="flex flex-col items-center justify-center gap-5 text-center max-w-[400px]">
            <Image src={image} alt={`${title} feature image`}/>
            <h1 className={`${raleway.className} font-bold text-xl mt-5 `}>{title}</h1>
            <p className="text-sm">{description}</p>
        </div>
    )
}