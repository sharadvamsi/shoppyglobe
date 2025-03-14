import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { Provider } from "react-redux"
import appStore from "./utils/redux/appStore"
import { Toaster } from "sonner"

const App = () => {
 
  return (
    <Provider store={appStore}>
      <Header />
      <Toaster />
      <Outlet />
    </Provider>
  )
}

export default App
