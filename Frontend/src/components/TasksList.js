import React,{useState,useEffect} from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import MyVerticallyCenteredModal from './UpdateTask';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedTask,removeTaskFromList, deleteTaskFromServer } from "../slices/tasksSlice";
import { getTasksFromServer } from './../slices/tasksSlice';

const TasksList = () => {
  const {tasksList} = useSelector((state) => state.tasks)
  const dispatch = useDispatch()

  const updateTask = (task) => {
    console.log("update Task");
    setModalShow(true)
    dispatch(setSelectedTask(task))
  };

  useEffect(() => {
    dispatch(getTasksFromServer())
  },[dispatch])

  const deleteTask = (task) => {
    console.log("delete task");
    dispatch(deleteTaskFromServer(task))
    .unwrap()
    .then(() => {
      dispatch(removeTaskFromList(task))
    })
  };

  const [modalShow,setModalShow] = useState(false)
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Topic</th>
            <th>Discription</th>
            <th>Responce</th>
            <th>Status</th>
            <th>Actions</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {
            tasksList && tasksList.map((task,index) => {
              return (
                <tr className="text-center" key={task._id}>
                <td>{index + 1}</td>
                <td>{task.customername}</td>
                <td>{task.email}</td>
                <td>{task.topic}</td>
                <td>{task.description}</td>
                <td>{task.responce}</td>
                <td>{task.ticketstatus}</td>
                 <td>
                  {/*<Button
                    variant="primary"
                    className="mx-3"
                    onClick={() => updateTask(task)}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Button> */}
                  <Button variant="primary">
                    <i className="bi bi-trash3" onClick={() => deleteTask(task)}></i>
                  </Button>
                </td>
              </tr>
              )
            })
          }
         
        </tbody>
      </Table>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default TasksList;
