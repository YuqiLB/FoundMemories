import Index from './pages/index.jsx'
import Archives from './pages/archives.jsx';
import Contact from './pages/contact.jsx';
import Events from './pages/events.jsx';
import GetInvolved from './pages/getinvolved.jsx';
import Impacts from './pages/impacts.jsx';

import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Index />} />
    <Route path="/archives" element={<Archives />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/events" element={<Events />} />
    <Route path="/getinvolved" element={<GetInvolved />} />
    <Route path="/impacts" element={<Impacts />} />
    </>
  )
);

export default router;