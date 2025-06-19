import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Mainlayout  from './Page/Mainlayout';
import Home from './Page/Home';
import About from './Page/About';
import Events from './Page/Events';
import Handling from './Page/Handling';
import Market from './Page/Market';
import Donate from './Page/Donate';
import Blog from './Page/Blog';
import Contact from './Page/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About/>}></Route>
          <Route path="/market" element={<Market/>}></Route>
          <Route path="/events" element={<Events/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/donate" element={<Donate/>}></Route>
          <Route path="/handling" element={<Handling/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
