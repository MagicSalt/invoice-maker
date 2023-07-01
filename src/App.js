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
    const [clientName, setClientName] = useState('');
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
            <main className='m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow'>
                {showInvoice ? (
                    <div>
                        <Header handlePrint={handlePrint} />
                        <YourDetails name={name} address={address} email={email} />
                        <ClientDetails clientName={clientName} clientAddress={clientAddress} />
                        <Dates
                            invoiceNumber={invoiceNumber}
                            invoiceDate={invoiceDate}
                            dateDue={dateDue}
                        />
                        <Table />
                        <Notes notes={notes} />
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
                                name='address'
                                id='address'
                                placeholder='Enter your address'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                            <label htmlFor='email'>Email</label>
                            <input
                                type='email'
                                name='email'
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
                            <label htmlFor='clientName'>Client Name</label>
                            <input
                                type='text'
                                name='clientName'
                                id='clientName'
                                placeholder="Enter the client's name"
                                value={clientName}
                                onChange={(e) => setClientName(e.target.value)}
                            />
                            <label htmlFor='clientAddress'>Client Address</label>
                            <input
                                type='text'
                                name='clientAddress'
                                id='clientAddress'
                                placeholder="Enter your client's address"
                                value={clientAddress}
                                onChange={(e) => setClientAddress(e.target.value)}
                            />
                            <label htmlFor='invoiceNumber'>Invoice Number</label>
                            <input
                                type='text'
                                name='invoiceNumber'
                                id='invoiceNumber'
                                placeholder='Invoice number'
                                value={invoiceNumber}
                                onChange={(e) => setInvoiceNumber(e.target.value)}
                            />
                            <label htmlFor='invoiceDate'>Invoice Date</label>
                            <input
                                type='date'
                                name='invoiceDate'
                                id='invoiceDate'
                                placeholder='Invoice date'
                                value={invoiceDate}
                                onChange={(e) => setInvoiceDate(e.target.value)}
                            />
                            <label htmlFor='dateDue'>Date Due</label>
                            <input
                                type='date'
                                name='dateDue'
                                id='dateDue'
                                placeholder='Date Due'
                                value={dateDue}
                                onChange={(e) => setDateDue(e.target.value)}
                            />
                            <label htmlFor='notes'>Notes</label>
                            <textarea
                                name='notes'
                                id='notes'
                                cols='30'
                                rows='10'
                                placeholder='Additional Notes'
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                            ></textarea>
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
