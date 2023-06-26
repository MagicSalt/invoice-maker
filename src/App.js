function App() {
    const handlePrint = () => {
        window.print();
    };
    return (
        <>
            <main className='m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow'>
                {/* Header */}
                <header className='flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between'>
                    <div>
                        <h1 className='font-bold uppercase tacking-wide text-4xl mb-3'>
                            Invoice Maker
                        </h1>
                    </div>
                    <div>
                        <ul className='flex items-center justify-between flex-wrap'>
                            <li>
                                <button onClick={handlePrint} className='btn btn-print'>
                                    Print
                                </button>
                            </li>
                            <li>
                                <button className='btn btn-download'>Download</button>
                            </li>
                            <li>
                                <button className='btn btn-send'>Send</button>
                            </li>
                        </ul>
                    </div>
                </header>
                {/* End Header */}
                {/* Your Details */}
                <section className='flex flex-col items-end justify-end'>
                    <h2 className='text-xl uppercase'>Darren Lin</h2>
                    <p>Your Address</p>
                </section>
                {/* End Your Details */}
                {/* Client Details */}
                <section className='mt-5'>
                    <h2 className='text-xl uppercase'>Client Name</h2>
                    <p>Client Address</p>
                </section>
                {/* End Client Details */}
                {/* Dates */}
                <article className='my-5 flex items-end justify-end'>
                    <ul>
                        <li>
                            <span className='font-bold'>Invoice Number:</span>
                        </li>
                        <li>
                            <span className='font-bold'>Invoice Date:</span>
                        </li>
                        <li>
                            <span className='font-bold'>Date Due:</span>
                        </li>
                    </ul>
                </article>
                {/* End Dates */}
                {/* Table */}
                <div className='my-5'>this is the table</div>
                {/* End Table */}
                {/* Notes */}
                <section className='mb-5'>
                    {/* Textarea */}
                    <p>Notes to client...</p>
                </section>
                {/* End Notes */}
                {/* Footer */}
                <footer>
                    <ul className='flex flex-wrap items-center justify-center'>
                        <li>
                            <span className='font-bold'>Your Name: </span>Darren Lin
                        </li>
                        <li>
                            <span className='font-bold'>Your Email: </span>darrenlin815@hotmail.com
                        </li>
                        <li>
                            <span className='font-bold'>Phone Number: </span>778.998.8700
                        </li>
                    </ul>
                </footer>
                {/* End Footer */}
            </main>
        </>
    );
}

export default App;
