import App from "./App.jsx"
import {
    BrowserRouter,
    Route,
    createBrowserRouter,
    createRoutesFromElements
} from 'react-router-dom';
const router = createBrowserRouter(
    createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}></Route>
    </>
    )
)