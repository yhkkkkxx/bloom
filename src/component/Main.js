import '../styles/HomeStyle.css';
import { useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import Send from './Send';
import { AuthContext, getLocalStorageItem } from './AuthContext';
import '../styles/MainStyle.css';

function Main() {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  let { username, isLogin } = getLocalStorageItem('authState');

  const sendBtnClick = () => {
    navigate('/account/send');
  };

  const takeBtnClick = () => {
    navigate('/');
  };

  const backBtnClick = () => {
    navigate('/study');
  };
  const transactionHistoryBtnClick = () => {
    navigate('/account/transaction_history');
  };
  return (
    <div className="container">
      <div class="bg_color"></div>
      <div style={{ height: '2%' }}></div>

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
        <div class="top-margin"></div>
        <p class="Name">
          <span style={{ color: 'black', fontSize: '2em', fontWeight: 'bold' }}>
            Hapariri
          </span>
        </p>

        <div style={{ height: '100px' }}></div>
        <div class="hapari row">
          <video width="640" height="360" muted autoplay playsinline loop>
            <source
              src={`${process.env.PUBLIC_URL}/video/hapari.mp4`}
              type="video/mp4"
            />
          </video>
        </div>

        <div class="progress-bar"></div>

        <div class="stock" style={{ fontSize: '1.1em', fontWeight: 'bold' }}>
          <p>주식 하러가기</p>
          <img src={`${process.env.PUBLIC_URL}/img/stock_icon.png`}></img>
          <img src={`${process.env.PUBLIC_URL}/img/next.png`}></img>
        </div>
        <div class="study" style={{ fontSize: '1.1em', fontWeight: 'bold' }}>
          <p>공부 하러가기</p>
          <img src={`${process.env.PUBLIC_URL}/img/study.png`}></img>
          <img src={`${process.env.PUBLIC_URL}/img/next.png`}></img>
        </div>
        <div class="note" style={{ fontSize: '1.1em', fontWeight: 'bold' }}>
          <p>오답노트</p>
          <img src={`${process.env.PUBLIC_URL}/img/study.png`} />
          <img src={`${process.env.PUBLIC_URL}/img/next.png`}></img>
        </div>
      </div>

      <div class="row"></div>
      <div className="d-flex justify-content-center">
        <div style={{ height: '20px' }}></div>
      </div>
    </div>
  );
}

export default Main;
