import Image, { StaticImageData } from "next/image";

export default function TestimonialCard({image, user, role, testimonial}: {image: StaticImageData, user: string, role: string, testimonial: string}) {
    return (
        <div className="px-5 bg-(--navy-800) rounded-md py-6 flex flex-col items-start justify-center gap-7">
            <p className="text-sm">{testimonial}</p>
            <div className="flex items-center    gap-4">
                <Image src={image} alt={`${user} image`} className="rounded-full w-10 h-auto"/>
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold">{user}</h3>
                    <p className="text-xs">{role}</p>
                </div>
            </div>
        </div>
    )
}