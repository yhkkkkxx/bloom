import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';

function PointConversion() {
  const navigate = useNavigate();
  const [point, setPoint] = useState('');

  const backBtnClick = () => {
    navigate('/study/stock_simulation/entire_profit');
  };

  const conversionBtnClick = () => {
    navigate('/study/stock_simulation/entire_profit/point_conversion');
  };

  const inputChange = (e) => {
    const value = e.target.value;

    if (value === '') {
      setPoint('');
      return;
    }

    const parsedValue = parseInt(value, 10);
    setPoint(parsedValue > 0 ? parsedValue : '');
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
              포인트로 바꾸고
            </span>
          </p>
          <p style={{ marginBottom: '5px' }}>
            <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
              아바타를 꾸며보세요!
            </span>
          </p>
        </div>
        <div style={{ height: '1%' }}></div>
        <div>
          <img
            style={{ width: '50%' }}
            src={`${process.env.PUBLIC_URL}/img/coin.png`}
          />
        </div>
        <div style={{ height: '4%' }}></div>

        <div className="row text-start">
          <p style={{ marginBottom: '5px' }}>
            <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
              포인트
            </span>
          </p>
        </div>

        <div>
          <input
            type="number"
            className="form-control"
            style={{
              fontSize: '1.8em',
              width: '100%',
              borderRadius: '5px',
              border: 'none',
              outline: 'none',
            }}
            placeholder="몇 포인트로 전환할까요?"
            value={point}
            onChange={inputChange}
            min="1"
          />
        </div>
        <div className="row text-start">
          <p style={{ marginBottom: '5px' }}>
            <span style={{ fontSize: '0.8em', color: 'gray' }}>
              최대 000000원 전환 가능
            </span>
          </p>
        </div>

        <div className="d-flex justify-content-center gap-2 mt-2 mb-4">
          <button
            className="btn btn-primary"
            style={{ width: '100%', height: '50px' }}
            onClick={conversionBtnClick}
          >
            전환하기
          </button>
        </div>

        <div style={{ height: '2%' }}></div>
      </div>
    </div>
  );
}

export default PointConversion;
