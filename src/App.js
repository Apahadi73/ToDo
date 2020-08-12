import React from 'react';
import { connect } from 'react-redux';
import AddBar from './components/AddBar';
import List from './components/List';

import { fetchToDoList } from './actions/index';

import './App.css';
import BottomTabBar from './components/BottomTabBar';

class App extends React.Component {
	componentDidMount() {
		//fetch todo from backend the moment app component get mounted
		this.props.fetchToDoList();
	}
	renderList() {
		//displays the todolist if list is non-empty
		if (!(this.props.list.length === 0)) {
			return (
				<div className="card-body d-flex justify-content-center">
					<List />
				</div>
			);
		} else {
			return <div />;
		}
	}

	render() {
		return (
			<div>
				<nav className="navbar">
					{/* <a className="navbar-brand" href="#"> */}
					<h1>ToDo</h1>
					{/* </a> */}
				</nav>
				<div className="ui container">
					<div className="d-flex justify-content-center">
						<div className="card">
							<div className="justify-content-center">
								<div className="card-header">
									<div className="appBody">
										<AddBar />
									</div>
								</div>
								{this.renderList()}
								<BottomTabBar />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStatesToProps = ({ ToDoList }) => {
	return { list: ToDoList };
};

export default connect(mapStatesToProps, { fetchToDoList })(App);
