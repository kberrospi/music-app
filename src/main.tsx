import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react';
import { AppRouter } from './router/AppRouter';
import './index.css';
import { MusicProvider } from './context/MusicProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <MusicProvider>
        <AppRouter />
      </MusicProvider>
    </NextUIProvider>
  </React.StrictMode>
)
