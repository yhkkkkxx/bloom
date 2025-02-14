import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

import {
  BarChart,
  Bar,
  Cell,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from 'recharts';

const SSEComponent = ({ sseUrl, idx }) => {
  const [data, setData] = useState([]);
  const [priceSummary, setPriceSummary] = useState({
    currentPrice: 0,
    gap: 0,
  });
  const [summary, setSummary] = useState({
    currentPrice: 0,
    gap: 0,
    rateOfReturn: 0,
    holdingQuantity: 0,
    evaluationAmount: 0,
    purchaseAmount: 0,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource(sseUrl);

    eventSource.onmessage = (event) => {
      try {
        const parsedData = JSON.parse(event.data);
        setPriceSummary(parsedData.priceSummary);
        setSummary(parsedData.summary);
      } catch (e) {
        setError('데이터 처리 중 오류 발생');
        console.error('데이터 파싱 오류:', e);
      }
    };

    eventSource.onerror = () => {
      setError('서버 연결 오류 발생');
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [sseUrl]);

  if (idx == 0) {
    return (
      <div>
        <p>
          <span style={{ fontSize: '1.8em' }}>
            <strong>{priceSummary.currentPrice.toLocaleString()}원</strong>
          </span>
          &nbsp; &nbsp;
          <span
            style={{
              fontSize: '0.8em',
              color: priceSummary.gap > 0 ? 'red' : 'blue',
            }}
          >
            {priceSummary.gap > 0
              ? `▲ ${priceSummary.gap.toLocaleString()}`
              : `▼ ${Math.abs(priceSummary.gap).toLocaleString()}`}
            원
          </span>
        </p>
      </div>
    );
  } else {
    return (
      <table>
        <tr
          style={{
            borderBottom: '1px solid #ccc',
          }}
        >
          <td
            style={{
              paddingLeft: '15px',
              paddingTop: '10px',
              paddingBottom: '10px',
            }}
            className="text-start"
          >
            수익률
          </td>
          <td
            style={{
              paddingRight: '15px',
              paddingTop: '10px',
              paddingBottom: '10px',
            }}
            className="text-end"
          >
            {summary.rateOfReturn.toLocaleString()}%
          </td>
        </tr>
        <tr
          style={{
            borderBottom: '1px solid #ccc',
          }}
        >
          <td
            style={{
              paddingLeft: '15px',
              paddingTop: '10px',
              paddingBottom: '10px',
            }}
            className="text-start"
          >
            보유 수량
          </td>
          <td
            style={{
              paddingRight: '15px',
              paddingTop: '10px',
              paddingBottom: '10px',
            }}
            className="text-end"
          >
            {summary.holdingQuantity}주
          </td>
        </tr>
        <tr
          style={{
            borderBottom: '1px solid #ccc',
          }}
        >
          <td
            style={{
              paddingLeft: '15px',
              paddingTop: '10px',
              paddingBottom: '10px',
            }}
            className="text-start"
          >
            평가 금액
          </td>
          <td
            style={{
              paddingRight: '15px',
              paddingTop: '10px',
              paddingBottom: '10px',
            }}
            className="text-end"
          >
            <span
              style={{
                fontSize: '0.8em',
                color: summary.gap > 0 ? 'red' : 'blue',
              }}
            >
              {summary.gap > 0
                ? `▲ ${summary.gap.toLocaleString()}`
                : `▼ ${Math.abs(summary.gap).toLocaleString()}`}
              원
            </span>
            &nbsp; &nbsp;
            {summary.evaluationAmount.toLocaleString()}원
          </td>
        </tr>
        <tr>
          <td
            style={{
              paddingLeft: '15px',
              paddingTop: '10px',
              paddingBottom: '10px',
            }}
            className="text-start"
          >
            매입 금액
          </td>
          <td
            style={{
              paddingRight: '15px',
              paddingTop: '10px',
              paddingBottom: '10px',
            }}
            className="text-end"
          >
            {summary.purchaseAmount.toLocaleString()}원
          </td>
        </tr>
      </table>
    );
  }
};

function CompanyDetailPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { company } = location.state || {};
  console.log(company);

  const [sseUrl, setSseUrl] = useState('');
  const [url, setUrl] = useState('');

  const [orderHistory, setOrderHistory] = useState([]);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

  const [profitRate, setProfitRate] = useState(25);
  const [buyPrice, setBuyPrice] = useState(100000);

  useEffect(() => {
    if (company) {
      const userid = 1;
      setSseUrl(
        `http://13.125.19.104:8080/transaction/${userid}/price?companyName=${company.company}`
      );

      setUrl(
        `http://13.125.19.104:8080/transaction/${userid}/filter?companyName=${company.company}`
      );
    }
  }, [company]);

  useEffect(() => {
    if (url) {
      axios
        .get(url)
        .then((response) => {
          setOrderHistory(response.data.transactions);
        })
        .catch((error) => {
          console.error('API 요청 오류:', error);
        });
    }
  }, [url]);

  const backBtnClick = () => {
    navigate('/study/stock_simulation');
  };

  const buyBtnClick = () => {
    navigate('/study/stock_simulation/company/:companyName/buy', {
      state: { company: company },
    });
  };

  const sellBtnClick = () => {
    navigate('/study/stock_simulation/company/:companyName/sell', {
      state: { company: company },
    });
  };

  const parseData = [
    {
      name: '감자주식회사',
      date: '20240201',
      openClose: [15000, 15500],
      highLow: [14800, 15800],
    },
    {
      name: '감자주식회사',
      date: '20240202',
      openClose: [15500, 15700],
      highLow: [15400, 15900],
    },
    {
      name: '감자주식회사',
      date: '20240203',
      openClose: [15700, 16000],
      highLow: [15600, 16100],
    },
    {
      name: '감자주식회사',
      date: '20240204',
      openClose: [16000, 15900], // 감소
      highLow: [15800, 16100],
    },
    {
      name: '감자주식회사',
      date: '20240205',
      openClose: [15900, 16200], // 증가
      highLow: [15850, 16300],
    },
    {
      name: '감자주식회사',
      date: '20240206',
      openClose: [16200, 16100], // 감소
      highLow: [16100, 16300],
    },
    {
      name: '감자주식회사',
      date: '20240207',
      openClose: [16100, 16500], // 증가
      highLow: [16000, 16700],
    },
    {
      name: '감자주식회사',
      date: '20240208',
      openClose: [16500, 16300], // 감소
      highLow: [16400, 16700],
    },
    {
      name: '감자주식회사',
      date: '20240209',
      openClose: [16300, 16800], // 증가
      highLow: [16250, 17000],
    },
    {
      name: '감자주식회사',
      date: '20240210',
      openClose: [16800, 16600], // 감소
      highLow: [16700, 16900],
    },
  ];

  const maxPrice = Math.max.apply(
    null,
    parseData.map((e) => (e ? parseInt(e.highLow[1]) : 0)) // 최고가
  );
  const minPrice = Math.min.apply(
    null,
    parseData.map((e) => (e ? parseInt(e.highLow[0]) : 0)) // 최저가
  );
  const dataNum = parseData.length;
  const maxHigh = Math.max(...parseData.map((item) => item.highLow[1])); // 최고가
  const minLow = Math.min(...parseData.map((item) => item.highLow[0])); // 최저가

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
          <h5 style={{ color: '#495057', marginBottom: '5px' }}>{company}</h5>
          {sseUrl && <SSEComponent sseUrl={sseUrl} idx={0} />}
          {/* <div>
            <p>
              <span style={{ fontSize: '1.8em' }}>
                <strong>{company.price.toLocaleString()}원</strong>
              </span>
              &nbsp; &nbsp;
              <span
                style={{
                  fontSize: '0.8em',
                  color: company.variation > 0 ? 'red' : 'blue',
                }}
              >
                {company.variation > 0
                  ? `▲ ${company.variation}`
                  : `▼ ${Math.abs(company.variation)}`}
                원
              </span>
            </p>
          </div> */}
        </div>

        <div className="row text-start">
          <p style={{ marginBottom: '7px' }}>
            <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>차트</span>
          </p>
        </div>

        <div className="row" style={{ width: '100%' }}>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              barGap={-150 / dataNum}
              width={382}
              height={400}
              data={parseData}
            >
              <XAxis
                type="category"
                dataKey="date"
                style={{ fontSize: '10px' }}
              />
              <YAxis
                style={{ fontSize: '10px' }}
                type="number"
                domain={[
                  minPrice - (maxPrice - minPrice) * 0.1,
                  maxPrice + (maxPrice - minPrice) * 0.1,
                ]}
              />
              <CartesianGrid strokeDasharray="2 2" />
              <Tooltip />
              <Bar dataKey="openClose" fill="#8884d8" barSize={300 / dataNum}>
                {parseData &&
                  parseData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        Number(entry.openClose[0]) > Number(entry.openClose[1])
                          ? '#0048ff'
                          : '#c20404'
                      }
                    />
                  ))}
              </Bar>
              <Bar dataKey="highLow" fill="#8884d8" barSize={40 / dataNum}>
                {parseData &&
                  parseData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        Number(entry.openClose[0]) > Number(entry.openClose[1])
                          ? '#0048ff'
                          : '#c20404'
                      }
                    />
                  ))}
              </Bar>

              <ReferenceLine
                y={maxHigh}
                label="최고가"
                stroke="green"
                strokeDasharray="3 3"
              />
              <ReferenceLine
                y={minLow}
                label="최저가"
                stroke="red"
                strokeDasharray="3 3"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div style={{ height: '5%' }}></div>

        <div className="row text-start">
          <p style={{ marginBottom: '7px' }}>
            <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
              내 주식
            </span>
          </p>
        </div>
        <div className="row">
          {sseUrl && <SSEComponent sseUrl={sseUrl} idx={1} />}
        </div>

        <div style={{ height: '2%' }}></div>

        <div className="d-flex justify-content-center gap-2 mt-2 mb-4">
          <button
            className="btn btn-second"
            style={{ width: '48%', height: '50px' }}
            onClick={buyBtnClick}
          >
            매수하기
          </button>
          &nbsp;
          <button
            className="btn btn-primary"
            style={{ width: '48%', height: '50px' }}
            onClick={sellBtnClick}
          >
            매도하기
          </button>
        </div>

        <div style={{ height: '5%' }}></div>
        <div className="row text-start">
          <p style={{ marginBottom: '7px' }}>
            <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
              해당 종목 주문내역
            </span>
          </p>
        </div>
        <div style={{ height: '2%' }}></div>

        <div className="row">
          <table class="">
            {orderHistory.map((order, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td
                    className="text-start"
                    style={{
                      color: 'gray',
                      fontSize: '10px',
                      paddingLeft: '20px',
                    }}
                  >
                    {order.date}
                  </td>
                  <td
                    className="text-end"
                    style={{
                      color: '',
                      fontSize: '',
                      paddingRight: '20px',
                    }}
                  >
                    <strong>주당 {order.amount.toLocaleString()}원</strong>
                  </td>
                </tr>
                <tr>
                  <td
                    className="text-start"
                    style={{
                      paddingLeft: '20px',
                      paddingBottom: '15px',
                    }}
                  >
                    <strong>매수 {order.quantity}주</strong>
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
                    {(order.amount * order.quantity).toLocaleString()}원
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </table>
        </div>
        <div className="row"></div>

        <div style={{ height: '3%' }}></div>
      </div>
    </div>
  );
}

export default CompanyDetailPage;
