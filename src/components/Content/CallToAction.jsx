import React from 'react';

const CallToAction = () => {
	return (
		<>
			{/* CTA Section: Simple With Illustration */}
			<div className='bg-white'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32'>
					<div className='flex items-center text-center lg:text-left'>
						<div className='space-y-10'>
							{/* Heading */}
							<div>
								<div className='text-sm uppercase font-bold tracking-wider mb-1 text-blue-700'>
									Get Started
								</div>
								<h2 className='text-3xl md:text-4xl font-extrabold mb-4'>
									Grow your business <span className='text-blue-600'>now</span>!
								</h2>
								<h3 className='text-lg md:text-xl md:leading-relaxed font-medium text-gray-600'>
									Inspiring results from day one without the pain. Get your own
									custom dashboard and start building amazing services.
								</h3>
							</div>
							{/* END Heading */}

							{/* Action */}
							<div>
								<a
									href='#'
									className='inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-800 hover:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700'
								>
									<svg
										stroke='currentColor'
										fill='none'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
										className='opacity-50 hi-outline hi-plus-circle inline-block w-6 h-6'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
										/>
									</svg>
									<span>Create your Account</span>
								</a>
							</div>
							{/* END Action */}
						</div>
					</div>
					<div className='flex items-center lg:justify-end text-blue-500'>
						<svg
							viewBox='0 0 753 480.951'
							xmlns='http://www.w3.org/2000/svg'
							className='w-full'
						>
							<path
								d='M149.18 480.567l-2-.039a463.833 463.833 0 017.1-66.287c8.648-46.88 23.029-77.67 42.743-91.512l1.148 1.637C152.12 356.7 149.203 479.332 149.18 480.567zM174.18 480.089l-2-.04c.043-2.214 1.293-54.413 21.843-68.841l1.148 1.637c-19.72 13.845-20.981 66.711-20.991 67.244z'
								fill='#2f2e41'
							/>
							<circle cx='209.549' cy='314.548' r={10} fill='currentColor' />
							<circle cx='204.597' cy='400.548' r={10} fill='currentColor' />
							<path
								d='M169.519 330.542c1.879 12.004-3.02 22.74-3.02 22.74s-7.945-8.725-9.824-20.729 3.019-22.74 3.019-22.74 7.945 8.725 9.825 20.73zM202.206 359.696c-11.493 3.942-22.919.99-22.919.99s7.208-9.344 18.7-13.287 22.92-.99 22.92-.99-7.208 9.345-18.701 13.287zM202.575 435.857a31.135 31.135 0 01-16.064.694 28.374 28.374 0 0129.172-10.006 31.134 31.134 0 01-13.108 9.312z'
								fill='#2f2e41'
							/>
							<path
								fill='#9e616a'
								d='M606.671 467.453h-13.14l-6.251-50.685 19.394.001-.003 50.684z'
							/>
							<path
								d='M610.023 480.19h-42.37v-.537a16.493 16.493 0 0116.491-16.491h.001l25.878.001z'
								fill='#2f2e41'
							/>
							<path
								fill='#9e616a'
								d='M525.57 467.453h-13.141l-6.251-50.685 19.394.001-.002 50.684z'
							/>
							<path
								d='M528.921 480.19h-42.37v-.537a16.493 16.493 0 0116.491-16.491h.002l25.878.001z'
								fill='#2f2e41'
							/>
							<path
								d='M492.789 183.616l-18.2-2.812-5.88 9.464-63.272 16.129.172.872a11.904 11.904 0 102.587 12.31l76.625-15.982zM674.554 172.347a11.855 11.855 0 00-4.375.841l.363-.633-80.444-41.58-10.967 17.73 83.635 37.125a11.9 11.9 0 1011.788-13.483z'
								fill='#9e616a'
							/>
							<circle
								cx='736.071'
								cy='267.733'
								r='35.538'
								transform='rotate(-80.783 501.187 294.317)'
								fill='#2f2e41'
							/>
							<circle cx='512.264' cy='70.77' r='22.671' fill='#a0616a' />
							<ellipse
								cx='512.571'
								cy='48.405'
								rx='24.509'
								ry='14.705'
								fill='#2f2e41'
							/>
							<circle cx='515.021' cy='22.671' r='14.705' fill='#2f2e41' />
							<path
								d='M495.414 14.705A14.707 14.707 0 01508.588.08a14.87 14.87 0 00-1.532-.08 14.705 14.705 0 000 29.41 14.87 14.87 0 001.532-.079 14.707 14.707 0 01-13.174-14.626zM500.478 127.051l1.828-17.576s24.806-16.347 33.236-6.686l50.388 86.213s31.323 11.136 30.216 53.658l-1.498 205.54-35.517 3.894-21.568-160.25-19.487 166.026-41.35-1.295 3.72-109.376 19.717-106.027-.188-35.182-8.684-14.199s-15.908-6.39-16.352-24.45l-.349-25.386z'
								fill='#2f2e41'
							/>
							<path
								d='M526.488 107.615l.49-8.24s75.031 19.773 69.079 33.91-17.113 18.6-17.113 18.6l-43.155-17.112zM506.88 128.117l-5.645-6.02s-45.032 63.188-31.414 70.248 25.052 3.354 25.052 3.354l22.228-40.757z'
								fill='#2f2e41'
							/>
							<path
								d='M416.745 333.873l282.56-56.404-23.613-118.297-282.561 56.404z'
								fill='#fff'
							/>
							<path
								d='M701.618 279.011l-286.416 57.174-24.384-122.152 286.417-57.173zm-283.33 52.55l278.705-55.635-22.844-114.441-278.706 55.634z'
								fill='#e4e4e4'
							/>
							<path
								fill='#e4e4e4'
								d='M427.715 242.718l228.672-45.647 1.19 5.962-228.672 45.647zM432.349 265.933l228.672-45.647 1.19 5.962-228.672 45.647zM437.01 289.282l228.672-45.647 1.19 5.962L438.2 295.244z'
							/>
							<path
								d='M547.129 234.12l-7.998 1.597a2.25 2.25 0 01-2.643-1.764l-3.781-18.942a2.25 2.25 0 011.763-2.643l7.998-1.597a2.25 2.25 0 012.643 1.764l3.781 18.942a2.25 2.25 0 01-1.763 2.643zM638.227 240.075l-7.998 1.597a2.25 2.25 0 01-2.643-1.764l-3.78-18.942a2.25 2.25 0 011.763-2.643l7.997-1.597a2.25 2.25 0 012.643 1.764l3.781 18.942a2.25 2.25 0 01-1.763 2.643zM588.893 274.202l-7.997 1.597a2.25 2.25 0 01-2.643-1.763l-3.782-18.943a2.25 2.25 0 011.764-2.643l7.998-1.597a2.25 2.25 0 012.643 1.764l3.78 18.942a2.25 2.25 0 01-1.763 2.643z'
								fill='currentColor'
							/>
							<path
								d='M752 480.951H1a1 1 0 010-2h751a1 1 0 010 2z'
								fill='#cacaca'
							/>
						</svg>
					</div>
				</div>
			</div>
			{/* END CTA Section: Simple With Illustration */}
		</>
	);
};

export default CallToAction;
