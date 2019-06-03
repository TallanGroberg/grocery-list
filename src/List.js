import React from 'react';

const List = (props) => (
  <div>
  <h1>{props.name}</h1>
  <ul>
    {props.item.map( item => <li key={item.id}>item.name</li>) }
      </ul>
    </div>
);

export default List;
