import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteActivity } from '../actions';

//paints todo Items
//props used in this are from state's index and list components
const ListItem = (props) => {
	const { id, item } = props;
	const [ showGoldStar, setShowGoldStar ] = useState(false);
	const [ showCompleted, setShowCompleted ] = useState(false);

	//paints star gold/grey based on state
	const onStarPainted = () => {
		const starAppearance = showGoldStar ? 'gold' : 'grey';
		return (
			<i
				className={`ui icon star`}
				style={{ color: `${starAppearance}` }}
				onClick={() => {
					setShowGoldStar(!showGoldStar);
				}}
			/>
		);
	};
	//paints star gold/grey based on state
	const onCheckmarkClicked = () => {
		const checkmark = showCompleted ? 'green' : 'grey';
		return (
			<i
				className={`ui icon check circle`}
				style={{ color: `${checkmark}` }}
				onClick={() => {
					setShowCompleted(!showCompleted);
				}}
			/>
		);
	};

	return (
		<div className="list-group-item" style={{ backgroundColor: '#83c5be' }}>
			{item}
			<span className="float-right">
				{onStarPainted()}
				{onCheckmarkClicked()}
				<i className="ui icon trash ui red" onClick={() => props.deleteActivity(id)} />
			</span>
		</div>
	);
};

export default connect(null, { deleteActivity })(ListItem);
