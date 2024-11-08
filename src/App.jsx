import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterList from './pages/CharacterList';
import CharacterDetail from './pages/CharacterDetail';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<CharacterList />} />
            <Route path="/character/:id" element={<CharacterDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

