import '../styles/StockSimulation.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

// const SSEComponent = ({ sseUrl, handleCompanyClick }) => {
//   const [userName, setUserName] = useState('');
//   const [availableCash, setAvailableCash] = useState(0);
//   const [totalStockValue, setTotalStockValue] = useState(0);
//   const [stocks, setStocks] = useState([]);

//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const eventSource = new EventSource(sseUrl);

//     eventSource.onmessage = (event) => {
//       try {
//         const parsedData = JSON.parse(event.data);
//         setUserName(parsedData.userName);
//         setAvailableCash(parsedData.availableCash);
//         setTotalStockValue(parsedData.totalStockValue);
//         setStocks(parsedData.stocks);
//       } catch (e) {
//         setError('데이터 처리 중 오류 발생');
//         console.error('데이터 파싱 오류:', e);
//       }
//     };

//     eventSource.onerror = () => {
//       setError('서버 연결 오류 발생');
//       eventSource.close();
//     };

//     return () => {
//       eventSource.close();
//     };
//   }, [sseUrl]);

//   return (
//     <>
//       {stocks.map((stock, index) => (
//         <React.Fragment key={index}>
//           <tr>
//             <td
//               className="text-start"
//               style={{
//                 color: '',
//                 fontSize: '',
//                 paddingLeft: '20px',
//                 paddingTop: '10px',
//                 cursor: 'pointer',
//               }}
//               onClick={() => handleCompanyClick(stock.company)}
//             >
//               <strong>{stock.company}</strong>
//             </td>
//             <td
//               className="text-end"
//               style={{
//                 color: '',
//                 fontSize: '',
//                 paddingRight: '20px',
//                 paddingTop: '10px',
//               }}
//             >
//               <strong>{stock.price.toLocaleString()}원</strong>
//             </td>
//           </tr>
//           <tr>
//             <td
//               className="text-start"
//               style={{
//                 color: '',
//                 fontSize: '10px',
//                 paddingLeft: '20px',
//                 paddingBottom: '5px',
//               }}
//             >
//               {stock.shares}주
//             </td>

//             <td
//               className="text-end"
//               style={{
//                 color: stock.variation > 0 ? 'red' : 'blue',
//                 fontSize: '10px',
//                 paddingRight: '20px',
//                 paddingBottom: '5px',
//               }}
//             >
//               {stock.variation > 0 ? '▲' : '▼'}
//               {Math.abs(stock.variation).toLocaleString()}원
//             </td>
//           </tr>
//         </React.Fragment>
//       ))}
//     </>
//   );
// };

