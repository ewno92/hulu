import React from "react";

const HeaderItem = ({ title, Icon }) => {
  return (
    <div>
      <Icon className="h-9" />
      <p>{title}</p>
    </div>
  );
};

export default HeaderItem;
