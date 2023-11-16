import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Game, Home, Layout } from './pages';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="game" element={<Game />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
