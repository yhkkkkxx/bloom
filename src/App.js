import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';
import Main from './component/Main';
import Send from './component/Send';
import TransactionHistory from './component/TransactionHistory';
import Study from './component/Study';
import AttendanceCheck from './component/AttendanceCheck';
import Quiz from './component/Quiz';
import QuizResult from './component/QuizResult';
import QuizReview from './component/QuizReview';
import StockSimulation from './component/StockSimulation';
import CompanyDetailPage from './component/CompanyDetailPage';
import BuyStock from './component/BuyStock';
import SellStock from './component/SellStock';
import EntireOrderHistory from './component/EntireOrderHistory';
import EntireProfit from './component/EntireProfit';
import PointConversion from './component/PointConversion';
import EntireSymbol from './component/EntireSymbol';
import Jellyfish from './component/Jellyfish';
import MyPage from './component/MyPage';
import { AuthProvider } from './component/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/login/register" element={<Register />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route index element={<Main />} /> */}
            <Route path="/account/send" element={<Send />} />
            <Route
              path="/account/transaction_history"
              element={<TransactionHistory />}
            />
            <Route path="/study" element={<Study />} />
            <Route
              path="/study/attendance_check"
              element={<AttendanceCheck />}
            />
            <Route path="/study/attendance_check/quiz" element={<Quiz />} />
            <Route
              path="/study/attendance_check/quiz/result"
              element={<QuizResult />}
            />
            <Route
              path="/study/attendance_check/quiz/review"
              element={<QuizReview />}
            />
            <Route
              path="/study/stock_simulation"
              element={<StockSimulation />}
            />
            <Route
              path="/study/stock_simulation/company/:companyName"
              element={<CompanyDetailPage />}
            />
            <Route
              path="/study/stock_simulation/company/:companyName/buy"
              element={<BuyStock />}
            />
            <Route
              path="/study/stock_simulation/company/:companyName/sell"
              element={<SellStock />}
            />
            <Route
              path="/study/stock_simulation/entire_order_history"
              element={<EntireOrderHistory />}
            />
            <Route
              path="/study/stock_simulation/entire_profit"
              element={<EntireProfit />}
            />
            <Route
              path="/study/stock_simulation/entire_profit/point_conversion"
              element={<PointConversion />}
            />
            <Route
              path="/study/stock_simulation/entire_symbol"
              element={<EntireSymbol />}
            />
            <Route path="/jellyfish" element={<Jellyfish />} />
            <Route path="/mypage" element={<MyPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
