import React, { Component } from "react";
import PropTypes from "prop-types";

export class Todoitem extends Component {
  getStyle = () => {
    return {
      background: "lightgreen",
      padding: "10px",
      fontFamily: 'Lucida Console',
      borderBottom: "1px #ccc dotted",
      color:'darkblue',
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  componentDidMount = (props) => {
    console.log(this.props.todo);
  };

  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        
        <p>
          
          <input
            
            type="checkbox"
            defaultChecked={completed}
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          
         
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}

// PropTypes
Todoitem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

const btnStyle = {
  background: "maroon",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default Todoitem;