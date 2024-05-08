import "../src/css/Eticket.css";
import Pages from "./Pages"; 
import PageFAQ from "../src/components/PageFAQ"
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
