import '../styles/StudyStyle.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

function MyPage() {
  const navigate = useNavigate();

  const menus = [
    '입출금',
    '금융퀴즈',
    '오답노트',
    '공부하기',
    '모의주식',
    '전체주문내역',
    '전체종목',
    '나의 해파리',
    '로그아웃',
  ];

  const backBtnClick = () => {
    navigate('/');
  };

  const attendanceBtnClick = () => {
    navigate('/study/attendance_check');
  };

  const stockBtnClick = () => {
    navigate('/study/stock_simulation');
  };

  const menuBtnClick = async (menu) => {
    if (menu === '로그아웃') {
      try {
        await axios.post('/api/users/logout');
        localStorage.removeItem('authToken'); // 토큰 삭제
        alert('로그아웃 되었습니다.');
        window.location.href = '/login'; // 로그인 페이지로 이동
      } catch (error) {
        console.error('로그아웃 중 오류 발생:', error);
        alert('로그아웃 실패. 다시 시도해주세요.');
      }
    }
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
          <img
            className="m-2"
            style={{ width: '60px', height: '60px', borderRadius: '50%' }}
            src={`${process.env.PUBLIC_URL}/img/profile.png`}
            alt="해파리"
          />
          <div style={{ marginLeft: '10px' }}>
            <div style={{ fontSize: '1.2em' }} className="text-start">
              <strong>해팔이</strong>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: '2%' }}></div>

      <div className="row">
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
