import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
	return (
		<section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
			{/* Product cards */}
			{products.map(product => (
				<Link key={product.id} className='space-x-4'>
					<div className='border rounded-lg p-4 shadow-md flex items-center hover:bg-[#EBEBED] bg-white'>
						{/* Left side content */}
						<div className='flex-grow'>
							{/* Discount badge */}
							{/* <span className='bg-yellow-200 text-yellow-800 font-semibold text-sm px-2 py-1 rounded-md'>
								30% OFF
							</span> */}

							{/* Product title */}
							<h3 className='text-lg font-semibold mt-2'>
								{product.product_name}
							</h3>

							{/* Product description */}
							<p className='text-gray-600 text-sm'>
								{product.description}
							</p>

							{/* Price */}
							<div className='flex items-center space-x-2 mt-2'>
								<span className='text-red-500 text-xl font-bold'>{product.price}</span>
								{/* <span className='text-gray-500 line-through text-sm'>
									{product.old_price}
								</span> */}
							</div>
						</div>

						{/* Right side image */}
						<div className='w-24 h-24'>
							<img
								src={product.image_url}
								alt='Product'
								className='object-cover w-full h-full rounded-lg'
							/>
						</div>
					</div>
				</Link>
			))}
		</section>
	);
};

export default ProductList;
