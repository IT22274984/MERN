import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import MyVerticallyCenteredModal from "./UpdateTask";
import { useSelector, useDispatch } from "react-redux";
import {
  setSelectedTask,
  removeTaskFromList,
  deleteTaskFromServer,
  getTasksFromServer,

} from "../slices/tasksSlice";
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const TasksList = () => {
  const { tasksList } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    dispatch(getTasksFromServer());
  }, [dispatch]);

  useEffect(() => {
    setFilteredTasks(
      tasksList.filter((task) =>
        task.customername.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [tasksList, searchTerm]);

  const updateTask = (task) => {
    console.log("update Task");
    setModalShow(true);
    dispatch(setSelectedTask(task));
  };

  const deleteTask = (task) => {
    console.log("delete task");
    dispatch(deleteTaskFromServer(task))
      .unwrap()
      .then(() => {
        dispatch(removeTaskFromList(task));
      });
  };

  const [modalShow, setModalShow] = useState(false);

  const generateReport = () => {
    const doc = new jsPDF();
    const tableRows = [];
    filteredTasks.forEach((task, index) => {
      const rowData = [
        index + 1,
        task.customername,
        task.email,
        task.topic,
        task.description,
        task.responce,
        task.ticketstatus,
      ];
      tableRows.push(rowData);
    });
    doc.autoTable({
      head: [['No', 'Name', 'Email', 'Topic', 'Description', 'Response', 'Status']],
      body: tableRows,
    });
    doc.save('TaskList_Report.pdf');
  };

  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <Form.Control
          type="text"
          placeholder="Search by Customer name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="primary" onClick={generateReport}>Generate Report</Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Topic</th>
            <th>Description</th>
            <th>Response</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task, index) => {
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
                  <Button
                    variant="primary"
                    className="mx-3"
                    onClick={() => updateTask(task)}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Button>
                  <Button variant="primary" onClick={() => deleteTask(task)}>
                    <i className="bi bi-trash3"></i>
                  </Button>
                </td>
              </tr>
            );
          })}
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
