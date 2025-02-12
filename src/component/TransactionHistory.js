import React from 'react';
import { useNavigate } from 'react-router-dom';

function TransactionHistory() {
  const navigate = useNavigate();

  const transactions = [
    {
      store: '스타벅스',
      date: '2025-02-12',
      time: '08:30',
      amount: -4500,
      balance: 3210000,
    },
    {
      store: 'GS25 편의점',
      date: '2025-02-11',
      time: '12:45',
      amount: -7200,
      balance: 3214500,
    },
    {
      store: '교보문고',
      date: '2025-02-10',
      time: '18:20',
      amount: -15300,
      balance: 3221700,
    },
    {
      store: '배달의민족',
      date: '2025-02-09',
      time: '20:10',
      amount: -27000,
      balance: 3237000,
    },
    {
      store: '이마트',
      date: '2025-02-08',
      time: '15:30',
      amount: -48500,
      balance: 3264000,
    },
    {
      store: '카카오택시',
      date: '2025-02-07',
      time: '22:50',
      amount: -8900,
      balance: 3312500,
    },
    {
      store: 'CU 편의점',
      date: '2025-02-06',
      time: '10:15',
      amount: -3500,
      balance: 3321400,
    },
    {
      store: '넷플릭스',
      date: '2025-02-05',
      time: '00:05',
      amount: -13500,
      balance: 3324900,
    },
    {
      store: '맥도날드',
      date: '2025-02-04',
      time: '13:40',
      amount: -8700,
      balance: 3338400,
    },
    {
      store: '토스뱅크 이체',
      date: '2025-02-03',
      time: '09:00',
      amount: -100000,
      balance: 3347100,
    },
  ];

  const backBtnClick = () => {
    navigate('/');
  };
  const sendBtnClick = () => {
    navigate('/account/send');
  };

  const takeBtnClick = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <div style={{ height: '1%' }}></div>
      <div className="row account">
        <div className="text-start" style={{ marginLeft: '-2%' }}>
          <button
            style={{ backgroundColor: 'transparent', border: 'none' }}
            onClick={backBtnClick}
          >
            <img
              style={{ width: '20px', height: '20px' }}
              src={`${process.env.PUBLIC_URL}/img/back.png`}
              alt="back"
            />
          </button>
        </div>

        <div style={{ height: '13.195px' }}></div>

        <div className="row text-start">
          <p style={{ marginBottom: '5px' }}>
            <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
              거래 내역
            </span>
          </p>
        </div>
        <div style={{ height: '4%' }}></div>
        <div
          className="row text-start"
          style={{ minHeight: '130px', cursor: 'pointer' }}
        >
          <div style={{ marginBottom: '10px' }}></div>
          <h6>
            <strong>입출금</strong>{' '}
            <span style={{ color: '#495057' }}> | JB 주거래통장 (저축)</span>
          </h6>
          <span style={{ color: 'gray', fontSize: '0.75rem' }}>
            전북 2921-49-95403033
          </span>
          <div style={{ marginBottom: '10px' }}></div>
          <h4>
            <strong>3,210,000원</strong>
          </h4>
          <div style={{ marginBottom: '10px' }}></div>
          <div className="d-flex justify-content-center gap-2">
            <button
              className="btn btn-primary"
              style={{
                width: '48%',
              }}
              onClick={sendBtnClick}
            >
              보내기
            </button>
            <button
              className="btn btn-second"
              style={{ width: '48%' }}
              onClick={takeBtnClick}
            >
              가져오기
            </button>
          </div>
          <div style={{ marginBottom: '10px' }}></div>
        </div>
      </div>

      <div style={{ height: '1%' }}></div>

      <hr />

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
                    fontSize: '12px',
                  }}
                >
                  {transaction.date}
                </td>
              </tr>
              <tr>
                <td
                  className="text-start"
                  style={{
                    color: '',
                    fontSize: '',
                    paddingLeft: '20px',
                  }}
                >
                  <strong>{transaction.store}</strong>
                </td>
                <td
                  className="text-end"
                  style={{
                    color: '',
                    fontSize: '',
                    paddingRight: '20px',
                  }}
                >
                  <strong>{transaction.amount.toLocaleString()}원</strong>
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
                  {transaction.time}
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
                  잔액 {transaction.balance.toLocaleString()}원
                </td>
              </tr>
            </React.Fragment>
          ))}
        </table>
      </div>

      <div style={{ height: '2%' }}></div>

      <div className="row"></div>
    </div>
  );
}

export default TransactionHistory;
