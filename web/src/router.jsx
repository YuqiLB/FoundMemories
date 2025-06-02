import Index from './pages/index.jsx'
import Navbar from './navbar/NavBar.jsx';
import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Index />} />
    <Route path="/navbar" element={<Navbar />} />
    </>
  )
);

export default router;