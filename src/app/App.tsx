import { AuthProvider } from '@/context/AuthContext';
import { ProductProvider } from '@/context/ProductContext';
import router from '@/routes/Routes';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { SingleProductProvider } from '@/context/SingleProductContext';

function App() {

  return (
    <>
      <SingleProductProvider>
        <ProductProvider>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </ProductProvider>
      </SingleProductProvider>
    </>
  )
}

export default App;
