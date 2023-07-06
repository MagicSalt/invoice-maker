import React, { useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { v4 as uuidv4 } from 'uuid';

export default function TableForm({
    description,
    setDescription,
    quantity,
    setQuantity,
    price,
    setPrice,
    amount,
    setAmount,
    list,
    setList,
    total,
    setTotal,
}) {
    const [isEditing, setIsEditing] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItems = {
            id: uuidv4(),
            description,
            quantity,
            price,
            amount,
        };
        setDescription('');
        setQuantity('');
        setPrice('');
        setAmount('');
        setList([...list, newItems]);
        setIsEditing(false);
    };

    useEffect(() => {
        const calculateAmount = () => {
            setAmount(quantity * price);
        };
        calculateAmount(amount);
    }, [quantity, price, setAmount, amount]);

    useEffect(() => {
        let items = document.querySelectorAll('.amount');
        let sum = 0;

        for (let i = 0; i < items.length; i++) {
            if (items[i].className === 'amount') {
                sum += isNaN(items[i].innerHTML) ? 0 : parseInt(items[i].innerHTML);
                setTotal(sum);
            }
        }
    });

    const editItem = (id) => {
        const editingItem = list.find((item) => item.id === id);
        setList(list.filter((item) => item.id !== id));
        setIsEditing(true);
        setDescription(editingItem.description);
        setQuantity(editingItem.quantity);
        setPrice(editingItem.price);
    };

    const deleteItem = (id) => setList(list.filter((item) => item.id !== id));

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col md:mt-16'>
                    <label htmlFor='description'>Item Description</label>
                    <input
                        type='text'
                        name='description'
                        id='description'
                        placeholder='Item description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className='md:grid grid-cols-3 gap-10'>
                    <div className='flex flex-col'>
                        <label htmlFor='Quantity'>Quantity</label>
                        <input
                            type='text'
                            name='quantity'
                            id='quantity'
                            placeholder='Quantity'
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='price'>Price</label>
                        <input
                            type='text'
                            name='price'
                            id='price'
                            placeholder='Price'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='amount'>Amount</label>
                        <p>{amount}</p>
                    </div>
                </div>
                <button
                    type='submit'
                    className='mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'
                >
                    {isEditing ? 'Edit Item' : 'Add Item'}
                </button>
            </form>

            <table width='100%' className='mb-10'>
                <thead>
                    <tr className='bg-gray-100 p-1'>
                        <td className='font-bold'>Description</td>
                        <td className='font-bold'>Quantity</td>
                        <td className='font-bold'>Price</td>
                        <td className='font-bold'>Amount</td>
                    </tr>
                </thead>
                {list.map(({ id, description, quantity, price, amount }) => (
                    <React.Fragment key={id}>
                        <tbody>
                            <tr>
                                <td>{description}</td>
                                <td>{quantity}</td>
                                <td>{price}</td>
                                <td className='amount'>{amount}</td>
                                <td>
                                    <button onClick={() => deleteItem(id)}>
                                        <AiOutlineDelete className='text-red-500 font-bold text-xl' />
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => editItem(id)}>
                                        <BiEdit className='text-green-500 font-bold text-xl' />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </React.Fragment>
                ))}
            </table>
            <div>
                <h2 className='flex items-end justify-end text-gray-800 text-4xl font-bold'>
                    CAD {total.toLocaleString()}
                </h2>
            </div>
        </>
    );
}
