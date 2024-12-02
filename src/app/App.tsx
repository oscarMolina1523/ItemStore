import { AuthProvider } from '@/context/AuthContext';
import { ProductProvider } from '@/context/ProductContext';
import router from '@/routes/Routes';
import { RouterProvider } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <>
      <ProductProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ProductProvider>
    </>
  )
}

export default App;
