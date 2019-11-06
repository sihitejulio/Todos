import React from "react";
import { connect } from "react-redux";
// import { addTodo } from "../actions";
import { Typography } from 'antd';
const { Title, Paragraph, Text } = Typography;

let AddTodo = (props) => {
  let input;

  return (
    <div style={{paddingTop:100,paddingLeft:100}}>
         <Title>h1. Ant Design</Title>
    </div>
  );
};
// AddTodo = connect()(AddTodo);

export default AddTodo;
