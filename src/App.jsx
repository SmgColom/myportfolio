import { Routes, Route } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider } from './context/ThemeContext'; // ✅ NUEVO
import { useState, useEffect } from 'react';

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
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isLightMode) {
      body.classList.add("lightmode");
    } else {
      body.classList.remove("lightmode");
    }
  }, [isLightMode]);

  return (
    <ThemeProvider>
      <StyledThemeProvider theme={theme}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                isLightMode={isLightMode}
                setIsLightMode={setIsLightMode}
              />
            }
          >
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


