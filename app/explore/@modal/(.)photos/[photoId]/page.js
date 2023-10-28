import Modal from '@/app/components/Modal';
import { photos } from '@/app/lib/photos';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// const Modal = dynamic(() => import('@/app/components/Modal'), {
// 	ssr: false
// });

const SinglePhoto = ({ params: { photoId } }) => {
	const { imageSrc, username } = photos.find(({ id }) => id === photoId);

	// photo && console.log(photo);

	return (
		<>
			{/* <Image
				className="rounded-lg mx-auto"
				src={imageSrc}
				width={500} // * incorrect aspect ratio from the actual image that can cause high CLS
				height={500} // * incorrect aspect ratio from the actual image that can cause high CLS
				// sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				// sizes="(min-width: 600px) 384px, calc(98.57vw - 188px)"
				alt={username}
				priority
			/> */}
			{/* <p className=""></p> */}
			<Modal>
				{/* <p className="text-xl font-bold">{username}</p> */}
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
			</Modal>
		</>
	);
};

export default SinglePhoto;
