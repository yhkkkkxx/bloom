import React from 'react';
import { useNavigate } from 'react-router-dom';

function EntireOrderHistory() {
  const navigate = useNavigate();
  const transactions = [
    {
      date: '2024-02-01',
      transactions: [
        {
          company: '나주배랑께',
          price: 5000,
          time: '09:15',
          total: 50000,
        },
        {
          company: '(주)딸기사세요',
          price: 10000,
          time: '10:30',
          total: 30000,
        },
      ],
    },
    {
      date: '2024-02-02',
      transactions: [
        {
          company: '감자주식회사',
          price: 15000,
          time: '11:00',
          total: 75000,
        },
        {
          company: '나주배랑께',
          price: 5000,
          time: '12:30',
          total: 25000,
        },
      ],
    },
    {
      date: '2024-02-03',
      transactions: [
        {
          company: '(주)딸기사세요',
          price: 10000,
          time: '13:45',
          total: 50000,
        },
        {
          company: '감자주식회사',
          price: 15000,
          time: '14:20',
          total: 75000,
        },
      ],
    },
    {
      date: '2024-02-04',
      transactions: [
        {
          company: '나주배랑께',
          price: 5000,
          time: '15:00',
          total: 25000,
        },
        {
          company: '(주)딸기사세요',
          price: 10000,
          time: '16:10',
          total: 20000,
        },
      ],
    },
    {
      date: '2024-02-05',
      transactions: [
        {
          company: '감자주식회사',
          price: 15000,
          time: '09:50',
          total: 60000,
        },
        {
          company: '나주배랑께',
          price: 5000,
          time: '10:30',
          total: 50000,
        },
      ],
    },
    {
      date: '2024-02-06',
      transactions: [
        {
          company: '(주)딸기사세요',
          price: 10000,
          time: '11:10',
          total: 30000,
        },
        {
          company: '감자주식회사',
          price: 15000,
          time: '12:00',
          total: 75000,
        },
      ],
    },
  ];

  const backBtnClick = () => {
    navigate('/study/stock_simulation');
  };
  return (
    <div>
      <div className="container">
        <div style={{ height: '1%' }}></div>
        <div className="text-start" style={{ marginLeft: '-2%' }}>
          <button
            style={{ backgroundColor: 'transparent', border: 'none' }}
            onClick={backBtnClick}
          >
            <img
              style={{ width: '20px', height: '20px' }}
              src={`${process.env.PUBLIC_URL}/img/back.png`}
            />
          </button>
        </div>
        <div style={{ height: '2%' }}></div>
        <div className="row text-start">
          <p style={{ marginBottom: '5px' }}>
            <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
              전체 주문내역
            </span>
          </p>
        </div>
        <div style={{ height: '1%' }}></div>

        <div className="row">
          <table class="">
            <tr>
              <td
                colSpan={2}
                className="text-start"
                style={{
                  color: 'gray',
                  paddingLeft: '20px',
                  paddingBottom: '20px',
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
              >
                최신순 ▼
              </td>
            </tr>
            {transactions.map((transaction, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td
                    colSpan={2}
                    className="text-start"
                    style={{
                      color: 'gray',
                      paddingLeft: '20px',
                      paddingBottom: '20px',
                      fontSize: '12px',
                    }}
                  >
                    {transaction.date}
                  </td>
                </tr>
                {transaction.transactions.map((detail, detailIndex) => (
                  <React.Fragment key={detailIndex}>
                    <tr>
                      <td
                        className="text-start"
                        style={{
                          color: '',
                          fontSize: '',
                          paddingLeft: '20px',
                        }}
                      >
                        <strong>{detail.company}</strong>
                      </td>
                      <td
                        className="text-end"
                        style={{
                          color: '',
                          fontSize: '',
                          paddingRight: '20px',
                        }}
                      >
                        <strong>{detail.price.toLocaleString()}원</strong>
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="text-start"
                        style={{
                          color: 'gray',
                          fontSize: '10px',
                          paddingLeft: '20px',
                          paddingBottom: '15px',
                        }}
                      >
                        {detail.time}
                      </td>
                      <td
                        style={{
                          color: 'gray',
                          fontSize: '10px',
                          paddingBottom: '15px',
                          paddingRight: '20px',
                        }}
                        className="text-end"
                      >
                        {detail.total.toLocaleString()}원
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
                <tr>
                  <td colSpan={2}>
                    <hr
                      style={{ margin: '0 0 10px', border: '0.5px solid #ddd' }}
                    />
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </table>
        </div>

        <div style={{ height: '2%' }}></div>
      </div>
    </div>
  );
}

export default EntireOrderHistory;
