import '../styles/RegisterStyle.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Register() {
  const navigate = useNavigate();
  let [userId, setUserId] = useState('');
  let [userPw, setUserPw] = useState('');
  let [isChecked, setIsChecked] = useState(false);
  let [msg, setMsg] = useState('');
  let [checkMsg, setCheckMsg] = useState('');

  let url = 'http://13.125.19.104:8080/api/users';

  let loginOnChange = (e) => setUserId(e.target.value);
  let pwOnChange = (e) => setUserPw(e.target.value);

  let checkDuplicated = () => {
    let id = userId;
    let checkurl =
      'http://13.125.19.104:8080/api/users/checkDuplicated/userId/' + id;

    axios
      .get(checkurl, {})
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          console.log(response.data);
          setCheckMsg('사용 가능한 아이디입니다.');
          setIsChecked(true);
        } else {
          setMsg('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        }
      })
      .catch((err) => {
        console.log(' 실패');
        setCheckMsg('중복된 아이디가 존재합니다.');
        // console.log(err)
      });
  };

  let registerBtnClick = () => {
    let id = userId;
    let pw = userPw;
    console.log(id, pw);

    if (!id && !pw) {
      setMsg('아이디와 비밀번호를 입력해주세요.');
      return;
    } else if (!id) {
      setMsg('아이디를 입력해주세요.');
      return;
    } else if (!isChecked) {
      setMsg('아이디 중복을 확인해주세요.');
      return;
    } else if (!pw) {
      setMsg('비밀번호를 입력해주세요.');
      return;
    }

    const register = (userid, password) => {
      axios
        .post(url, {
          userId: userid,
          password: password,
        })
        .then((response) => {
          console.log(userid, password);
          if (response.status === 200) {
            // const { token, username } = response.data;

            // setLocalStorageItem('authState', {
            //   userid: userid,
            //   username: username,
            //   isLogin: true,
            // });

            // dispatch({
            //   type: 'LOGIN',
            //   value: {
            //     userid: userid,
            //     username: username,
            //     isLogin: true,
            //   },
            // });
            console.log(response.data);
            setMsg('회원가입 성공!');
            setTimeout(() => {
              navigate('/login');
            }, 1000);
          } else {
            console.log('회원가입 실패');
            setMsg('아이디나 비밀번호가 잘못되었습니다.');
          }
        })
        .catch((error) => {
          console.error('회원가입 중 오류 발생:', error);
          setMsg('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        });
    };

    register(id, pw);
  };
  const backBtnClick = () => {
    navigate('/login');
  };

  return (
    <div className="container register-container">
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
            회원가입
          </span>
        </p>
        <div style={{ height: '10%' }}></div>

        <div className="row text-start">
          <p style={{ marginBottom: '5px' }}>
            <span style={{ color: 'gray', fontSize: '1,0em' }}>아이디</span>
          </p>
        </div>
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <input
            type="email"
            className="form-control form-control-user"
            style={{ height: '45px', width: '63%' }}
            id="exampleInputEmail"
            aria-describedby="emailHelp"
            placeholder="아이디 입력"
            onChange={loginOnChange}
            value={userId}
          />
          <button
            className="btn btn-second"
            type="button"
            style={{ height: '45px', width: '35%' }}
            onClick={checkDuplicated}
          >
            중복 확인
          </button>
        </span>
        <div style={{ height: '8%' }}></div>
        <div
          className="login-msg text-start"
          style={{ fontSize: '0.9em', color: '#F65659' }}
        >
          {checkMsg}
        </div>
      </div>

      {/* 
      <div style={{ height: '3%' }}></div>
      <div
        className="check-msg"
        style={{ fontSize: '0.9em', color: '#F65659' }}
      >
        {checkMsg}
      </div> */}
      <div style={{ height: '3%' }}></div>

      <div className="row text-start">
        <p style={{ marginBottom: '5px' }}>
          <span style={{ color: 'gray', fontSize: '1.0em' }}>비밀번호</span>
        </p>
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            justifyContent: 'space-between',
          }}
        >
          <input
            type="password"
            className="form-control form-control-user"
            style={{ height: '45px', width: '100%' }}
            id="exampleInputEmail"
            aria-describedby="emailHelp"
            placeholder="비밀번호 입력"
            onChange={pwOnChange}
            value={userPw}
          />
        </span>
        <div style={{ height: '8%' }}></div>
        <div
          className="login-msg"
          style={{ fontSize: '0.9em', color: '#F65659' }}
        >
          {msg}
        </div>
      </div>
      {/* <div className="row text-start">
        <p style={{ marginBottom: '5px' }}>
          <span style={{ color: 'gray', fontSize: '1.0em' }}>휴대폰 번호</span>
        </p>
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            justifyContent: 'space-between',
          }}
        >
          <input
            type="email"
            className="form-control form-control-user"
            style={{ height: '45px', width: '63%' }}
            id="exampleInputEmail"
            aria-describedby="emailHelp"
            placeholder="아이디 입력"
          />
          <button
            className="btn btn-second"
            type="button"
            style={{ height: '45px', width: '35%' }}
          >
            인증번호 전송
          </button>
        </span>
        <div style={{ height: '10%' }}></div>
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            justifyContent: 'space-between',
          }}
        >
          <input
            type="email"
            className="form-control form-control-user"
            style={{ height: '45px', width: '100%' }}
            id="exampleInputEmail"
            aria-describedby="emailHelp"
            placeholder="아이디 입력"
          />
        </span>
      </div> */}

      <div style={{ height: '10%' }}></div>
      <div className="row">
        <form class="user">
          <div style={{ height: '10%' }}></div>
          <div class="d-grid gap-2">
            <button
              className="btn btn-primary"
              type="button"
              style={{ height: '120%' }}
              onClick={registerBtnClick}
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
