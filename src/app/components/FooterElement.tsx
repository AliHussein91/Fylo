import Image, {StaticImageData} from 'next/image';

export default function FooterElement({
	icon,
	text,
}: {
	icon: StaticImageData;
	text: string;
}) {
	return (
		<div className="flex items-start justify-start gap-5">
			<Image
				src={icon}
				alt="icon"
                className='h-4 w-auto mt-1'
			/>
			<p className='text-base'>{text}</p>
		</div>
	);
}
