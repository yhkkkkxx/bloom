import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';

function QuizReview() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null); // 클릭된 항목의 인덱스를 관리

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

  const toggleReview = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
          <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
            복습하면서
          </span>
        </p>
        <p style={{ marginBottom: '5px' }}>
          <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
            실력이 쑥쑥 !
          </span>
        </p>
      </div>

      <div className="d-flex justify-content-center gap-2 mt-2 mb-2">
        <table style={{ width: '100%' }}>
          <tbody>
            {results.map((result, index) => (
              <React.Fragment key={index}>
                <tr
                  style={{ cursor: 'pointer' }}
                  onClick={() => toggleReview(index)}
                  className=""
                >
                  <td className="p-2 text-start">
                    {new Intl.DateTimeFormat('ko-KR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    }).format(new Date(result.date))}
                  </td>
                  <td className="p-2 text-end">{result.correct}/10</td>
                </tr>
                {openIndex === index && (
                  <>
                    <tr>
                      <td colSpan={2} className="p-2" style={{ width: '100%' }}>
                        <div
                          className="text-start m-0 p-3"
                          style={{
                            padding: '10px',
                            backgroundColor: '#f0f0f0',
                            borderRadius: '5px',
                          }}
                        >
                          기업이 생산하는 모든 제품의 가격이 상승하면, 해당
                          기업의 매출도 반드시 증가한다.
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="p-2" style={{ width: '100%' }}>
                        <div
                          className="text-start m-0 p-3"
                          style={{
                            padding: '10px',
                            backgroundColor: '#f0f0f0',
                            borderRadius: '5px',
                          }}
                        >
                          인플레이션(Inflation)이 발생했을 때 예상되는 경제적
                          결과로 가장 적절한 것은?
                        </div>
                      </td>
                    </tr>
                  </>
                )}
              </React.Fragment>
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

export default QuizReview;
