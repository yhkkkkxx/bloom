import { useNavigate } from 'react-router-dom';
import React from 'react';

function EntireSymbol() {
  const navigate = useNavigate();

  const stockList = [
    {
      name: '고구마켓 주식회사',
      currentPrice: 35000,
      quantity: 2.5,
      variation: 850,
      volume: 120000,
    },
    {
      name: '토마토탈 주식회사',
      currentPrice: 48200,
      quantity: -1.8,
      variation: -870,
      volume: 95000,
    },
    {
      name: '(주)딸기사세요',
      currentPrice: 27500,
      quantity: 3.2,
      variation: 900,
      volume: 68000,
    },
    {
      name: '감자 주식회사',
      currentPrice: 31000,
      quantity: -0.7,
      variation: -220,
      volume: 54000,
    },
    {
      name: '나주배랑께',
      currentPrice: 22500,
      quantity: 1.5,
      variation: 340,
      volume: 110000,
    },
    {
      name: '배추컴퍼니',
      currentPrice: 29500,
      quantity: -2.0,
      variation: -600,
      volume: 72000,
    },
    {
      name: '양파이낸스',
      currentPrice: 42500,
      quantity: 4.1,
      variation: 1750,
      volume: 130000,
    },
    {
      name: '(주)블루베리굿',
      currentPrice: 52000,
      quantity: -0.3,
      variation: -160,
      volume: 47000,
    },
    {
      name: '무야호 농업회사법인',
      currentPrice: 41000,
      quantity: 2.8,
      variation: 1120,
      volume: 89000,
    },
    {
      name: '감귤로벌 주식회사',
      currentPrice: 38500,
      quantity: -1.2,
      variation: -460,
      volume: 105000,
    },
    {
      name: '수박수 주식회사',
      currentPrice: 60000,
      quantity: 3.5,
      variation: 2100,
      volume: 125000,
    },
    {
      name: '메론소프트 주식회사',
      currentPrice: 48000,
      quantity: 1.9,
      variation: 920,
      volume: 72000,
    },
    {
      name: '체리온 주식회사',
      currentPrice: 26500,
      quantity: -0.5,
      variation: -130,
      volume: 57000,
    },
    {
      name: '파프리카홀딩스',
      currentPrice: 53000,
      quantity: 3.0,
      variation: 1500,
      volume: 95000,
    },
    {
      name: '브로콜리엔터테인먼트',
      currentPrice: 31500,
      quantity: -2.7,
      variation: -860,
      volume: 66000,
    },
    {
      name: '옥수수네트웍스',
      currentPrice: 44000,
      quantity: 2.1,
      variation: 1100,
      volume: 88000,
    },
  ];

  console.log(stockList);

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
              전체 종목
            </span>
          </p>
        </div>
        <div style={{ height: '1%' }}></div>

        <div className="row">
          <table style={{ width: '100%' }}>
            <div className="row p-2">
              <table style={{ width: '100%' }}>
                <tbody>
                  {stockList.map((stock, index) => (
                    <React.Fragment key={index}>
                      <tr style={{ padding: '10px 0' }}>
                        <td
                          className="text-start"
                          style={{ paddingLeft: '20px' }}
                        >
                          {stock.name}
                        </td>
                        <td
                          className="text-end"
                          style={{
                            fontSize: '0.8em',
                            color: stock.variation > 0 ? 'red' : 'blue',
                          }}
                        >
                          {stock.variation > 0 ? '▲' : '▼'}
                          {Math.abs(stock.variation).toLocaleString()}원
                        </td>
                        <td
                          className="text-end"
                          style={{ paddingRight: '20px' }}
                        >
                          <img
                            src={`${process.env.PUBLIC_URL}/img/next.png`}
                            alt="Icon"
                            style={{ width: '15px', height: '15px' }}
                          />
                        </td>
                      </tr>

                      {index !== stockList.length - 1 && (
                        <tr>
                          <td colSpan="3">
                            <hr
                              style={{
                                margin: '10px 0',
                                border: '0.5px solid #ddd',
                              }}
                            />
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </table>
        </div>

        <div style={{ height: '2%' }}></div>
      </div>
    </div>
  );
}

export default EntireSymbol;
