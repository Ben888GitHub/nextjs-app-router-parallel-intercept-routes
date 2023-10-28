import { photos } from '@/app/lib/photos';
import Image from 'next/image';

const SinglePhoto = ({ params: { photoId } }) => {
	const { imageSrc, username } = photos.find(({ id }) => id === photoId);

	//   photo && console.log(photo)

	return (
		<>
			<Image
				className="rounded-lg mx-auto"
				src={imageSrc}
				width={500} // * incorrect aspect ratio from the actual image that can cause high CLS
				height={500} // * incorrect aspect ratio from the actual image that can cause high CLS
				// sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				// sizes="(min-width: 600px) 384px, calc(98.57vw - 188px)"
				alt={username}
				priority
			/>
		</>
	);
};

export default SinglePhoto;
