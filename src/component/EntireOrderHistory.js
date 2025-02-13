import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function EntireOrderHistory() {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]); // transactions 기본값을 빈 배열로 설정

  const user = '1';
  let url = `http://13.125.19.104:8080/transaction/${user}/list`;

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data); // 받아온 데이터 확인
        setTransactions(response.data || []); // 데이터를 받아올 때 없으면 빈 배열로 설정
      })
      .catch((error) => {
        console.error('데이터를 가져오는 중 오류가 발생했습니다.', error);
        setTransactions([]);
      });
  };

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
          <table className="">
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
            {Array.isArray(transactions) && transactions.length > 0 ? (
              transactions.map((transaction, index) => (
                <React.Fragment key={index}>
                  {/* <tr>
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
                  </tr> */}
                  <tr>
                    <td
                      className="text-start"
                      style={{
                        paddingLeft: '20px',
                      }}
                    >
                      <strong>{transaction.companyName}</strong>
                    </td>
                    <td
                      className="text-end"
                      style={{
                        paddingRight: '20px',
                      }}
                    >
                      <strong>-{transaction.amount.toLocaleString()}원</strong>
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
                      {transaction.date}
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
                      총액: {transaction.amount * transaction.quantity}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <hr
                        style={{
                          margin: '0 0 10px',
                          border: '0.5px solid #ddd',
                        }}
                      />
                    </td>
                  </tr>
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td colSpan={2} className="text-center">
                  주문 내역이 없습니다.
                </td>
              </tr>
            )}
          </table>
        </div>

        <div style={{ height: '2%' }}></div>
      </div>
    </div>
  );
}

export default EntireOrderHistory;
