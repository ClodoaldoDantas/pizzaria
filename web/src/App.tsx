import { HashRouter } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { DrawerProvider } from './contexts/DrawerContext';
import { Routes } from './routes';

export function App() {
  return (
    <HashRouter>
      <DrawerProvider>
        <div className="wrapper">
          <Sidebar />

          <main id="main-content" className="container-fluid">
            <Routes />
          </main>
        </div>
      </DrawerProvider>
    </HashRouter>
  );
}
