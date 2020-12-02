import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import darkTheme from './theme/darkTheme';
import Header from './components/Header/Header';
import './App.css';

function SubSite() {
  const { t } = useTranslation();
  return <div className="App">{t('sub site')}</div>;
}

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/subsite" element={<SubSite />} />
          <Route path="/subsite/:id" element={null} />
          <Route path="/" element={null} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
