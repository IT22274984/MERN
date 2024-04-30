import "./App.css";
import Pages from "./Pages"; 
import PageFAQ from "./PageFAQ"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Pages />
      {/* <PageFAQ/> */}
    </>
  );
}

export default App;
