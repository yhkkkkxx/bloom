import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react';

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

const SSEComponent = ({ url }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource(url);

    eventSource.onmessage = (event) => {
      try {
        const parsedData = JSON.parse(event.data);
        setData((prevData) => [...prevData, parsedData]);
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
  }, [url]);

  console.log(data);
};

function CompanyDetailPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { company } = location.state || {};

  const [url, setUrl] = useState('');
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

  const [profitRate, setProfitRate] = useState(25);
  const [buyPrice, setBuyPrice] = useState(100000);

  useEffect(() => {
    if (company) {
      const userid = 1;
      setUrl(
        `http://${process.env.REACT_APP_BESERVERURI}/transaction/${userid}/filter?companyName=${company.company}`
      );
    }
  }, [company]);

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

  const orderHistory = [
    {
      date: '2025-02-12',
      quantity: 10,
      pricePerShare: 75000,
      totalPrice: 750000,
    },
    {
      date: '2025-02-11',
      quantity: 5,
      pricePerShare: 76000,
      totalPrice: 380000,
    },
    {
      date: '2025-02-10',
      quantity: 8,
      pricePerShare: 75500,
      totalPrice: 604000,
    },
    {
      date: '2025-02-09',
      quantity: 12,
      pricePerShare: 77000,
      totalPrice: 924000,
    },
    {
      date: '2025-02-08',
      quantity: 7,
      pricePerShare: 76500,
      totalPrice: 535500,
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
          <h5 style={{ color: '#495057', marginBottom: '5px' }}>
            {company.company}
          </h5>
          {url && <SSEComponent url={url} />}

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
        </div>

        <div className="row text-start">
          <p style={{ marginBottom: '7px' }}>
            <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>차트</span>
          </p>
        </div>

        <h5>{company?.company}</h5>
        {url && <SSEComponent url={url} />}

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
                {profitRate}%
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
                {company.shares}주
              </td>
            </tr>
            <tr
              style={{
                borderBottom: '1px solid #ccc', // 행 사이에 구분선 추가
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
                    color: company.variation > 0 ? 'red' : 'blue',
                  }}
                >
                  {company.variation > 0
                    ? `▲ ${company.variation}`
                    : `▼ ${Math.abs(company.variation)}`}
                  원
                </span>
                &nbsp; &nbsp;
                {company.price.toLocaleString()}원
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
                {buyPrice.toLocaleString()}원
              </td>
            </tr>
          </table>
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
            {orderHistory.map((orderHistory, index) => (
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
                    {orderHistory.date}
                  </td>
                  <td
                    className="text-end"
                    style={{
                      color: '',
                      fontSize: '',
                      paddingRight: '20px',
                    }}
                  >
                    <strong>
                      주당 {orderHistory.pricePerShare.toLocaleString()}원
                    </strong>
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
                    <strong>매수 {orderHistory.quantity}주</strong>
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
                    {orderHistory.totalPrice.toLocaleString()}원
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
