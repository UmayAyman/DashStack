import '@fortawesome/fontawesome-free/css/all.min.css';
import { useDispatch } from 'react-redux';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Card from './Components/Cards';
import SalesChart from './Components/Chart';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Table from './Components/Table';
import User from './User/Info';

const AppContent = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <>
      {location.pathname !== '/User' && <Navbar />}

      <div className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Sidebar />
                <h1 className="dashboard-heading">Dashboard</h1>
                <div className="cards">
                  <Card title="Total Users" description="40,689" type="user" percentage="8.5%" paragraph="Up from yesterday" showGraph={true} graphColor="green"/>
                  <Card title="Total Orders" description="10,293" type="order" paragraph="Up from past week" percentage="1.3%" showGraph={true} graphColor="green" />
                  <Card title="Total Sales" description="$89,000" type="sales" percentage="4.3%" iconColor="red" paragraph="Down from yesterday" showDecreaseIcon={true} decreaseColor="red" />
                  <Card title="Total Pending" description="2040" type="pending"  paragraph="Up from yesterday" percentage="1.8%"  showGraph={true} graphColor="green" />
                </div>
                <SalesChart />
                <Table />
              </>
            }
          />
          <Route path="/User" element={<User />} />
        </Routes>
      </div>
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
