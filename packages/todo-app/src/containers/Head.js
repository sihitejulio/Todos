import React from "react";
// import { connect } from "react-redux";
// import { addTodo } from "../actions";

import { Breadcrumb } from 'antd';


let Head = (props) => {
  let input;

  return (
    <Breadcrumb style={{ background: '#fff', paddingLeft: 24 ,paddingTop:10}}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  );
};
// AddTodo = connect()(AddTodo);

export default Head;
