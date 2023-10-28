// 'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
// import { useRouter, useSearchParams } from 'next/navigation';
const Form = dynamic(() => import('../components/Form'), {
	ssr: false
});
const Modal = dynamic(() => import('../components/Modal'), {
	ssr: false
});

const FormModalRouting = ({ searchParams }) => {
	// const router = useRouter();
	// const searchParams = useSearchParams();

	// const handleShowFormModal = () => {
	// 	router.push(`/form-modal-routing?form_modal=y`);
	// };

	// const search = searchParams.get('form_modal');
	// searchParams && console.log(searchParams);

	return (
		<div>
			<Link href="/form-modal-routing/form" className="text-2xl underline">
				Go to Form
			</Link>
			<br />
			<br />

			{/* <div
				onClick={handleShowFormModal}
				className="text-2xl underline cursor-pointer"
			>
				Go to Form in Modal
			</div> */}
			<Link
				href="/form-modal-routing?form_modal=y"
				className="text-2xl underline"
			>
				Go to Form in Modal
			</Link>
			{searchParams?.form_modal && (
				<Modal>
					<Form />
				</Modal>
			)}
		</div>
	);
};

export default FormModalRouting;
