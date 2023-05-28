import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Banner from './components/Banner';
import Home from './pages/home/Home';
import Reservation from './pages/service/Reservation';
import Introuction from './pages/introduction/Introduction';
import OrderCompletePage from './pages/service/OrderCompletePage';
import Footer from './components/Footer';
import NoPage from './components/NoPage';
import Login from './pages/login/Login';
import OrderList from './pages/service/OrderList';


function App() {
  return (
    <BrowserRouter>
      <div style={{ position: "relative", minHeight: "450vh" }}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={[<Login />]} />
          <Route path="home" element={[<Banner />, <Home />]} />
          <Route path="service" element={[<Banner />,<Reservation />]} />
          <Route path="introduction" element={[<Banner />, <Introuction />]}/>
          <Route path="result" element={[<Banner />, <OrderCompletePage />]}/>
          <Route path="noResult" element={[<Banner />, <NoPage />]}/>
          <Route path="orderlist" element={[<Banner />,<OrderList />]} />
        </ Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
