import { AuthProvider } from '@/context/AuthContext';
import router from '@/routes/Routes';
import { RouterProvider } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  )
}

export default App;
