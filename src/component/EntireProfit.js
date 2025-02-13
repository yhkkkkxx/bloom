import { useNavigate } from 'react-router-dom';
import React from 'react';

function EntireProfit() {
  const navigate = useNavigate();

  const transactions = [
    {
      date: '2025-02-10',
      transactions: [
        { company: '나주배랑께', amount: 3, price: 15000, time: '10:30' },
        { company: '(주)딸기사세요', amount: 2, price: 22000, time: '14:15' },
      ],
    },
    {
      date: '2025-02-11',
      transactions: [
        { company: '감자주식회사', amount: 5, price: 12000, time: '09:20' },
        { company: '나주배랑께', amount: 4, price: 18000, time: '11:45' },
      ],
    },
    {
      date: '2025-02-12',
      transactions: [
        { company: '(주)딸기사세요', amount: 3, price: 24000, time: '13:00' },
        { company: '감자주식회사', amount: 1, price: 11000, time: '16:40' },
      ],
    },
    {
      date: '2025-02-13',
      transactions: [
        { company: '나주배랑께', amount: 6, price: 17000, time: '08:50' },
        { company: '(주)딸기사세요', amount: 4, price: 23000, time: '12:30' },
      ],
    },
    {
      date: '2025-02-14',
      transactions: [
        { company: '감자주식회사', amount: 2, price: 11500, time: '10:10' },
        { company: '나주배랑께', amount: 3, price: 16000, time: '14:50' },
      ],
    },
  ];

  transactions.forEach((entry) => {
    entry.transactions.forEach((transaction) => {
      transaction.totalPrice = transaction.amount * transaction.price;
    });
  });

  const backBtnClick = () => {
    navigate('/study/stock_simulation');
  };

  const pointConversionBtnClick = () => {
    navigate('/study/stock_simulation/entire_profit/point_conversion');
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
              전체 판매수익
            </span>
          </p>
          <p style={{ marginBottom: '5px' }}>
            <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
              169,500원
            </span>
          </p>
        </div>
        <div style={{ height: '1%' }}></div>

        <div className="d-flex justify-content-center gap-2 mt-2 mb-4">
          <button
            className="btn btn-primary"
            style={{ width: '100%', height: '50px' }}
            onClick={pointConversionBtnClick}
          >
            포인트 전환
          </button>
        </div>

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
                        className="text-start"
                        style={{
                          color: '',
                          fontSize: '',
                          paddingLeft: '20px',
                        }}
                      >
                        <strong>{detail.amount}주</strong>
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
                      <td colSpan={2}
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
                        {detail.totalPrice.toLocaleString()}원
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

export default EntireProfit;
