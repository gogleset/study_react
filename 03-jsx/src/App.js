import React from "react";

// route 기능을 위한 패키지에서 Route 함수와 Link 함수, Switch함수만 골라서 참조
import { Route, Link, Routes } from "react-router-dom";

import Expr from "./pages/Expr";
import If1 from "./pages/If1";
import If2 from "./pages/If2";
import If3 from "./pages/If3";
import If4 from "./pages/If4";
import Loop1 from "./pages/Loop1";
import Loop2 from "./pages/Loop2";
import Loop3 from "./pages/Loop3";

function App() {
  return (
    <div>
      <h1>03 - JSX</h1>
      <hr></hr>
      {/* 링크 구성부분 */}
      <nav>
        <Link to="/expr">[Expr]</Link>
        <Link to="/if1">[If1]</Link>
        <Link to="/if2">[If2]</Link>
        <Link to="/if3">[If3]</Link>
        <Link to="/if4">[If4]</Link>
        <Link to="/loop1">[Loop1]</Link>
        <Link to="/loop2">[Loop2]</Link>
        <Link to="/loop3">[Loop3]</Link>
      </nav>
      <hr />

      {/* ------- 페이지로 사용될 컴포넌트들 명시하기 ------- */}
      <Routes>
        {/* 첫 페이지로 사용되는 컴포넌트의 경우 exact={true}를 명시해야 한다. */}
        {/* 첫 페이지로 사용되는 컴포넌트는 path에 "/"를 권장 */}
        <Route path="/expr" element={<Expr></Expr>} exact={true} />
        <Route path="/if1" element={<If1></If1>} />
        <Route path="/if2" element={<If2></If2>} />
        <Route path="/if3" element={<If3></If3>} />
        <Route path="/if4" element={<If4></If4>} />
        <Route path="/loop1" element={<Loop1></Loop1>} />

        <Route path="/loop2" element={<Loop2></Loop2>} />
        <Route path="/loop3" element={<Loop3></Loop3>} />      
      </Routes>
    </div>
  );
}

export default App;
