const Footer = () => {
	return (
		<>
			<footer className='bg-dark-gray text-white'>
				<div className='mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between space-y-6 space-y-reverse px-4 py-10 text-sm font-medium text-gray-500 md:flex-row md:items-start md:space-y-0'>
					<div className='flex items-center space-x-4'>
						<a href='#'>
							<svg className='h-6' viewBox='0 0 19 21'>
								<path
									className='fill-rose-600'
									d='M9.45569.11334C9.33771.0392836 9.20123.0 9.06194.0c-.1393.0-.27577.0392836-.39375.11334-.94292.60914-1.81132 1.32652-2.5875 2.1375-1.725 1.79062-2.64375 3.74062-2.64375 5.625.0 1.49184.59263 2.92256 1.64752 3.97746s3.97748 1.6475 3.97748 1.6475 2.92256-.5926 3.97746-1.6475 1.6475-2.48562 1.6475-3.97746c0-4.49063-5.01559-7.63125-5.23121-7.7625zM9.06194 12.0008c-.29582.0013-.58896-.0561-.86251-.1687-.27354-.1126-.52207-.2783-.73125-.4875-.20918-.2092-.37486-.4577-.4875-.7313-.11263-.2735-.16998-.5666-.16874-.86246.0-2.25 2.25-3.75 2.25-3.75s2.24996 1.5 2.24996 3.75c.0013.29586-.0561.58896-.1687.86246-.1126.2736-.2783.5221-.4875.7313-.2092.2092-.4577.3749-.73126.4875-.27354.1126-.56668.17-.8625.1687zm8.96246 6.975c-.0477.1518-.1424.2845-.2705.3788-.1281.0944-.2829.1456-.442.1462-.0766.0014-.1529-.0113-.225-.0375l-8.02496-2.55-8.025 2.55c-.072085.0262-.148343.0389-.225003.0375-.159092-6e-4-.313864-.0518-.441943-.1462-.128079-.0943-.22283-.227-.2705568-.3788-.0304549-.0935-.0419719-.1922-.0338781-.2902.0080939-.098.0356359-.1935.0810189-.2807.045383-.0873.107697-.1647.183304-.2276s.162993-.1102.257055-.139l6.000003-1.9125-6.000003-1.9125c-.101479-.0226-.197151-.066-.280941-.1276-.08379-.0615-.153868-.1398-.205786-.2299-.0519183-.0901-.0845418-.19-.09579985-.2933-.01125803-.1034-90453e-8-.2079.03040305-.3071.0313075-.0991.0828848-.1907.1514588-.2688.068574-.0781.152646-.1412.246879-.1851s.196569-.0678.30051-.07c.103942-.0023.20722.0171.303279.0568l8.025 2.55 8.02496-2.55c.0961-.0397.1994-.0591.3033-.0568.104.0022.2063.0261.3005.07.0943.0439.1783.107.2469.1851.0686.0781.1202.1697.1515.2688.0313.0992.0416.2037.0304.3071-.0113.1033-.0439.2032-.0958.2933-.052.0901-.122.1684-.2058.2299-.0838.0616-.1795.105-.281.1276l-6 1.9125 6 1.9125c.0941.0288.1815.0761.2571.139s.1379.1403.1833.2276c.0454.0872.0729.1827.081.2807s-.0034.1967-.0339.2902z'
								></path>
							</svg>
						</a>
						<p>Campfire © 2022.</p>
					</div>
				</div>
				<div className='px-6 pt-6'>
					<form action=''>
						<div className='grid md:grid-cols-3 gird-cols-1 gap-4  justify-center items-center'>
							<div className='md:ml-auto md:mb-6'>
								<p className='text-gray-800'>
									<strong>Sign up for our newsletter</strong>
								</p>
							</div>

							<div className='md:mb-6'>
								<input
									type='text'
									className='
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            '
									id='exampleFormControlInput1'
									placeholder='Email address'
								/>
							</div>

							<div className='md:mr-auto mb-6'>
								<button
									type='button'
									className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
								>
									Subscribe
								</button>
							</div>
						</div>
					</form>
				</div>
			</footer>
		</>
	);
};

export default Footer;
