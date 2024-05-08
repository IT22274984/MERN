import React, { useState, useEffect } from 'react';
import Navbar from '../../component/Navbar';
import { Link, useParams } from 'react-router-dom';
import userPic from '../../assets/userSh.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function PaymentUpdate() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedCard, setSelectedCard] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // Fetch card data from the database
    axios
      .get('http://localhost:4000/server/cards')
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => {
        console.error('Error fetching card data:', error);
      });

    // Fetch payment details by ID
    axios
      .get(`http://localhost:4000/server/payment/staffpaymentgetall/${id}`)
      .then((result) => {
        setName(result.data.data.name);
        setEmail(result.data.data.email);
        setAmount(result.data.data.amount);
        setSelectedCard(result.data.data.selectedCard); // Assuming you have a field named 'selectedCard' in your payment data
        setPaymentDate(result.data.data.createdAt); // Assuming createdAt holds the payment date
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/server/payment/staffpaymentupdate/${id}`, {
        name,
        email,
        amount,
        selectedCard,
      })
      .then((result) => {
        console.log(result);
        alert('Payment updated successfully!');
        navigate('/home');
      })
      .catch((error) => {
        console.error('Error updating payment:', error);
      });
  };

  return (
    <div>
      <Navbar />

      <div className='flex'>
        <div className='flex w-[300px] h-[1200px] bg-lime-900'>
          <div className='p-5'>
            <button className='w-[230px] h-[40px] bg-gray-200 rounded-2xl text-center my-3'>
              <Link to='/staffAccount'>Details</Link>
            </button>
            <button className='w-[230px] h-[40px]  bg-gray-500 text-white rounded-2xl text-center my-3'>
              <Link to='/PaymentInforStaff'>Payment Infor</Link>
            </button>
            <button className='w-[230px] h-[40px] bg-gray-200 rounded-2xl text-center my-3'>
              <Link to='/request'>Request</Link>
            </button>
          </div>
        </div>
        <div>
          <h1 className='text-center text-3xl'>Payment</h1>
          <div className='w-[150px] h-[150px]  rounded-full ml-[500px] mt-5 bg-gray-300 pt-3 -mb-[150px]'>
            <img src={userPic} alt='user image' className='w-[100px] h-[100px] m-auto ' />
          </div>
          <div className=' w-[700px] h-[800px] bg-gray-300 rounded-lg ml-52 mt-32'>
            <form className='px-6 py-8' onSubmit={handleUpdate}>
              <input
                className='w-[600px] h-[50px] ml-3 rounded-3xl px-5 py-2 my-4'
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className='w-[600px] h-[50px] ml-3 rounded-3xl px-5 py-2 my-4'
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className='w-[600px] h-[50px] ml-3 rounded-3xl px-5 py-2 my-4'
                type='text'
                placeholder='Amount'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <select
                className='w-[600px] h-[50px] ml-3 rounded-3xl px-5 py-2 my-4'
                value={selectedCard}
                onChange={(e) => setSelectedCard(e.target.value)}
              >
                <option value=''>Select a Card</option>
                {cards.map((card) => (
                  <option key={card.id} value={card.id}>
                    {card.cardNumber}
                  </option>
                ))}
              </select>
              <p className='ml-3 text-gray-600'>Payment Date: {new Date(paymentDate).toLocaleDateString()}</p>
              <button className='w-[150px] h-[40px] bg-green-900 text-white rounded-xl text-center ml-96 mt-6'>
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentUpdate;
