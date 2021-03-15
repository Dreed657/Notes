import React from "react";
import Header from "../../components/header";

const PageLayout = (props) => {
  return (
    <div className="container">
      <Header />
      <div className="inner">{props.children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default PageLayout;
