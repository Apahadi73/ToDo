import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchToDoList } from "../actions/index";
import ListItem from "./ListItem";

//List Component
class List extends Component {
  // maps list prop into the individual jsx element
  activityList = () => {
    const { list } = this.props;
    if (list === null) {
      return <div />;
    } else {
      return list.map((item, index) => {
        return <ListItem id={item._id} item={item.todo} key={item._id} />;
      });
    }
  };

  render() {
    return <ul className="card">{this.activityList()}</ul>;
  }
}

const mapStatesToProps = ({ ToDoList }) => {
  return { list: ToDoList };
};

export default connect(mapStatesToProps, { fetchToDoList })(List);

/* 
Note: My logic behind using item as the key for the list item is that 
if user write same todo activity multiple times, 
it does not matter which todo is modified or deleted as they all are essentially same.
Index cannot be used here as the index would just map star and completed state from one todo activity to another.
I tried using uuidv4, but that failed miserably
*/
