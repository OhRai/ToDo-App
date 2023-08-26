import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import TodoMenu from './TodoMenu';
import Create from './Create';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className='flex flex-col min-h-screen bg-gradient-to-br from-gray-800 via-purple-900 to-violet-600'>
        <div className='flex-grow mt-16'>
          <div className='flex-col flex items-center'>
            <Navbar />
            <Routes>
              <Route path='/' element={<TodoMenu />} />
              <Route path='/create' element={<Create />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;