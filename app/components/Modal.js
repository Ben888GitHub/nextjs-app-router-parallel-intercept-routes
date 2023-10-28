'use client';

import { useRouter, usePathname } from 'next/navigation';
import * as Dialog from '@radix-ui/react-dialog';

const Modal = ({ children }) => {
	const router = useRouter();
	const pathname = usePathname();

	const handleOnOpenChange = (open) => {
		if (!open) {
			pathname === '/form-modal-routing'
				? router.push(pathname)
				: router.back();
		}
	};

	return (
		<Dialog.Root open onOpenChange={handleOnOpenChange}>
			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-black/70" />

				<Dialog.DialogContent className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
					{children}
				</Dialog.DialogContent>
			</Dialog.Portal>
		</Dialog.Root>
	);
};

export default Modal;
