import Labs from "./labs";
import Tuiter from "./tuiter";
import {BrowserRouter, Link} from "react-router-dom";
import {Route, Routes} from "react-router";
import HelloWorld from "./labs/a6/hello-world";


function App() {

  return (
      <BrowserRouter>
          <div className={"container"}>
                <Routes>
                <Route path="/*" element={<Labs/>}/>
                <Route path="/tuiter/*" element={<Tuiter/>}/>
                </Routes>
            </div>
      </BrowserRouter>
  );
}

export default App;
