import React from "react";

const GeekupSeclect = (props) => {
  
  const ChangeSelect = (event) => {
    props.ChangeSelect(event.target.value);
  };

  return (
    <div>
      <label>Chọn đi em Khánh</label>
      <select value={props.selected} onChange={ChangeSelect}>
        <option value="1">Câu 1</option>
        <option value="2">Câu 2</option>
        <option value="3">Câu 3</option>
      </select>
    </div>
  );
};

export default GeekupSeclect;
