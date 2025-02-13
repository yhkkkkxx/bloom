import '../styles/StudyStyle.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

function MyPage() {
  const navigate = useNavigate();
  let url = 'http://13.125.19.104:8080/api/users/logout';

  const menus = ['공지사항', '고객센터'];

  const backBtnClick = () => {
    navigate('/');
  };

  const logoutBtnClick = () => {
    navigate('/login');

    // axios.post(url, {}, { withCredentials: true }).then((response) => {
    //   console.log(response.status, response.data);
    // });
  };

  const menuBtnClick = (menu) => {
    navigate('/login');

    // axios.post(url, {}, { withCredentials: true }).then((response) => {
    //   console.log(response.status, response.data);
    // });
  };

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
      {/* <img src={`${process.env.PUBLIC_URL}/img/back.png`}/> */}

      <div className="row text-start">
        <p style={{ marginBottom: '5px' }}>
          <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>내 정보</span>
        </p>
      </div>

      <div className="row">
        <div className="d-flex justify-content-start align-items-center mt-4">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            {/* 왼쪽 (이미지 + 해팔이) */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                className="m-2"
                style={{ width: '60px', height: '60px', borderRadius: '50%' }}
                src={`${process.env.PUBLIC_URL}/img/profile.png`}
                alt="해팔이"
              />
              <div style={{ fontSize: '1.2em', marginLeft: '10px' }}>
                <strong>해팔이</strong>
              </div>
            </div>

            {/* 오른쪽 (내 정보 수정 | 로그아웃) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                style={{
                  fontSize: '0.8em',
                  padding: '5px 2px',
                  border: 'none',
                  background: '#ffffff',
                  color: 'gray',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                내 정보 수정
              </button>
              <span style={{ fontSize: '0.8em', color: 'gray' }}>|</span>
              <button
                style={{
                  fontSize: '0.8em',
                  padding: '5px 2px',
                  border: 'none',
                  background: '#ffffff',
                  color: 'gray',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
                onClick={logoutBtnClick}
              >
                로그아웃
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: '4%' }}></div>

      <div
        class="card shadow mb-4 rounded-3"
        style={{ backgroundColor: '#6464f4' }}
      >
        <div class="card-body">
          <div className="text-start align-items" style={{ minHeight: '50px' }}>
            <div style={{ marginBottom: '1px' }}></div>
            <h6 style={{ color: '#ffffff' }}>내 포인트</h6>
            <h4
              style={{
                color: '#ffffff',
              }}
            >
              <strong>3,210,000,000원</strong>
            </h4>
            <div style={{ marginBottom: '2px' }}></div>
          </div>
        </div>
      </div>

      <div class="card shadow mb-3 rounded-3">
        <div class="card-body">
          <div className="row text-start" style={{ minHeight: '130px' }}>
            <div style={{ marginBottom: '10px' }}></div>
            <h6>
              <strong>입출금</strong>{' '}
              <span style={{ color: '#495057' }}> | JB 주거래통장 (저축)</span>
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
            <div style={{ marginBottom: '5px' }}></div>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <table style={{ width: '100%' }}>
          <div className="row p-2">
            <table style={{ width: '100%' }}>
              <tbody>
                {menus.map((menu, index) => (
                  <React.Fragment key={index}>
                    <tr onClick={() => menuBtnClick(menu)}>
                      <td
                        className="text-start p-3"
                        style={{ cursor: 'pointer' }}
                      >
                        {menu}
                      </td>
                    </tr>
                    {index !== menus.length - 1 && (
                      <tr>
                        <td>
                          <hr
                            style={{ margin: '0', border: '0.5px solid #ddd' }}
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
    </div>
  );
}

export default MyPage;
