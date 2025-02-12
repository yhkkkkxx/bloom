import '../styles/NavigationBarStyle.css';
import { useLocation } from 'react-router-dom';

function NavigationBar() {
  const location = useLocation();

  return (
    <div className="navigation-bar">
      <ul className="nav nav-pills nav-justified">
        {[
          { name: '홈', path: '/' },
          { name: '공부하기', path: '/study' },
          { name: '내 해파리', path: '/jellyfish' },
          { name: 'MY', path: '/mypage' },
        ].map((tab, index) => (
          <li className="nav-item" key={index}>
            <a
              className={`nav-link ${
                (tab.path !== '/' && location.pathname.startsWith(tab.path)) ||
                (tab.path === '/' && location.pathname === '/') ||
                (tab.path === '/' && location.pathname.startsWith('/account/')) // account/로 시작하는 경우도 홈으로 간주
                  ? 'active'
                  : ''
              }`}
              href={tab.path}
            >
              {tab.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavigationBar;
