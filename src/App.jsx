import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Mainlayout  from './Page/Mainlayout';
import Home from './Page/Home';
import About from './Page/About';
import EventList from './Page/Events';
import Handling from './Page/Handling';
import Market from './Page/Market';
import Donate from './Page/Donate';
import Blog from './Page/Blog';
import Landing from './Page/Landing'
import Contact from './Page/Contact';
import BlogDetails from "./Components/BlogDetails";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About/>}></Route>
          <Route path="/market" element={<Market/>}></Route>
          <Route path="/events" element={<EventList/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/landing" element={<Landing/>}></Route>
          <Route path="/donate" element={<Donate/>}></Route>
          <Route path="/handling" element={<Handling/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/post/:id" element={<BlogDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
