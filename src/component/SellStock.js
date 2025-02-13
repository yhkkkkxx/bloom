import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function SellStock() {
  const navigate = useNavigate();
  const location = useLocation();

  const { company } = location.state || {};
  const [quantity, setQuantity] = useState('');

  let url = `http://${process.env.REACT_APP_BESERVERURI}/transaction`;

  if (!company) {
    return <p>회사를 찾을 수 없습니다.</p>;
  }
  const backBtnClick = () => {
    navigate('/study/stock_simulation/company/:companyName', {
      state: { company: company },
    });
  };

  const sellBtnClick = () => {
    const quan = Number(quantity);
    const comp = company.company;
    console.log(company.company, quan);
    axios
      .post(url, {
        userId: 1,
        companyName: comp,
        amount: 1000,
        quantity: quan,
        type: '매수',
        date: '2025-02-14',
      })
      .then((response) => {
        console.log(response.data);
        navigate('/study/stock_simulation/company/:companyName', {
          state: { company: company },
        });
      })
      .catch();
  };

  const inputChange = (e) => {
    const value = e.target.value;

    if (value === '') {
      setQuantity('');
      return;
    }

    const parsedValue = parseInt(value, 10);
    setQuantity(parsedValue > 0 ? parsedValue : '');
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
          <p className="text-center" style={{ marginTop: '-35px' }}>
            <span style={{ fontWeight: 'bold' }}>{company.company}</span>
            <br />
            <span style={{ fontSize: '0.8em' }}>
              {company.price.toLocaleString()}원
            </span>
          </p>
          <p className="text-center"></p>
        </div>
        <div style={{ height: '2%' }}></div>
        {/* <img src={`${process.env.PUBLIC_URL}/img/back.png`}/> */}

        <div className="row text-start">
          <p style={{ marginBottom: '5px' }}>
            <span style={{ fontSize: '1em', fontWeight: 'bold' }}>
              판매가격
            </span>
          </p>
          <p style={{ marginBottom: '5px' }}>
            <span style={{ fontSize: '1.8em', fontWeight: 'bold' }}>
              {(quantity * company.price).toLocaleString()}원
            </span>
          </p>
        </div>
        <div style={{ height: '3%' }}></div>
        <div className="row text-start">
          <p style={{ marginBottom: '5px' }}>
            <span style={{ fontSize: '1em', fontWeight: 'bold' }}>수량</span>
          </p>

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
              placeholder="몇 주를 매도할까요?"
              value={quantity}
              onChange={inputChange}
              min="1"
            />
          </div>

          <p style={{ marginBottom: '5px' }}>
            <span style={{ fontSize: '0.8em', color: 'gray' }}>
              최대 000원 판매 가능
            </span>
          </p>
        </div>

        <div style={{ height: '43%' }}></div>
        <div className="d-flex justify-content-center gap-2 mt-2 mb-4">
          <button
            className="btn btn-primary"
            style={{ width: '100%', height: '50px' }}
            onClick={sellBtnClick}
          >
            매도하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default SellStock;
