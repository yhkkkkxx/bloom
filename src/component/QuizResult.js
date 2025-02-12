import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function QuizResult() {
  const location = useLocation();
  const { score } = location.state || {}; // score를 제대로 받는지 확인
  const navigate = useNavigate();

  const backBtnClick = () => {
    navigate('/study/attendance_check');
  };

  const studyHomeBtnClick = () => {
    navigate('/study');
  };

  const reviewBtnClick = () => {};

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

      <div className="row text-start">
        {score < 5 ? (
          <>
            <p style={{ marginBottom: '5px' }}>
              <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
                오늘은 {score}문제를 맞히셨네요!
              </span>
            </p>
            <p style={{ marginBottom: '5px' }}>
              <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
                노력하면 더 많이 맞힐 수 있어요!
              </span>
            </p>
            <div
              className="d-flex justify-content-center"
              style={{ margin: '30px 0' }}
            >
              <img
                style={{ width: '160px', height: '160px' }}
                src={`${process.env.PUBLIC_URL}/img/fighting.png`} // 격려 이미지
              />
            </div>
          </>
        ) : (
          <>
            <p style={{ marginBottom: '5px' }}>
              <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
                축하합니다!
              </span>
            </p>
            <p style={{ marginBottom: '5px' }}>
              <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
                오늘은 {score}문제를 맞히셨네요!
              </span>
            </p>
            <div
              className="d-flex justify-content-center"
              style={{ margin: '30px 0' }}
            >
              <img
                style={{ width: '160px', height: '160px' }}
                src={`${process.env.PUBLIC_URL}/img/congratulations.png`} // 축하 이미지
              />
            </div>
          </>
        )}
      </div>

      <div className="d-flex justify-content-center gap-2 mt-2 mb-3">
        <button
          className="btn btn-stock"
          style={{ backgroundColor: '#eaeaff', border: 'none' }}
          onClick={studyHomeBtnClick}
        >
          <span className="text-start">&nbsp;공부하기 홈</span>
          <span className="text-end">
            <img
              src={`${process.env.PUBLIC_URL}/img/next.png`}
              alt="Icon"
              style={{ width: '15px', height: '15px' }}
            />
          </span>
        </button>
      </div>
      <div className="d-flex justify-content-center gap-2 mt-2 mb-2">
        <button
          className="btn btn-stock"
          style={{ backgroundColor: '#6464f4' }}
          onClick={reviewBtnClick}
        >
          <span style={{ color: 'white' }} className="text-start">
            &nbsp;복습하러 가기
          </span>
          <span className="text-end">
            <img
              src={`${process.env.PUBLIC_URL}/img/next_white.png`}
              alt="Icon"
              style={{ width: '15px', height: '15px' }}
            />
          </span>
        </button>
      </div>
    </div>
  );
}

export default QuizResult;
