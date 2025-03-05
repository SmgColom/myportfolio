// Import npm packages
import { Routes, Route } from 'react-router-dom';
import "./styles/index.css";

// Import pages 
import Home from './pages/Home';
import WhoIAm from './pages/WhoIAm.jsx';
import ProjectsPage from './pages/ProjectsPage';
import NotFound from './pages/NotFound';

// Import components
import Layout from './components/layout/Layout.jsx';

function App() {
  return (
    <Routes>
      {/* MAIN LAYOUT WRAPPER */}
      <Route path="/" element={<Layout />}>

        {/* MAIN PAGES */}
        <Route index element={<Home />} />
        <Route path="/whoiam" element={<WhoIAm />} />
        <Route path="projects" element={<ProjectsPage />} />

        {/* NOT FOUND PAGE */}
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  );
}

export default App;