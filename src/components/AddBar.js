import React, { Component } from 'react';
import { connect } from 'react-redux';

import './AddBar.css';
import { addActivityToList } from '../actions';

// components for the add bar
class AddBar extends Component {
	state = { userInput: '' };
	render() {
		return (
			<div>
				<div>
					<form
						className="ui form"
						onSubmit={(event) => event.preventDefault()}
						style={{ backgroundColor: '#318fb5' }}
					>
						<div className="ui fluid action input">
							<input
								type="text"
								placeholder="Enter the activity here..."
								onChange={(e) => this.setState({ userInput: e.target.value })}
								value={this.state.userInput}
								onKeyPress={(e) => this.onKeyPressed(e)}
							/>
							<button type="button" className="ui button primary" onClick={() => this.onButtonClicked()}>
								<img src={'images/AddButton.png'} alt="add button" />
								{/* Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}

	//one text clipped -TODO

	onButtonClicked = () => {
		const { userInput } = this.state;
		//adds user entered activity to the list
		if (userInput) {
			this.onNewActivityEntered(this.state.userInput);
		}
	};

	onKeyPressed = (event) => {
		const { value } = event.target; //text field value
		if (event.key === 'Enter') {
			this.onNewActivityEntered(value);
			//   empties textfield after user presses enter
			this.setState({ userInput: '' });
		}
	};

	onNewActivityEntered = (newActivity) => {
		//prevents user from adding empty activity
		if (this.state.userInput !== '') {
			this.props.addActivityToList(newActivity);
		}
		// TODO: add something interesting if the user tries to add empty todo
	};
}

const mapStatesToProps = (state) => {
	return { userInput: state.newActivity, list: state.ToDoList };
};

export default connect(mapStatesToProps, { addActivityToList })(AddBar);
