import { HashRouter } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { DrawerProvider } from './contexts/DrawerContext';
import { ProductsProvider } from './contexts/ProductsContext';
import { Routes } from './routes';

export function App() {
  return (
    <HashRouter>
      <DrawerProvider>
        <ProductsProvider>
          <div className="wrapper">
            <Sidebar />

            <main id="main-content" className="container-fluid">
              <Routes />
            </main>
          </div>
        </ProductsProvider>
      </DrawerProvider>
    </HashRouter>
  );
}
