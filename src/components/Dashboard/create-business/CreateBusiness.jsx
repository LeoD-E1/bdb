import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormProvider, useForm } from 'react-hook-form';
import { useBranchStore } from '../../../store/branchStore';
import { useUserStore } from '../../../store/userStore';
import { useModalStore } from '../../../store/modalStore';
import { createBusiness } from '../../../api/business/businessService';
import { useState } from 'react';
import BusinessDataForm from './BusinessDataForm';

const CreateBusiness = () => {
	const methods = useForm();
	const branch = useBranchStore(state => state.selectedBranch);
	const closeFn = useModalStore(state => state.updateVisibility);
	const token = useUserStore(state => state.token);
	const [step, setStep] = useState(1);
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: createBusiness,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['business'] });
			closeFn(false);
		},
	});

	const onSubmit = data => {
		mutation.mutate({
			image_url: data.product_image[0],
			price: data.price,
			product_name: data.product_name,
			product_description: data.product_description,
			branch_id: branch.branch_id,
			token,
		});
	};

	const nextStep = () => setStep(step + 1);

	const formByStep = {
		1: <BusinessDataForm />,
		// 2: (
		// 	<AddressVerification
		// 		nextFn={nextStep}
		// 		address={address}
		// 		prevFn={prevStep}
		// 	/>
		// ),
		// 3: (
		// 	<AddAddressForm onSubmit={onSubmit} prevFn={prevStep} address={address} />
		// ),
	};

	return (
		<div className='h-screen w-full flex justify-center items-center'>
			<FormProvider {...methods}>
				<form
					onSubmit={methods.handleSubmit(onSubmit)}
					className='flex flex-col justify-between overflow-y-auto w-full max-w-md'
				>
					{formByStep[step]}
					<section className='w-full flex justify-center'>
						{step !== Object.keys(formByStep).length ? (
							<button
								className='bg-accent p-3 rounded-lg text-md text-white sm:my-3'
								onClick={nextStep}
							>
								next
							</button>
						) : (
							<input
								type='submit'
								className='bg-accent p-3 rounded-lg text-md text-white sm:my-3'
							/>
						)}
					</section>
				</form>
			</FormProvider>
		</div>
	);
};

export default CreateBusiness;
