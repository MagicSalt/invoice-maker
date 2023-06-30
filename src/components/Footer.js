export default function Footer({ name, email, phone }) {
    return (
        <>
            <footer>
                <ul className='flex flex-wrap items-center justify-center'>
                    <li>
                        <span className='font-bold'>Your Name: </span>
                        {name}
                    </li>
                    <li>
                        <span className='font-bold'>Your Email: </span>
                        {email}
                    </li>
                    <li>
                        <span className='font-bold'>Phone Number: </span>
                        {phone}
                    </li>
                </ul>
            </footer>
        </>
    );
}
