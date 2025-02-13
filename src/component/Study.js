import '../styles/StudyStyle.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Study() {
  const [todayDate, setTodayDate] = useState(new Date().getDate());
  const navigate = useNavigate();

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const monthName = monthNames[currentMonth];

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const daysInMonth = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    daysInMonth.push(null);
  }
  for (let i = 1; i <= lastDateOfMonth; i++) {
    daysInMonth.push(i);
  }
  const getDayClass = (day, row, index) => {
    if (!day) return 'empty';

    const classNames = [];

    // 날짜별 색상 지정
    if (day === todayDate) classNames.push('today');
    else if (day === 1 || day === 4 || day === 5) classNames.push('red');
    else if (day === 2 || day === 3 || (day >= 6 && day <= 10))
      classNames.push('purple');

    // 이전/다음 날짜와 비교하여 둥근 모서리 적용
    if (row) {
      const prevDay = index > 0 ? row[index - 1] : null;
      const nextDay = index < row.length - 1 ? row[index + 1] : null;

      const prevSame = prevDay && getBaseColor(prevDay) === getBaseColor(day);
      const nextSame = nextDay && getBaseColor(nextDay) === getBaseColor(day);

      // 시작일: 왼쪽만 둥글게
      if (!prevSame && nextSame) classNames.push('rounded-left');
      // 끝일: 오른쪽만 둥글게
      if (prevSame && !nextSame) classNames.push('rounded-right');
      // 시작이자 끝인 날짜: 양쪽 다 둥글게
      if (!prevSame && !nextSame) {
        classNames.push('rounded-left');
        classNames.push('rounded-right');
      }
    }

    return classNames.join(' ');
  };

  // 기본 색상 반환 함수 (색상 판별용)
  const getBaseColor = (day) => {
    if (day === todayDate) return 'today';
    if (day === 1 || day === 4 || day === 5) return 'red';
    if (day === 2 || day === 3 || (day >= 6 && day <= 10)) return 'purple';
    return '';
  };

  const backBtnClick = () => {
    navigate('/');
  };

  const attendanceBtnClick = () => {
    navigate('/study/attendance_check');
  };

  const stockBtnClick = () => {
    navigate('/study/stock_simulation');
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
          <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>해팔이</span>
          <span
            style={{ color: '#495057', fontSize: '1.2em', marginLeft: '5px' }}
          >
            님!
          </span>
        </p>
        <h5 style={{ color: '#495057', marginBottom: '20px' }}>
          오늘도 달려볼까요?
        </h5>
      </div>

      <div style={{ height: '2%' }}></div>
      <div class="row">
        <div className="calendar-container">
          <h3 className="text-center" style={{ fontSize: '1.2em' }}>
            {monthName}
          </h3>
          <table className="calendar-table">
            <thead>
              <tr>
                {weekdays.map((weekday, index) => (
                  <th
                    style={{ fontSize: '14px' }}
                    key={index}
                    className="weekday"
                  >
                    {weekday}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: Math.ceil(daysInMonth.length / 7) }).map(
                (_, rowIndex) => {
                  const row = daysInMonth.slice(rowIndex * 7, rowIndex * 7 + 7); // 한 주 단위 배열

                  return (
                    <tr key={rowIndex}>
                      {row.map((day, colIndex) => (
                        <td
                          key={colIndex}
                          className={`day ${getDayClass(day, row, colIndex)}`}
                        >
                          {day || ''}
                        </td>
                      ))}
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-center gap-2 mt-2 mb-5">
          <button
            className="btn btn-second"
            style={{ width: '48%', height: '50px' }}
            onClick={attendanceBtnClick}
          >
            출석 하러가기
          </button>
          &nbsp;
          <button
            className="btn btn-primary"
            style={{ width: '48%', height: '50px' }}
            onClick={stockBtnClick}
          >
            주식 하러가기
          </button>
        </div>

        <div class="card shadow mb-4 rounded-3">
          <div class="card-body">
            <div className="row text-start">
              <div style={{ marginBottom: '3px' }}></div>
              <h6>
                오늘은 <strong>주식 포인트</strong> 받는 날 !
              </h6>
              <span>
                <img
                  src={`${process.env.PUBLIC_URL}/img/calendar.png`}
                  style={{
                    scale: '70%',
                    marginLeft: '-5px',
                    marginTop: '-4px',
                    marginRight: '5px',
                  }}
                />
                매월 {todayDate}일
              </span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: '2%' }}></div>
    </div>
  );
}

export default Study;
