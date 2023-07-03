export default function Table() {
    return (
        <>
            <table width='100%'>
                <thead>
                    <tr className='bg-gray-100 p-1'>
                        <td>Description</td>
                        <td>Quantity</td>
                        <td>Price</td>
                        <td>Amount</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Sample description</td>
                        <td>20</td>
                        <td>500</td>
                        <td>10000</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
