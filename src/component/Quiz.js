import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProgressBar, Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/Quiz.css';

function Quiz() {
  const navigate = useNavigate();

  const questions = [
    {
      question:
        '해외주식의 배당금에는 해당 국가의 세금이 원천징수되고, 국내 세금도 추가로 납부해야 한다.',
      options: ['O', 'X'],
      answer: 0, // 'O'가 첫 번째 옵션이라 인덱스 0
    },
    {
      question: '다음 중 ‘복리’의 개념을 가장 잘 설명하는 것은?',
      options: [
        '일정 기간마다 이자율이 감소하는 방식',
        '원금에 대해서만 이자가 붙는 방식',
        '이전 이자에도 추가로 이자가 붙는 방식',
        '투자한 원금이 일정하게 유지되는 방식',
      ],
      answer: 2, // '이전 이자에도 추가로 이자가 붙는 방식' -> 인덱스 2
    },
    { question: '3 + 3 = ?', options: ['5', '6', '7', '8'], answer: 1 },
    { question: '4 + 4 = ?', options: ['6', '7', '8', '9'], answer: 2 },
    { question: '5 + 5 = ?', options: ['9', '10', '11', '12'], answer: 1 },
    { question: '6 + 6 = ?', options: ['10', '11', '12', '13'], answer: 2 },
    { question: '7 + 7 = ?', options: ['12', '13', '14', '15'], answer: 2 },
    { question: '8 + 8 = ?', options: ['14', '15', '16', '17'], answer: 2 },
    { question: '9 + 9 = ?', options: ['16', '17', '18', '19'], answer: 2 },
    {
      question: '10 + 10 = ?',
      options: ['18', '19', '20', '21'],
      answer: 2, // '20' -> 인덱스 2
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // 문자열 대신 인덱스로 설정
  const [score, setScore] = useState(0);

  const handleAnswer = (answerIndex) => {
    if (answerIndex === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedAnswer(answerIndex); // 정답 인덱스로 업데이트
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null); // 다음 문제로 넘어갈 때 선택 초기화
    } else {
      navigate('/study/attendance_check/quiz/result', {
        state: { score: score },
      });
    }
  };

  const backBtnClick = () => {
    navigate('/study/attendance_check');
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

      <Container>
        <Row className="mt-4">
          <Col>
            <ProgressBar
              now={(currentQuestion + 1) * 10}
              className="progress-bar-custom"
              style={{ backgroundColor: '#E0E0E0', height: '10px' }}
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h3 className="text-start">Q. {currentQuestion + 1}</h3>
            <h4 className="text-start">
              {questions[currentQuestion].question}
            </h4>
            <Row
              className="mt-4"
              style={{
                display: 'flex',
                flexDirection:
                  questions[currentQuestion].options.length === 2
                    ? 'row'
                    : 'column',
                justifyContent: 'center', // 버튼을 중앙 정렬
                gap: '10px', // 버튼 간격 추가
              }}
            >
              <Col>
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline-primary"
                    style={{
                      width:
                        questions[currentQuestion].options.length === 2
                          ? '100px'
                          : '100%',
                      height:
                        questions[currentQuestion].options.length === 2
                          ? '100px'
                          : '50px',
                      margin:
                        questions[currentQuestion].options.length === 2
                          ? '0 5px'
                          : '5px 0',
                      backgroundColor:
                        selectedAnswer === index ? '#eaeaff' : 'transparent',
                      borderColor: '#eaeaff',
                      color: selectedAnswer === index ? '#6464f4' : '#6464f4',
                    }}
                    onClick={() => handleAnswer(index)} // 인덱스를 넘겨줌
                  >
                    {option}
                  </Button>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Button
              variant="success"
              onClick={handleNext}
              style={{
                backgroundColor: '#6464f4',
                borderColor: '#6464f4',
                color: 'white',
              }}
            >
              {currentQuestion < questions.length - 1 ? '다음' : '결과 확인'}
            </Button>
          </Col>
        </Row>
      </Container>

      <div style={{ height: '1%' }}></div>

      <div style={{ height: '2%' }}></div>

      <div style={{ height: '2%' }}></div>
    </div>
  );
}

export default Quiz;
