import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AppLayout from "./components/AppLayout.tsx";
import Home from "./components/Home.tsx";
import {Movies} from "./features/movie/Movies.tsx";
import {Movie} from "./features/movie/Movie.tsx";
import {NotFound} from "./components/Error.tsx";


const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/movies',
                element: <Movies/>
            },
            {
                path: '/movies/:id',
                element: <Movie/>
            }
    ]}
])
function App() {

  return (
    <RouterProvider router={router}/>

  )
}

export default App
