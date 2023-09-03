import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material';
import { brown, amber } from '@mui/material/colors';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Class from './pages/Class';
import NoPage from './pages/NoPage';

const theme = createTheme({
  palette: {
    primary: brown,
    secondary: {
      light: amber[200],
      main: amber[500],
      dark: amber[900],
      textContrast: amber[600]
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        // disableElevation: true
      },
      styleOverrides: {
        root: {
          // width: "100%"
          // color: "white",
          // backgroundColor: deepOrange[800],
          textTransform: "none",
          // fontSize: "1rem",
          // borderRadius: "8px",
          // marginTop: "20px"
          // "&:hover": {
          //   backgroundColor: deepOrange[600],
          // }
        }
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/class" element={<Class />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </>
    </ThemeProvider>
  );
}

export default App;
