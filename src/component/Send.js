import { useNavigate } from 'react-router-dom';
import '../styles/SendStyle.css';

function Send() {
  const navigate = useNavigate();

  const backBtnClick = () => {
    navigate('/');
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
            alt="back"
          />
        </button>
      </div>
      <div style={{ height: '2%' }}></div>

      <div className="row text-start">
        <p style={{ marginBottom: '5px' }}>
          <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
            송금하기
          </span>
        </p>
      </div>

      <div className="row">
        <div className="d-flex justify-content-start align-items-center mt-4">
          <img
            className="m-2"
            style={{ width: '60px', height: '60px', borderRadius: '50%' }}
            src={`${process.env.PUBLIC_URL}/img/jbbank.png`}
            alt="은행 로고"
          />
          <div style={{ marginLeft: '10px' }}>
            <div style={{ fontSize: '1.2em' }} className="text-start">
              <strong>해팔이</strong>
            </div>
            <div
              style={{ color: 'gray', fontSize: '0.8em' }}
              className="text-start"
            >
              전북 2921-49-95403033
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: '3%' }}></div>

      <div className="row text-start">
        <p style={{ marginBottom: '7px', marginLeft: '14px' }}>
          <span style={{ fontSize: '1em', fontWeight: 'bold' }}>
            해82님에게
          </span>
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
            placeholder="얼마나 보낼까요?"
          />
        </div>

        <p style={{ marginBottom: '5px' }}>
          <span
            style={{
              color: '#495057',
              fontSize: '0.7em',
              marginLeft: '14px',
            }}
          >
            잔액 3,210,000원
          </span>
        </p>
      </div>

      <div style={{ height: '2%' }}></div>

      <div className="row"></div>
    </div>
  );
}

export default Send;
