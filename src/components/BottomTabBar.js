import React from 'react';

import './BottomTabBar.css';

//displays remaining and completed tab bar at the end of the list
const BottomTabBar = () => {
	return (
		<div>
			<button type="button" class="btn btn-info">
				Remaining
			</button>

			<button type="button" class="btn btn-info">
				Completed
			</button>
		</div>
	);
};

export default BottomTabBar;
