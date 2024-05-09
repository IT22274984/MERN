import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function AllUsers() {

    const [users, setusers] = React.useState([])

    const deletehandler = (id) => {
        axios.delete("http://localhost:4000/api/user/" + id).then((res) => [
            alert("User deleted")
        ]).catch((er) => {
            alert("Unable to delete")
        })
    }

    React.useEffect(() => {
        axios.get("http://localhost:4000/api/user/get").then((res) => {
            setusers(res.data)
        }).catch((er) => { })
    }, [])
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>User Name</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">profilr Pic</TableCell>
                        {/* <TableCell align="right">id</TableCell> */}
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell >
                                {row.username}
                            </TableCell>
                            <TableCell align="left">{row.email}</TableCell>
                            <TableCell align="left"><img src={row.profilePicture} style={{ width: "40px", height: "40px" }} /></TableCell>
                            {/* <TableCell align="right">{row._id}</TableCell> */}
                            <TableCell align="right">
                                <div style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", flex: "1" }}>
                                    {/* <button style={{ marginBottom: "5px" }}>Edit</button> */}
                                    <button onClick={() => deletehandler(row._id)} style={{ backgroundColor: "red" }}>Delete</button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
