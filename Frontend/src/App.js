import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import Container from "./../node_modules/react-bootstrap/esm/Container";
import { Row,Col } from "react-bootstrap";
import TasksList from "./components/TasksList";
import Pages from "./Pages";

function App() {
  return <Pages/>
}

export default App;
