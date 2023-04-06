const CategoryList = ({ categories, setCategory, selectedCategory }) => {
	const handleSelect = category => setCategory(category);

	return (
		<ul className='w-full'>
			{categories?.map((category, i) => (
				<li
					key={i}
					className={`flex justify-start p-2 my-1 hover:bg-gray-100 hover:cursor-default rounded-lg ${
						selectedCategory?.category_name === category.category_name &&
						'bg-gray-light'
					}`}
					onClick={() => handleSelect(category)}
				>
					<h4 className='ml-3'>{category.category_name}</h4>
				</li>
			))}
		</ul>
	);
};

export default CategoryList;
