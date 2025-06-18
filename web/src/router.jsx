import Index from './pages/index.jsx'
import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Index />} />
    </>
  )
);

export default router;