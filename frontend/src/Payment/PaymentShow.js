import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import "./Payment.css";
import logo from '../Logo.jpg';

function PaymentShow() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedCard, setSelectedCard] = useState('');
  const [cards, setCards] = useState([]);
  const [userProfiles, setUserProfiles] = useState([]);
  const [currentDate, setCurrentDate] = useState('');
  const [paymentDone, setPaymentDone] = useState(false);

  useEffect(() => {
    // Fetch card data from the database
    axios
      .get('http://localhost:4000/api/card')
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => {
        console.error('Error fetching card data:', error);
      });

    // Fetch user profile data
    axios
      .get('http://localhost:4000/server/payment/staffpaymentgetall')
      .then((result) => {
        setUserProfiles(result.data ? result.data.data : []);
      })
      .catch((err) => console.error(err));

    // Set current date
    const currentDate = new Date().toLocaleDateString();
    setCurrentDate(currentDate);
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/server/payment/staffpaymentdelete/${id}`)
      .then(() => {
        // Filter out the deleted profile from the userProfiles state
        setUserProfiles(userProfiles.filter(profile => profile._id !== id));
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:4000/server/payment/staffpayment',
        {
          name,
          email,
          amount,
          selectedCard,
        }
      );

      if (response.status === 201) {
        const newUserProfile = response.data.data;
        setUserProfiles([...userProfiles, newUserProfile]); // Add the newly created profile to the state
        alert('Payment Done !!!');
        setPaymentDone(true);
      } else {
        throw new Error(response.data || 'Failed to create UserDetails');
      }
    } catch (error) {
      console.error('Error creating UserDetails:', error);
    }
  };

  const handlePdfClose = () => {
    setPaymentDone(false);
  };

  const BillPdf = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image src={logo} style={styles.logo} />
          <Text style={styles.companyName}>ICare Pay</Text>
        </View>
        <Text style={styles.billHeader}>Your Invoice.</Text>
        <View style={styles.billContent}>
          <Text style={styles.label}>Recipient: {name}</Text>
          <Text style={styles.label}>Email: {email}</Text>
          <Text style={styles.label}>Amount: LKR {amount}</Text>
          <Text style={styles.label}>Card Name: {selectedCard}</Text>
          <Text style={styles.info}>
            Thank you for using ICare Pay. We are committed to providing a secure and convenient payment experience for our customers.
          </Text>
          <Text style={styles.info}>
            Invoice Date: {currentDate}
          </Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="payment-container">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Your image description" style={{ width: '100px', height: 'auto', marginRight: '10px' }} />
        <h1 className="company-header">ICare Pay</h1> {/* Company header */}
      </div>

      <h2 className="payment-title">Enter Your Pay Details Here</h2>
      <form onSubmit={handleSubmit} className="payment-form">
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='payment-input'
        />
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='payment-input'
        />
        <input
          type='number'
          placeholder='Amount'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className='payment-input'
        />
        <select
          value={selectedCard}
          onChange={(e) => setSelectedCard(e.target.value)}
          className='payment-input'
        >
          <option value=''>Select a Card</option>
          {cards.map((card) => (
            <option key={card._id} value={card._id}>
              {card.holderName}
            </option>
          ))}
        </select>
        <button type='submit' className='payment-btn'>
          Pay Now
        </button>
        <a href="/card" className="premium-btn">Add OR Manage Your Cards</a>
      </form>
      {/* Render the Paytable component passing userProfiles and handleDelete */}
      <footer className="footer">
        <p>Secure your transactions with ICare Pay. We prioritize your financial safety and convenience.</p>
        <p>For any payment-related assistance, contact our customer support.</p>
        <p>Current Date: {currentDate}</p>
      </footer>

      {paymentDone && (
        <div className="pdf-popup">
          <PDFDownloadLink document={<BillPdf />} fileName="payment_bill.pdf">
            {({ blob, url, loading, error }) =>
              loading ? 'Generating PDF...' : 'Get Your Bill Here'
            }
          </PDFDownloadLink>
          <button onClick={handlePdfClose}>Close</button>
        </div>
      )}
    </div>
  );
}

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    padding: 30,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  billHeader: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  billContent: {
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
  },
  info: {
    marginTop: 20,
    fontSize: 12,
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 12,
  },
});

export default PaymentShow;
