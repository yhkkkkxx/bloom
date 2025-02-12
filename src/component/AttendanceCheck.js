import { useNavigate } from 'react-router-dom';

function AttendanceCheck() {
  const navigate = useNavigate();

  const results = [
    { date: '2024-02-01', correct: 7 },
    { date: '2024-02-02', correct: 5 },
    { date: '2024-02-03', correct: 9 },
    { date: '2024-02-04', correct: 6 },
    { date: '2024-02-05', correct: 8 },
    { date: '2024-02-06', correct: 8 },
    { date: '2024-02-07', correct: 10 },
    { date: '2024-02-08', correct: 8 },
  ];
  const backBtnClick = () => {
    navigate('/study');
  };

  const reviewBtnClick = () => {
    navigate('/study/attendance_check/quiz/review');
  };

  const quizBtnClick = () => {
    navigate('/study/attendance_check/quiz');
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
      <div className="row text-start">
        <p style={{ marginBottom: '2px' }}>
          <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>오늘도</span>
        </p>
        <p style={{ marginBottom: '5px' }}>
          <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
            공부하러 오셨군요!
          </span>
        </p>
      </div>
      <div className="row text-start">
        <p style={{ marginBottom: '5px' }}>
          <span style={{ fontSize: '0.8em', color: '#495057' }}>
            퀴즈 풀고 출석체크 하세요!
          </span>
        </p>
      </div>
      <div style={{ height: '2%' }}></div>

      <div className="d-flex justify-content-center gap-2 mt-2 mb-5">
        <button
          className="btn btn-second"
          style={{ width: '48%', height: '50px' }}
          onClick={reviewBtnClick}
        >
          복습하기
        </button>
        &nbsp;
        <button
          className="btn btn-primary"
          style={{ width: '48%', height: '50px' }}
          onClick={quizBtnClick}
        >
          학습 시작
        </button>
      </div>

      <div className="row text-start">
        <p style={{ marginBottom: '7px' }}>
          <span style={{ fontSize: '1.3em', fontWeight: 'bold' }}>
            과거 학습 기록
          </span>
        </p>
      </div>

      <div className="d-flex justify-content-center gap-2 mt-2 mb-2">
        <table style={{ width: '100%' }}>
          <tbody>
            {results.map((result, index) => (
              <tr key={index} className="">
                <td className="p-2 text-start">
                  {new Intl.DateTimeFormat('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }).format(new Date(result.date))}
                </td>
                <td className="p-2 text-end">{result.correct}/10</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ height: '1%' }}></div>

      <div style={{ height: '2%' }}></div>

      <div style={{ height: '2%' }}></div>
    </div>
  );
}

export default AttendanceCheck;
