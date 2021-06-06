import React from "react";

export const CompoleteTodo = (props) => {
  const { completeTodos, onBack } = props;
  return (
    <div className="complete_area">
      <p className="title">完了のTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="list_row">
              <li>{todo}</li>
              <button onClick={() => onBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
