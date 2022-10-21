import Labs from "./labs";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Nav from "./nav";
import HelloWorld from "./labs/a6/hello-world";

function App() {

  return (
      <BrowserRouter>
          <div className={"container"}>
                <Nav/>
                <Routes>
                <Route index element={<Labs/>}/>
                <Route path="/hello" element={<HelloWorld/>}/>
                <Route path="/tuiter" element={<Tuiter/>}/>
                </Routes>
            </div>
      </BrowserRouter>
  );
}

export default App;
