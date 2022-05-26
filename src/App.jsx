import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./views/home";
import OtherPage from "./views/other-page";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/other-page" element={<OtherPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
