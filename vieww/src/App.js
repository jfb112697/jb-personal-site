import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import About from "./components/About";
import Sidebar from "./components/Sidebar";
import Experience from "./components/Experience";
import Personal from "./components/Personal";
import Website from "./components/Website";

function App() {
  /*
        <div className="relative left-0 top-0 w-52 px-2 flex flex-col h-screen items-center justify-center">
          <div className="h-[75%] flex flex-col justify-center items-center border-r-2 border-white border-solid px-4 gap-4">
            <nav>
              <Link to="/"> About </Link>
            </nav>
          </div>
        </div>*/
  return (
    <div className="flex items-center justify-center">
      <Router>
        <Sidebar />
        <div className="flex h-screen w-7/12 items-center justify-center">
          <Routes>
            <Route path="/:page" component={<Sidebar />} />
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/project" element={<Personal />} />
            <Route path="/website" element={<Website />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
