import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useUserStore } from '../../../store/userStore';
import { useModalStore } from '../../../store/modalStore';
import { createBusiness } from '../../../api/business/businessService';
import { useState } from 'react';
import BusinessDataForm from './BusinessDataForm';
import FindAddress from '../../Forms/FindAddress';
import AddressVerification from '../../Forms/AddressVerification';
import { useNavigate } from 'react-router-dom';


const CreateBusiness = () => {
	const user = useUserStore(state => state.user);
	const token = useUserStore(state => state.token);
	console.log("🚀 ~ CreateBusiness ~ user:", user)
	const [address, setAddress] = useState({});
	const [step, setStep] = useState(1);
	const queryClient = useQueryClient();
	const navigate = useNavigate()

	const {mutateAsync, isLoading} = useMutation({
		mutationFn: createBusiness,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['business'] });
			navigate('/business')
		},
	});

	const retrieveAddress = (address) => {
		setAddress(address)
	}

	const onSubmit = async (data) => {
		console.log("🚀 ~ onSubmit ~ data:", data)
		console.log("🚀 ~ CreateBusiness ~ user:", user)

		console.log('BUSINESS_DATA_TO_CREATE',{
			businessName: data.businessName,
      businessAddress: address.formatted_address,
      latitude: address.geometry.location.lat(),
			longitude: address.geometry.location.lng(),
      phone: data.phone,
      userId: user.user_id,
      token,
		})

		await mutateAsync({
			businessName: data.businessName,
      businessAddress: address.formatted_address,
      latitude: address.geometry.location.lat(),
			longitude: address.geometry.location.lng(),
      phone: data.phone,
      userId: user.user_id,
      token,
		})
	};

	const nextStep = () => setStep(step + 1);
	const prevStep = () => setStep(step - 1);

	const formByStep = {
		1: <FindAddress retrieveAddress={retrieveAddress} title='Donde se encuentra tu negocio?' nextFn={nextStep} />,
		2: (
			<AddressVerification
				nextFn={nextStep}
				address={address}
				prevFn={prevStep}
			/>
		),
		3: (
			<BusinessDataForm submitFn={onSubmit} prevFn={prevStep} address={address} />
		),
	};

	if (isLoading) return <div>Loading...</div>;

	return (
		<div className='h-screen w-full flex justify-center items-center relative'>
						<article className='bg-white h-screen w-full shadow-lg md:rounded-lg p-5 md:max-w-2xl md:h-auto md:min-h-[500px] relative'>
			<div>
			{formByStep[step]}
			</div>
		</article>

		</div>
	);
};

export default CreateBusiness;
