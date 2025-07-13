
import CursorFollower from './utils/CursorFollower'
import Navbar from './sections/Navbar'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: '/contact',
    element: (
      <>
        <Navbar />
        <Contact />
      </>
    ),
  },
]);

const App = () => {
  return (
    <div>
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundImage: `
          linear-gradient(to right, #3B444B 1px, transparent 1px),
          linear-gradient(to bottom, #3B444B 1px, transparent 1px)
        `,
        backgroundSize: '90px 90px',
        opacity: 0.1,
        zIndex: -1,
        animation: 'gridMove 40s linear infinite',
        pointerEvents: 'none'
      }} />
      
      <Toaster position="top-center" reverseOrder={false} />

      <CursorFollower />
      
      <RouterProvider router={router} />
    </div>
  )
}

export default App