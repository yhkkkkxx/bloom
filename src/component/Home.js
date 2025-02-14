import '../styles/HomeStyle.css';
import { useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import Send from './Send';
import { AuthContext, getLocalStorageItem } from './AuthContext';

function Home() {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  let { username, isLogin } = getLocalStorageItem('authState');

  const sendBtnClick = () => {
    navigate('/account/send');
  };

  const takeBtnClick = () => {
    navigate('/');
  };

  const transactionHistoryBtnClick = () => {
    navigate('/account/transaction_history');
  };

  return (
    <div className="container">
      <div style={{ height: '2%' }}></div>
      <div className="row text-start">
        <h2>
          <strong>홈</strong>
        </h2>
        <p>
          <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>해팔이</span>
          <span
            style={{ color: '#495057', fontSize: '1.2em', marginLeft: '5px' }}
          >
            님 안녕하세요!
          </span>
        </p>
      </div>

      <div class="row">
        <div class="card shadow mb-4 rounded-3">
          <div class="card-body">
            <div className="row text-start" style={{ minHeight: '130px' }}>
              <div style={{ marginBottom: '10px' }}></div>
              <h6>
                <strong>입출금</strong>{' '}
                <span style={{ color: '#495057' }}>
                  {' '}
                  | JB 주거래통장 (저축)
                </span>
              </h6>
              <span
                style={{
                  color: 'gray',
                  fontSize: '0.75rem',
                }}
              >
                전북 2921-49-95403033
              </span>
              <div style={{ marginBottom: '10px' }}></div>
              <h4
                style={{
                  cursor: 'pointer',
                }}
                onClick={transactionHistoryBtnClick}
              >
                <strong>3,210,000,000원</strong>
              </h4>
              <div style={{ marginBottom: '10px' }}></div>
              <div className="d-flex justify-content-center gap-2">
                <button
                  className="btn btn-primary"
                  onClick={sendBtnClick}
                  style={{
                    width: '48%',
                  }}
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
              <div style={{ marginBottom: '5px' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: '2%' }}></div>

      <div class="row card shadow mb-4 rounded-3">
        <div class="card-body">
          <div style={{ height: '20px' }}></div>
          <h5 style={{ fontWeight: '900' }}>
            직전에 서버가 터지고, <br />
            제출을 못해서 이렇게나마 전달드립니다.
            <br />
            죄송합니다.
          </h5>
        </div>
        <div>
          <h2>
            <a href="https://sincere-peak-0c7.notion.site/3-19a043325ab180879a80c5d3036c4c83">
              ▶️ 노션 링크 ◀️
            </a>
          </h2>
          <div style={{ height: '20px' }}></div>
        </div>
      </div>

      <div style={{ height: '4%' }}></div>
      <div className="row h-25 ">
        <h5 className="text-start">
          <strong>이벤트</strong>
        </h5>

        <div className="d-flex justify-content-center">
          <img
            className="card shadow"
            style={{ padding: 0, border: 'none', width: '%' }}
            src={`${process.env.PUBLIC_URL}/img/event.png`}
            alt="event"
          />
        </div>

        <div style={{ height: '20px' }}></div>
      </div>
    </div>
  );
}

export default Home;
