import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AppLayout from "./components/AppLayout.tsx";
import Home from "./components/Home.tsx";
import {loader as moviesLoader,  Movies} from "./features/movie/Movies.tsx";
import {loader as movieLoader, Movie} from "./features/movie/Movie.tsx";
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
                element: <Movies/>,
                loader: moviesLoader,
                errorElement: <NotFound />,
            },
            {
                path: '/movie/:movieId',
                element: <Movie/>,
                loader: movieLoader,
                errorElement: <NotFound />,
            }
    ]}
])
function App() {

  return (
    <RouterProvider router={router}/>

  )
}

export default App
