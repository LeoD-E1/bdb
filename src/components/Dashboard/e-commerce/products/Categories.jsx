import CreateCategory from './CreateCategory';
import { useState } from 'react';
import CategoryList from '../../../Content/category/CategoryList';

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

				<CategoryList
					categories={categories}
					setCategory={setCategory}
					selectedCategory={selectedCat}
				/>
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
