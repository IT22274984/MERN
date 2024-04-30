import React, { useEffect, useRef } from 'react'
import { Row,Col, Navbar, Container } from "react-bootstrap";
import TasksList from '../components/TasksList';
import AddTask from '../components/AddTask';
import { useParams } from 'react-router-dom';
import FAQList from '../FAQPage/FAQList';
import Navigationbar from '../components/Navigationbar';
import "../App.css";


export default function Eticket() {
  const{id} = useParams()
  useEffect(()=>{
    
    console.log(id)
  })
  return (
 
    <Container>
     <Row className="justify-content-md-center">
       <Col  lg="11">
        <Navigationbar/><br/>
        <AddTask />
       </Col>
      </Row>
      <TasksList/>
      <FAQList/>
   </Container> 

 )
}

 

