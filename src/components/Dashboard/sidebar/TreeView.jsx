import { useState } from 'react';
import TreeItem from './TreeItem';

const TreeView = ({ items, open, pathname }) => {
	const [opened, setOpened] = useState([]);
	const fillOpened = id => {
		if (opened.includes(id)) {
			return setOpened(opened.filter(item => item !== id));
		}
		return setOpened([...opened, id]);
	};
	return (
		<div>
			{items.map(item => (
				<TreeItem
					key={item.id}
					item={item}
					open={open}
					pathname={pathname}
					opened={opened}
					fillOpened={fillOpened}
				/>
			))}
		</div>
	);
};

export default TreeView;
