import { IconPointFilled } from '@tabler/icons-react';
import CreateCategory from './CreateCategory';
import { useState } from 'react';

const Categories = ({ categories, setCategory, selectedCat }) => {
	const [visible, setVisible] = useState(false);
	const handleClick = () => setVisible(true);

	return (
		<main className='relative sm:flex sm:gap-4'>
			<div className='bg-white w-full p-2 shadow-lg rounded-lg max-h-[600px] overflow-y-auto'>
				<div className='my-2'>
					<button
						className={`${
							visible && 'bg-gray'
						} p-2 w-full text-white rounded-md bg-accent font-kanit text-md font-semibold`}
						onClick={handleClick}
					>
						+ Agregar sección
					</button>
				</div>
				{categories?.map((category, i) => (
					<div
						key={i}
						className={`flex justify-start p-2 my-1 hover:bg-gray-100 hover:cursor-default rounded-lg ${
							selectedCat.category_name === category.category_name &&
							'bg-gray-light'
						}`}
						onClick={() => setCategory(category)}
					>
						<IconPointFilled />
						<h4 className='text-md font-kanit text-gray font-semibold ml-3'>
							{category.category_name}
						</h4>
					</div>
				))}
			</div>
			{visible && (
				<section className='lg:z-10 lg:w-[30vw] lg:top-0 lg:absolute lg:left-[100%] lg:ml-5 sm:h-[600px]'>
					<CreateCategory close={() => setVisible(false)} />
				</section>
			)}
		</main>
	);
};

export default Categories;
