import { HashRouter } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Routes } from './routes';

export function App() {
  return (
    <HashRouter>
      <div className="wrapper">
        <Sidebar />

        <main id="main-content" className="container-fluid">
          <Routes />
        </main>
      </div>
    </HashRouter>
  );
}
