import { useDispatch } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import User from './User/Info';

// const Home = () => <div>Home Page</div>;

const App = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<User />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;