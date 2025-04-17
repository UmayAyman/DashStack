import React from 'react';
import './Table.css';

const Table = () => {
    const data = [
        {
            product: 'Apple Watch',
            location: '6096 Marjolaine Landing',
            dateTime: '12.09.2019 - 12.53 PM',
            piece: '423',
            amount: '$34,295',
            status: 'Delivered',
            image: 'https://i5.walmartimages.com/asr/7f86fa55-1d8b-4b0c-a6df-1199011a3989.249dc97b3520b1afa88d404566d069b9.jpeg',
        },
        {
            product: 'Samsung Galaxy Buds',
            location: '1352 Sunset Drive',
            dateTime: '05.01.2020 - 11.15 AM',
            piece: '123',
            amount: '$5,499',
            status: 'Delivered',
            image: 'https://images-na.ssl-images-amazon.com/images/I/61zW8yc4hTL.jpg',
        },
        {
            product: 'MacBook Pro',
            location: '7847 Innovation Avenue',
            dateTime: '20.03.2021 - 03.30 PM',
            piece: '34',
            amount: '$87,999',
            status: 'Delivered',
            image: 'https://cdn.shopify.com/s/files/1/0045/4092/4007/products/O1gVOILSjuaT3iHL_71372a53-51b4-4699-8f01-41a7b936730e.jpg?v=1667258584',
        },
        {
            product: 'iPhone 14',
            location: '90 Wall Street',
            dateTime: '15.07.2022 - 09.45 AM',
            piece: '78',
            amount: '$74,999',
            status: 'Delivered',
            image: 'https://9to5mac.com/wp-content/uploads/sites/6/2022/09/Apple-iPhone-14-iPhone-14-Plus-2up-blue-220907_inline.jpg.medium_2x.jpg?resize=500',
        },
        {
            product: 'Sony WH-1000XM5',
            location: '550 Lakeview Road',
            dateTime: '02.02.2023 - 04.10 PM',
            piece: '51',
            amount: '$28,399',
            status: 'Delivered',
            image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505727_sd.jpg',
        },
    ];

    return (
        <div className="deal-details-container">
            <div className="deal-details-header">
                <h2 style={{ fontWeight: 'bold', fontSize: '18px', marginLeft: '25px' }}>Deals Details</h2>
                <select className="month-selector" style={{ padding: '5px 10px', borderRadius: '5px', color: 'grey', height: '30px', border: '0.25px solid #ccc', marginRight: '27px' }}>
                    <option>October</option>
                </select>
            </div>
            <table className="deals-table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Location</th>
                        <th>Date - Time</th>
                        <th>Piece</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td className="product-cell">
                                <img src={row.image} alt={row.product} />
                                <span>{row.product}</span>
                            </td>
                            <td>{row.location}</td>
                            <td>{row.dateTime}</td>
                            <td>{row.piece}</td>
                            <td>{row.amount}</td>
                            <td>
                                <span className="status-delivered">{row.status}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
