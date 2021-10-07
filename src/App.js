import React, { useState } from "react";

import "./App.css";
import GeekupSeclect from "./geekup-select.component";
import GeekupList from "./geekup-list.component";

const INITIAL_STATE = [
  {
    id: "1",
    title: "Câu 1",
    description:
      "Biệt đội tan vỡ, Biệt đội tan vỡ, Biệt đội tan vỡ, Biệt đội tan vỡ, Biệt đội tan vỡ, Biệt đội tan vỡ, Biệt đội tan vỡ, Biệt đội tan vỡ, ",
  },
  {
    id: "2",
    title: "Câu 2",
    description:
      "Sơn Tùng MTP, Sơn Tùng MTP, Sơn Tùng MTP, Sơn Tùng MTP, Sơn Tùng MTP, Sơn Tùng MTP, Sơn Tùng MTP, Sơn Tùng MTP, Sơn Tùng MTP, Sơn Tùng MTP, Sơn Tùng MTP, ",
  },
  {
    id: "3",
    title: "Câu 3",
    description:
      "Em Khánh tiêu cực, Em Khánh tiêu cực, Em Khánh tiêu cực, Em Khánh tiêu cực, Em Khánh tiêu cực, Em Khánh tiêu cực, Em Khánh tiêu cực, Em Khánh tiêu cực, ",
  },
];

function App() {
  const [chooseSelect, setChooseSelect] = useState("1");

  const ChangeSelect = (select) => {
    setChooseSelect(select);
  };

  const SelectAnswer = INITIAL_STATE.filter((answer) => {
    return answer.id === chooseSelect;
  });

  return (
    <div className="App">
      <GeekupSeclect selected={chooseSelect} ChangeSelect={ChangeSelect} />
      <GeekupList geekup={SelectAnswer} />
    </div>
  );
}

export default App;
