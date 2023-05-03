import {Routes, Route} from "react-router-dom"
import Login from "./component/Login";
import App from "./App";
import { NotFoundPage } from "./component/NotFoundPage";

// componetn điều hướng login 
function Direction() {

	return (
    <div>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/app" element={<App/>}></Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
      </Routes>
      
    </div>
  );
}


export default Direction;
