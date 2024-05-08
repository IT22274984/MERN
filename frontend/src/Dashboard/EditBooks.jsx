import React, { useState } from 'react';
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom';

const EditBooks = () => {
  const { id } = useParams();
  const { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL } = useLoaderData();

  const bookCategories = [
    "Vision Improvement",
    "Eye Anatomy and Physiology",
    "Eye Diseases",
    "Eye Care Techniques",
    "Nutrition and Eye Health",
    "Eye Exercises",
    "Eye Health Lifestyle",
    "Children's Eye Health",
    "Vision Therapy",
    "Eye Health Research",
    "General Eye Health",
    "Other Eye Health Resources",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
  const [alertMessage, setAlertMessage] = useState('');

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    // Author Name Validation
    const isValidAuthorName = /^[^0-9]+$/.test(authorName); // Validate author name does not contain numbers
    if (!isValidAuthorName) {
      setAlertMessage("Author name cannot contain numbers.");
      return;
    }

    // PDF URL Validation
    const isValidPDFURL = /^https?:\/\/\S+$/.test(bookPDFURL); // Validate PDF URL format
    if (!isValidPDFURL) {
      setAlertMessage("Please enter a valid PDF URL.");
      return;
    }

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };

    fetch(`http://localhost:5000/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        setAlertMessage('Book updated successfully!');
        console.log(data);
      });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Edit Book</h2>
      {alertMessage && (
        <div className="alert alert-danger" role="alert">
          {alertMessage}
        </div>
      )}
      <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4" onSubmit={handleUpdate}>
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="bookTitle"
                value="Book Title"
              />
            </div>
            <TextInput
              id="bookTitle"
              placeholder="Book Name"
              required
              type="text"
              name='bookTitle'
              className='w-full'
              defaultValue={bookTitle}
            />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="authorName"
                value="Author Name"
              />
            </div>
            <TextInput
              id="authorName"
              placeholder="Author Name"
              required
              type="text"
              name='authorName'
              className='w-full'
              defaultValue={authorName}
            />
          </div>
        </div>
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="imageURL"
                value="Book Image URL"
              />
            </div>
            <TextInput
              id="imageURL"
              placeholder="Image URL"
              required
              type="text"
              name='imageURL'
              className='w-full'
              defaultValue={imageURL}
            />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="inputState"
                value="Book Category"
              />
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="bookDescription"
              value="Book Description"
            />
          </div>
          <Textarea
            id="bookDescription"
            placeholder="Book Description"
            required
            type="text"
            name='bookDescription'
            className='w-full'
            rows={4}
            defaultValue={bookDescription}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="bookPDFURL"
              value="Book PDF Link"
            />
          </div>
          <TextInput
            id="bookPDFURL"
            placeholder="Paste Book PDF URL here"
            required
            type="text"
            name='bookPDFURL'
            className='w-full'
            defaultValue={bookPDFURL}
          />
        </div>
        <Button type="submit" className='mt-5'>
          Save Changes
        </Button>
      </form>
    </div>
  );
}

export default EditBooks;
