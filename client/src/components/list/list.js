import React from "react";
import "./list.css";

const List = ({ children }) => {
  return (
    <div className="list-overflow-container">
      <ul id="branch-list" className="list-group">
        {children}
      </ul>
    </div>
  );
};

export default List;