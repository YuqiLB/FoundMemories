import Index from './pages/index.jsx'
import Archives from './pages/archives.jsx';
import Contact from './pages/contact.jsx';

import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Index />} />
    <Route path="/archives" element={<Archives />} />
    <Route path="/contact" element={<Contact />} />
    </>
  )
);

export default router;