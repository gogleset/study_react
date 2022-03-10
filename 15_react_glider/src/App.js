import React from "react";

import Glider from "react-glider";
import "glider-js/glider.min.css";

import Pane from "./components/Pane";

const App = () => {
  return (
    <div>
      <Glider draggable hasArrows hasDots slidesToShow={2} slidesToScroll={1}>
        <Pane>1</Pane>
        <Pane>2</Pane>
        <Pane>3</Pane>
      </Glider>
    </div>
  );
};

export default App;
