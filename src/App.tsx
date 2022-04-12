import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import dark from './styles/themes/dark'
import light from './styles/themes/light'

import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import List from './pages/List'
import AppRoutes from './routes/app.routes'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  )
}
export default App
