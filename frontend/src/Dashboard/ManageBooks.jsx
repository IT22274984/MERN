import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';
import { Pagination } from 'flowbite-react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ManageBooks = () => {
    const [allBooks, setAllBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch(`http://localhost:5000/books/`)
            .then((res) => res.json())
            .then((data) => {
                setAllBooks(data);
            });
    }, []);

    // delete a book
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/book/${id}`, {
            method: "DELETE",
        })
            .then(() => {
                // Fetch updated list of books after deletion
                fetch(`http://localhost:5000/books/`)
                    .then((res) => res.json())
                    .then((data) => {
                        // Update state with the updated list of books
                        setAllBooks(data);
                    });
            })
            .catch((error) => {
                console.error('Error deleting book:', error);
            });
    };

    // Generate report
    const generateReport = () => {
        const doc = new jsPDF();
        const now = new Date();
        const dateTime = now.toLocaleString();
        const tableRows = allBooks.map((book, index) => [
            index + 1,
            book.bookTitle,
            book.authorName,
            book.category
        ]);

        // Calculate total number of books
        const totalBooks = allBooks.length;

        doc.autoTable({
            head: [['No', 'Book Name', 'Author Name', 'Category']],
            body: tableRows,
            startY: 10, // Start the table at Y coordinate 10
        });

        // Add additional details after the table
        doc.setFontSize(10); // Set font size to 10
        doc.text(`Generated Time: ${dateTime}`, 10, doc.autoTable.previous.finalY + 10);
        doc.text(`Total Books: ${totalBooks}`, 10, doc.autoTable.previous.finalY + 20);

        doc.save('Books_Report.pdf');
    };

    // Filter books based on search term
    const filteredBooks = allBooks.filter((book) =>
        book.bookTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.authorName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Search input change handler
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Search button click handler (you may implement search logic here if needed)
    const handleSearchSubmit = () => {
        // You can implement search logic here if needed
        // For now, it's just updating the state
        console.log('Searching for:', searchTerm);
    };

    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Manage Your Books Inventory!</h2>

            {/* Search */}
            <div className='flex items-center'>
                <input
                    type="search"
                    placeholder='Search a book here'
                    className='py-2 px-2 rounded-sm border border-gray-300 mr-2'
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button
                    className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'
                    onClick={handleSearchSubmit}
                >
                    Search
                </button>
            </div>

            {/* Buttons */}
            <div className="mt-4 mb-8">
                <button
                    className='bg-green-500 px-6 py-2 text-white font-medium hover:bg-green-600 transition-all ease-in duration-200 mr-4'
                    onClick={generateReport}
                >
                    Generate Report
                </button>
            </div>

            {/* Table */}
            <Table className='lg:w-[1180px]'>
                <Table.Head>
                    <Table.HeadCell>No.</Table.HeadCell>
                    <Table.HeadCell>Book Name</Table.HeadCell>
                    <Table.HeadCell>Author Name</Table.HeadCell>
                    <Table.HeadCell>Category</Table.HeadCell>
                    <Table.HeadCell>Edit or Manage</Table.HeadCell>
                </Table.Head>

                {filteredBooks.map((book, index) => (
                    <Table.Body className="divide-y" key={book._id}>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {index + 1}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {book.bookTitle}
                            </Table.Cell>
                            <Table.Cell>
                                {book.authorName}
                            </Table.Cell>
                            <Table.Cell>
                                {book.category}
                            </Table.Cell>
                            <Table.Cell>
                                <Link
                                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                                    to={`/admin/dashboard/edit-books/${book._id}`}
                                >
                                    Edit
                                </Link>
                                <button className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600' onClick={() => handleDelete(book._id)}>Delete</button>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                ))}
            </Table>

            {/* Pagination */}
            <div className="flex items-center justify-center text-center mt-8">
                <Pagination
                    currentPage={1}
                    layout="pagination"
                    nextLabel="Go forward"
                    onPageChange={page => { setCurrentPage(page) }}
                    previousLabel="Go back"
                    showIcons
                    totalPages={1000}
                />
            </div>
        </div>
    );
};

export default ManageBooks;
