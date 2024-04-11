import React, { useEffect, useRef } from 'react'
import { Row,Col, Navbar, Container } from "react-bootstrap";
import TasksList from '../components/TasksList';
import AddTask from '../components/AddTask';
import Response from '../components/Responce'
import { useParams } from 'react-router-dom';
// import Container from "./../node_modules/react-bootstrap/esm/Container";

export default function Admin() {
  const{id} = useParams()
  useEffect(()=>{
    console.log(id)
  })
  return (
    <Container>
    <Navbar/>
    <Response/>
  </Container>
  )
}