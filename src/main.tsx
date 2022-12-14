import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { ChakraProvider } from '@chakra-ui/react'

import {
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'

import { store } from './redux/store'
import router from './routes/Navegation'
import { theme } from './helpers'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
     <ChakraProvider theme={theme}>
      <RouterProvider router={router} />  
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
)
