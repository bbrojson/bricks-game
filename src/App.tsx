import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import darkTheme from './theme/darkTheme';
import HelloView from './views/HelloView/HelloView';
import GameView from './views/GameView/GameView';
import Header from './components/Header/Header';
import './App.css';

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/game" element={<GameView />} />
          <Route path="/" element={<HelloView />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
