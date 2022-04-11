import { Route , Switch} from 'react-router-dom'

import Layout from "./components/layout/Layout"

import AllAlgorithmOverview from "./pages/Overview/AllAlgorithmOverview"
import WebsiteDetails from "./pages/WebsiteDetails"
import Account from "./pages/Account/Account.js"

import RouteManager from './components/RouteManager'

import ContextProvider from "./contexts/ContextProvider.js"

function App() {

  return (
      <ContextProvider>
        <Layout>
          <RouteManager />
          <Switch>
            <Route path={['/','/home']} exact> 
              <AllAlgorithmOverview />
            </Route>
            <Route path='/websitedetails' exact>
              <WebsiteDetails />
            </Route>
            <Route path='/account' exact>
              <Account />
            </Route>
          </Switch>
        </Layout>
      </ContextProvider>
  );
}

export default App;