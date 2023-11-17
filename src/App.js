import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ContextProvider } from './contexts';
import { Game, Home, Layout } from './pages';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="game" element={<Game />} />
            </Route>
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
