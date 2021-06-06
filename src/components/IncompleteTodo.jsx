import React from "react";

export const InCompoleteTodo = (props) => {
  const { incompleteTodos, onDelete, onComplete } = props;
  return (
    <div className="incomplete_area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="list_row">
              <li>{todo}</li>
              <button onClick={() => onComplete(index)}>完了</button>
              <button onClick={() => onDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
