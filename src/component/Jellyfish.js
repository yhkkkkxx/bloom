import { useNavigate } from 'react-router-dom';

function Jellyfish() {
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
          />
        </button>
      </div>
      <div style={{ height: '2%' }}></div>
      {/* <img src={`${process.env.PUBLIC_URL}/img/back.png`}/> */}

      <div className="row text-start">
        <p style={{ marginBottom: '5px' }}>
          <span
            style={{ color: '#495057', fontSize: '1.2em', marginLeft: '5px' }}
          >
            안녕하세요,
          </span>
          &nbsp;&nbsp;
          <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>해팔이</span>
          <span
            style={{ color: '#495057', fontSize: '1.2em', marginLeft: '5px' }}
          >
            님!
          </span>
        </p>
        <span
          style={{ color: '#495057', fontSize: '1.2em', marginLeft: '5px' }}
        >
          좋은 아침입니다!
        </span>
      </div>

      <div style={{ height: '5%' }}></div>

      <div
        className="row d-flex justify-content-center gap-2 mb-2"
        style={{ marginLeft: '-2%' }}
      >
        <img
          style={{ width: '300px', height: '300px' }}
          src={`${process.env.PUBLIC_URL}/img/jellyfish.png`}
        />
      </div>
      <div class="row"></div>

      <div style={{ height: '2%' }}></div>
    </div>
  );
}

export default Jellyfish;
