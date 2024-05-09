import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Button } from '@mui/material';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const CustomerTable = () => {

  const customers = [
    { name: 'Dilli', optometristName: 'Navashanth', date: '06/05/2024', mobileNumber: '0774003442' },
    { name: 'Dilli', optometristName: 'Navashanth', date: '08/05/2024', mobileNumber: '0774003442' },
    { name: 'jeyanth', optometristName: 'Navashanth', date: '08/05/2024', mobileNumber: '0779900299' }
  ];

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
        head: [['Number of Optometrist Present: 5 ']],
      head: [['Customer Name', 'Optometrist Name', 'Date', 'Mobile Number']],
      body: customers.map((customer) => [customer.name, customer.optometristName, customer.date, customer.mobileNumber]),
    });
    doc.save('Optometrist view customers.pdf');
  };

  return (
    <div>

      <Table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <TableHead><strong>Number of Optometrist Present: 5 </strong></TableHead>
      <TableHead>. </TableHead>
        <TableHead>
          <TableRow>
            <TableCell style={{ backgroundColor: '#f2f2f2', padding: '8px', border: '1px solid #ddd' }}><strong>Customer Name</strong></TableCell>
            <TableCell style={{ backgroundColor: '#f2f2f2', padding: '8px', border: '1px solid #ddd' }}><strong>Optometrist Name</strong></TableCell>
            <TableCell style={{ backgroundColor: '#f2f2f2', padding: '8px', border: '1px solid #ddd' }}><strong>Date</strong></TableCell>
            <TableCell style={{ backgroundColor: '#f2f2f2', padding: '8px', border: '1px solid #ddd' }}><strong>Mobile Number</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer, index) => (
            <TableRow key={index}>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>{customer.name}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>{customer.optometristName}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>{customer.date}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>{customer.mobileNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
          <div>.</div>
      <div><Button onClick={generatePDF} variant="contained">Download PDF</Button></div>
    </div>
  );
};

export default CustomerTable;
