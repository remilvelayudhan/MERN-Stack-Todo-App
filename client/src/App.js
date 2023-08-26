import {BrowserRouter,Routes,Router} from '@angular/router';
import { Home } from './pages/Home/Home';
function App() {
  return (
    <>
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
