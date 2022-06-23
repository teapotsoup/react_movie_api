import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
        {/* useParams으로 받게될 변수 이름 id. 앞에 :를 꼭 붙여주자 */}
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
