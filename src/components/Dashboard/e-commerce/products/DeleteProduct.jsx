import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useModalStore } from '../../../../store/modalStore';
import CloseModalBtn from '../../../Content/CloseModalBtn';
import { deleteProduct } from '../../../../api/product/productService';
import { useUserStore } from '../../../../store/userStore';
import Spinner from '../../../Spinner/Spinner';

const DeleteProduct = ({ product }) => {
	const modalVisibility = useModalStore(state => state.updateVisibility);
	const token = useUserStore(state => state.token);
	const closeModal = () => modalVisibility(false);

	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: deleteProduct,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['branch'] });
			closeModal();
		},
	});

	const handleDelete = () => {
		mutation.mutate({ product_id: product.product_id, token });
	};

	if (mutation.isLoading) {
		return (
			<div className='loader-div'>
				<Spinner />
			</div>
		);
	}

	if (mutation.isError) {
		return (
			<div className='loader-div'>
				<h1 className='text-3xl'> {mutation.error.message} </h1>
			</div>
		);
	}

	return (
		<main className='bg-white h-full w-full shadow-lg sm:rounded-lg p-2 sm:max-w-2xl sm:h-auto sm:min-h-[300px] relative '>
			<CloseModalBtn />
			<div className='bg-white px-16 py-14 rounded-md text-center'>
				<h1 className='text-xl mb-4 font-bold text-slate-500'>
					¿Seguro que querés eliminar{' '}
					<span className='text-accent'>{product.product_name}</span>?
				</h1>
				<button
					className='bg-red px-4 py-2 rounded-md text-md text-white'
					onClick={closeModal}
				>
					Cancelar
				</button>
				<button
					className='bg-blue px-7 py-2 ml-2 rounded-md text-md text-white font-semibold'
					onClick={handleDelete}
				>
					Si, eliminar
				</button>
			</div>
		</main>
	);
};

export default DeleteProduct;
