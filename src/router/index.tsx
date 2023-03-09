import { RouteObject } from 'react-router-dom'
import Layout from '../layout/Layout'
import About from '../pages/About'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '', element: <Home /> },
            { path: 'about', element: <About /> },
        ]
    },
    {
        path: '*',
        element: <NotFound />,
    }
]

export default routes