function StockSimulation() {
  const navigate = useNavigate();
  const [myPoint, setMyPoint] = useState(10000000);
  const [myStock, setMyStock] = useState(500000);
  const [sseUrl, setSseUrl] = useState('');

  const stocks = [
    { company: '감자 주식회사', shares: 100, price: 120000, variation: 100 },
    { company: '(주)딸기사세요', shares: 20, price: 223040, variation: 500 },
    { company: '나주배랑께', shares: 10, price: 13013, variation: -800 },
  ];

  useEffect(() => {
    const userid = 1;
    setSseUrl(`http://13.125.19.104:8080/portfolio/stream?userId=${userid}`);
  }, []);

  const backBtnClick = () => {
    navigate('/study');
  };

  const handleCompanyClick = (companyName) => {
    const selectedStock = stocks.find((stock) => stock.company === companyName);

    navigate(`/study/stock_simulation/company/${companyName}`, {
      state: { company: selectedStock },
    });
  };

  const entireOrderHistoryBtnClick = () => {
    navigate('/study/stock_simulation/entire_order_history');
  };

  const entireProfitBtnClick = () => {
    navigate('/study/stock_simulation/entire_profit');
  };

  const entireSymbolBtnClick = () => {
    navigate('/study/stock_simulation/entire_symbol');
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
              해팔이
            </span>
            <span
              style={{ color: '#495057', fontSize: '1.2em', marginLeft: '5px' }}
            >
              님의
            </span>
          </p>
          <h5 style={{ color: '#495057', marginBottom: '20px' }}>
            주식 상황입니다!
          </h5>
        </div>
        <div style={{ height: '1%' }}></div>

        <div className="row">
          <table class="" style={{ marginLeft: '20px', marginRight: '20px' }}>
            <tr>
              <td
                className="text-start"
                style={{ color: 'gray', fontSize: '20px' }}
              >
                내 포인트
              </td>
              <td
                className="text-start"
                style={{ color: 'gray', fontSize: '20px' }}
              >
                내 보유 주식
              </td>
            </tr>
            <tr>
              <td className="text-start" style={{ fontSize: '25px' }}>
                <strong>{myPoint.toLocaleString()}원</strong>
              </td>
              <td className="text-start" style={{ fontSize: '25px' }}>
                <strong>{myStock.toLocaleString()}원</strong>
              </td>
            </tr>
          </table>
        </div>


        <div style={{ height: '2%' }}></div>  

        <div
          class="card mb-4 rounded-3"
          style={{ backgroundColor: '#eaeaff', border: 'none' }}
        >
          <div class="card-body">
            <div className="row">
              <table class="">
                {/* {sseUrl && <SSEComponent sseUrl={sseUrl} handleCompanyClick={handleCompanyClick} />} */}

                {/* {stocks.map((stock, index) => (
                  <React.Fragment key={index}>
                    <tr>
                      <td
                        className="text-start"
                        style={{
                          color: '',
                          fontSize: '',
                          paddingLeft: '20px',
                          paddingTop: '10px',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleCompanyClick(stock.company)}
                      >
                        <strong>{stock.company}</strong>
                      </td>
                      <td
                        className="text-end"
                        style={{
                          color: '',
                          fontSize: '',
                          paddingRight: '20px',
                          paddingTop: '10px',
                        }}
                      >
                        <strong>{stock.price.toLocaleString()}원</strong>
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="text-start"
                        style={{
                          color: '',
                          fontSize: '10px',
                          paddingLeft: '20px',
                          paddingBottom: '5px',
                        }}
                      >
                        {stock.shares}주
                      </td>

                      <td
                        className="text-end"
                        style={{
                          color: stock.variation > 0 ? 'red' : 'blue',
                          fontSize: '10px',
                          paddingRight: '20px',
                          paddingBottom: '5px',
                        }}
                      >
                        {stock.variation > 0 ? '▲' : '▼'}
                        {Math.abs(stock.variation).toLocaleString()}원
                      </td>
                    </tr>
                  </React.Fragment>
                ))} */}
              </table>
            </div>
          </div>
        </div>

        <div class="row">
          <div className="d-flex justify-content-center gap-2 mb-2">
            <button
              className="btn btn-stock"
              onClick={entireOrderHistoryBtnClick}
            >
              <span className="text-start">&nbsp;전체 주문내역</span>
              <span className="text-end">
                <img
                  src={`${process.env.PUBLIC_URL}/img/next.png`}
                  alt="Icon"
                  style={{ width: '15px', height: '15px' }}
                />
              </span>
            </button>
          </div>
          <div className="d-flex justify-content-center gap-2 mt-2 mb-2">
            <button className="btn btn-stock" onClick={entireProfitBtnClick}>
              <span className="text-start">&nbsp;전체 판매수익</span>
              <span className="text-end">
                <img
                  src={`${process.env.PUBLIC_URL}/img/next.png`}
                  alt="Icon"
                  style={{ width: '15px', height: '15px' }}
                />
              </span>
            </button>
          </div>
          <div className="d-flex justify-content-center gap-2 mt-2 mb-2">
            <button className="btn btn-stock" onClick={entireSymbolBtnClick}>
              <span className="text-start">&nbsp;전체 종목</span>
              <span className="text-end">
                <img
                  src={`${process.env.PUBLIC_URL}/img/next.png`}
                  alt="Icon"
                  style={{ width: '15px', height: '15px' }}
                />
              </span>
            </button>
          </div>
        </div>

        <div style={{ height: '2%' }}></div>
      </div>
    </div>
  );
}

export default StockSimulation;
