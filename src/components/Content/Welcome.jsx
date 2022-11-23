const Welcome = () => {
	return (
		<>
			<section className='h-[50vh]'>
				<div className='flex h-full'>
					<div className='w-[50%] bg-chairs bg-cover bg-center'></div>
					<div className='flex justify-center items-center w-[50%] text-white bg-dark-gray'>
						<div className='p-10 max-w-2xl'>
							<h4 className='text-2xl text-orange font-marker'>
								Bienvenido a Pizzeria{' '}
							</h4>
							<br />
							<p className='text-gray'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
								suscipit voluptate amet veritatis similique officiis nihil
								placeat explicabo eaque consequuntur quo unde laudantium rem
								asperiores minus quae? Fuga, qui praesentium!
							</p>
							<br />
							<button className='px-7 py-3 bg-orange rounded-lg text-white'>
								CTA
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Welcome;
