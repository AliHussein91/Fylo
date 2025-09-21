import anywhereImage from '../../../public/icon-access-anywhere.svg'
import securityImage from '../../../public/icon-security.svg'
import collaborationImage from '../../../public/icon-collaboration.svg'
import fileImage from '../../../public/icon-any-file.svg'
import FeatureCard from './FeatureCard';

export default function Features() {
	const features = [
		{
            id: 1,
            image: anywhereImage,
			title: 'Access your files, anywhere',
            description: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.'
		},
		{
            id: 2,
            image: securityImage,
			title: 'Security you can trust',
            description: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.'
		},
        {
            id: 3,
            image: collaborationImage,
			title: 'Real-time collaboration',
            description: 'Securely share file and folders with friends, family and colleagues for live collaboration. No email attachment required.'
		},
        {
            id: 4,
            image: fileImage,
			title: 'Store any type of file',
            description: 'Whether you\'re sharing photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.'
		},
	];
	return <section className='grid px-7 md:grid-cols-2 gap-20 my-25 md:mx-auto md:max-w-[950px]'>
        {features.map((feature)=> {
            return (
                <FeatureCard key={feature.id} image={feature.image} title={feature.title} description={feature.description} />
            )
        })}

    </section>;
}
