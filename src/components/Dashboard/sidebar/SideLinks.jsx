import SideItem from './SideItem';

const SideLinks = ({ items, open, pathname }) => {
	return (
		<div className='flex w-full flex-col p-4'>
			{items.map(item => (
				<SideItem key={item.id} item={item} open={open} pathname={pathname} />
			))}
		</div>
	);
};

export default SideLinks;
