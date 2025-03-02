'use client';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useTransition } from 'react';
import toast from 'react-hot-toast';

export default function CreateAccount() {
	const router = useRouter(); // next/navigation !!
	const [isPending, startTransition] = useTransition();

	const handleClickCreateAccountButton = (formData: FormData) => {
		// startTransition(async () => {
		// const { errorMessage } = await createAccountAction(formData);
		const { errorMessage } = { errorMessage: 'there was an error' };
		// if (errorMessage) {
		toast.error(errorMessage);
		// } else {
		// 	router.push('/');
		toast.success('A validation request has been sent to your email.');
		// }
	};
	// };
	return (
		<form action={handleClickCreateAccountButton}>
			<input
				type="email"
				name="email"
				placeholder="Email"
				disabled={isPending}
			/>
			<input
				type="password"
				name="password"
				placeholder="Password"
				disabled={isPending}
			/>
			<button
				// type="submit"
				disabled={isPending}
			>
				{isPending ? <Loader2 className="animate-spin " /> : 'Create Account'}
			</button>
		</form>
	);
}
