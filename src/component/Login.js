import { useNavigate } from 'react-router-dom';
import '../styles/LoginStyle.css';
import { useContext, useState } from 'react';
import {
  AuthContext,
  setLocalStorageItem,
  getLocalStorageItem,
} from './AuthContext';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  let [userId, setUserId] = useState('');
  let [userPw, setUserPw] = useState('');
  let [msg, setMsg] = useState('');
  let { username, isLogin } = getLocalStorageItem('authState');

  let loginOnChange = (e) => setUserId(e.target.value);
  let pwOnChange = (e) => setUserPw(e.target.value);

  let url = `https://13.125.19.104:8080/api/users/login`;
  // 'https://13.125.19.104:8080/api/users/login';

  // axios.defaults.withCredentials = true; // withCredentials 전역 설정

  let loginBtnClick = () => {
    let id = userId;
    let pw = userPw;
    console.log(id, pw);

    if (!id || !pw) {
      setMsg('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }
    // setMsg('로그인 성공!');
    // setTimeout(() => {
    //   navigate('/');
    // }, 1000);

    const login = (userid, password) => {
      axios
        .post(
          url,
          {
            userId: userid,
            password: password,
          }
          // { withCredentials: true }
        )
        .then((response) => {
          if (response.status === 200) {
            const { username } = response.data;
            console.log(response.data);
            console.log(username);

            setLocalStorageItem('authState', {
              userid: userid,
              username: username,
              isLogin: true,
            });

            dispatch({
              type: 'LOGIN',
              value: {
                userid: userid,
                username: username,
                isLogin: true,
              },
            });

            setMsg('로그인 성공!');
            setTimeout(() => {
              navigate('/');
            }, 1000);
          } else {
            console.log('로그인 실패');
            setMsg('아이디나 비밀번호가 잘못되었습니다.');
          }
        })
        .catch((error) => {
          console.error('로그인 중 오류 발생:', error);
          setMsg('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        });
    };

    login(id, pw);
  };

  const registerBtnClick = () => {
    navigate('/login/register');
  };

  return (
    <div className="container login-container">
      <div style={{ height: '15%' }}></div>
      <div className="row text-start">
        <h1>
          <strong style={{ color: '#6464f4', fontWeight: '900' }}>BlooM</strong>
        </h1>
        <h1>
          <strong>블룸으로 시작하는</strong>
        </h1>
        <h1>
          <strong>재미있는 경제공부!</strong>
        </h1>
        <div style={{ color: 'gray' }}>
          지방 은행 계좌 연동으로 함께 시작해보세요!
        </div>
      </div>
      <div style={{ height: '25%' }}></div>
      <div className="row h-25 ">
        <form class="user">
          <div class="form-group">
            <input
              type="email"
              class="form-control form-control-user"
              style={{ height: '45px' }}
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              placeholder="아이디 입력"
              onChange={loginOnChange}
              value={userId}
            />
          </div>
          <div style={{ height: '10%' }}></div>
          <div class="form-group">
            <input
              type="password"
              class="form-control form-control-user"
              style={{ height: '45px' }}
              id="exampleInputPassword"
              placeholder="비밀번호 입력"
              onChange={pwOnChange}
              value={userPw}
            />
          </div>
          <div style={{ height: '10%' }}></div>
          <div class="d-grid gap-2">
            <button
              className="btn btn-primary"
              type="button"
              style={{ height: '120%' }}
              onClick={loginBtnClick}
            >
              로그인
            </button>
          </div>

          <div style={{ height: '8%' }}></div>
          <div
            className="login-msg"
            style={{ fontSize: '0.9em', color: '#F65659' }}
          >
            {msg}
          </div>
          <div style={{ height: '10%' }}></div>
          <p>
            <span style={{ color: '#495057', fontSize: '0.8em' }}>
              블룸이 처음이신가요?
            </span>
            &nbsp;
            <span
              style={{
                color: '#495057',
                fontSize: '0.9em',
                marginLeft: '5px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
              onClick={registerBtnClick}
            >
              회원가입
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
