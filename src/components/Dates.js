export default function Dates({ invoiceNumber, invoiceDate, dateDue }) {
    return (
        <>
            <article className='my-5 flex items-end justify-end'>
                <ul>
                    <li>
                        <span className='font-bold'>Invoice Number:</span> {invoiceNumber}
                    </li>
                    <li>
                        <span className='font-bold'>Invoice Date:</span> {invoiceDate}
                    </li>
                    <li>
                        <span className='font-bold'>Date Due:</span> {dateDue}
                    </li>
                </ul>
            </article>
        </>
    );
}
