import { Routes, Route } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider } from './context/ThemeContext'; // ✅ NUEVO


// Pages
import Home from './pages/Home';
import WhoIAm from './pages/WhoIAm';
import ProjectsPage from './pages/ProjectsPage';
import NotFound from './pages/NotFound';
import ContactMe from './pages/ContactMe';

// Layout
import Layout from './components/layout/Layout';

const theme = {
  colors: {
    primary: "#66d9e0",
  },
};

function App() {
  return (
    <ThemeProvider>
      <StyledThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/whoiam" element={<WhoIAm />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/ContactMe" element={<ContactMe />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </StyledThemeProvider>
    </ThemeProvider>
  );
}

export default App;


