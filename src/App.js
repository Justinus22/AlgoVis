import { Route , Switch} from 'react-router-dom'

import Layout from "./components/layout/Layout"

import AllAlgorithmOverview from "./pages/Overview/AllAlgorithmOverview"
import WebsiteDetails from "./pages/WebsiteDetails"
import Account from "./pages/Account/Account.js"

import RouteManager from './pages/algopages/RouteManager'

function App() {

  return (
      <Layout>
        <RouteManager />
        <Switch>
          <Route path={['/','/home']} exact> 
            <AllAlgorithmOverview />
          </Route>
          <Route path='/WebsiteDetails' exact>
            <WebsiteDetails />
          </Route>
          <Route path='/Account' exact>
            <Account />
          </Route>
        </Switch>
      </Layout>
  );
}

export default App;