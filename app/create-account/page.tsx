'use client';
import React, { useTransition } from 'react';
import toast from 'react-hot-toast';
import { createAccountAction } from '../actions/user';

export default function CreateAccount() {
	const [isPending, startTransition] = useTransition();

	const handleClickCreateAccountButton = (formData: FormData) => {
		startTransition(async () => {
			const { errorMessage } = await createAccountAction(formData);
			if (errorMessage) {
				console.log(errorMessage);
				toast.error(errorMessage);
			} else {
				console.log('success');
				toast.success('success');
			}
		});
	};
	return (
		<div className="bg-slate-100 w-96 rounded-lg p-8">
			<form
				action={handleClickCreateAccountButton}
				className="flex flex-col text-center gap-4 bg-slate-50 rounded-lg p-6"
			>
				<h1 className="text-2xl font-semibold text-center mb-8">
					Create Account
				</h1>
				<input
					type="email"
					name="email"
					placeholder="Email"
					className="rounded-lg p-2 border border-slate-400"
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					className="rounded-lg p-2 mb-4 border border-slate-400"
				/>
				<button
					className="rounded-lg p-2 bg-black text-white flex justify-center mb-4"
					type="submit"
				>
					Create Account
				</button>
			</form>
		</div>
	);
}
