import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme.js'
import GlobalState from './context/GlobalContext'
import Main from './components/main/Main.jsx'

createRoot(document.getElementById('root')).render(
  <>
  {/* <Main/> */}
  
  
  <GlobalState>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
    
  </GlobalState>
  </>
)
