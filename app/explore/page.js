import Image from 'next/image';
import { photos } from '../lib/photos';
import Link from 'next/link';

const ExploreData = () => {
	return (
		<>
			<p className="text-2xl">Explore Image Galleries</p>
			<div
				// className="px-2 my-3 grid gap-2 grid-cols-gallery"
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
			>
				{photos
					.filter(({ id }) => id !== '6')
					.map(({ id, imageSrc, username }) => (
						<div
							key={id}
							className="relative w-[300px] h-[300px] group overflow-hidden"
						>
							<Link href={`/explore/photos/${id}`} prefetch={false}>
								<Image
									src={imageSrc}
									alt={username}
									fill
									className="object-cover rounded-lg group-hover:opacity-75"
									// sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									sizes="300px"
									priority
								/>
							</Link>
						</div>
					))}
			</div>
		</>
	);
};

export default ExploreData;
