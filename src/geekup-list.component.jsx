import React from "react";

const GeekupList = (props) => {
  return props.geekup.map((list) => (
    <div>
      <label>{list.title}</label>
      <div>{list.description}</div>
    </div>
  ));
};

export default GeekupList;
