import React, { useEffect, useRef } from 'react'
import { Row,Col, Navbar, Container } from "react-bootstrap";
import TasksList from '../components/TasksList';
import AddTask from '../components/AddTask';
import { useParams } from 'react-router-dom';
// import Container from "./../node_modules/react-bootstrap/esm/Container";

export default function Eticket() {
  const{id} = useParams()
  useEffect(()=>{

    console.log(id)
  })
  return (
    <Container>
    <Navbar/>
    <Row className="justify-content-md-center">
      <Col  lg="6">
        <AddTask />
        </Col>
    </Row>
    <TasksList/>
  </Container>
  )
}


