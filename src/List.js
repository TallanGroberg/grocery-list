import React from "react";
import Todo from "./Todo";

const List = (props) => (
  <div>
    <h1>{props.name}</h1>
    <ul>
      { props.items.map( item => <Todo key={item.id} {...item} todoClick={props.todoClick} />) }
    </ul>
  </div>
);


export default List;
