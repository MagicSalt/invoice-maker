import { useState } from 'react';
import ClientDetails from './components/ClientDetails';
import Dates from './components/Dates';
import Footer from './components/Footer';
import Header from './components/Header';
import Notes from './components/Notes';
import Table from './components/Table';
import YourDetails from './components/YourDetails';

function App() {
    const [showInvoice, setShowInvoice] = useState(false);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [clientName, setclientName] = useState('');
    const [clientAddress, setClientAddress] = useState('');
    const [invoice, setInvoice] = useState('');
    const [invoiceNumber, setInvoiceNumber] = useState('');
    const [invoiceDate, setInvoiceDate] = useState('');
    const [dateDue, setDateDue] = useState('');
    const [notes, setNotes] = useState('');

    const handlePrint = () => {
        window.print();
    };
    return (
        <>
            <main className='m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow'>
                {showInvoice ? (
                    <div>
                        <Header handlePrint={handlePrint} />
                        <YourDetails name={name} address={address} email={email} />
                        <ClientDetails />
                        <Dates />
                        <Table />
                        <Notes />
                        <Footer name={name} email={email} phone={phone} />
                        <button
                            onClick={() => setShowInvoice(false)}
                            className='bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'
                        >
                            Edit Information
                        </button>
                    </div>
                ) : (
                    <>
                        {/* name, address, email, phone, client name, client address, invoice number, invoice date, date due, notes */}
                        <div className='flex flex-col justify-center'>
                            <label htmlFor='name'>Name</label>
                            <input
                                type='text'
                                name='text'
                                id='name'
                                placeholder='Enter your name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label htmlFor='address'>Address</label>
                            <input
                                type='text'
                                name='text'
                                id='address'
                                placeholder='Enter your address'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                            <label htmlFor='email'>Email</label>
                            <input
                                type='text'
                                name='text'
                                id='email'
                                placeholder='Enter your email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor='phone'>Phone Number</label>
                            <input
                                type='text'
                                name='text'
                                id='phone'
                                placeholder='Enter your phone number'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <button
                                onClick={() => setShowInvoice(true)}
                                className='bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'
                            >
                                Preview Invoice
                            </button>
                        </div>
                    </>
                )}
            </main>
        </>
    );
}

export default App;
