import { Routes, Route } from 'react-router-dom'
import './App.css';
import HomePage from './pages/home/HomePage.jsx';
import ArticleDetailPage from './pages/articleDetail/ArticleDetailPage';

function App() {
  return (
    <div className="App font-poppins">
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route path='/blog/:id' element={<ArticleDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
