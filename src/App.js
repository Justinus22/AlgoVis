import { Route , Switch} from 'react-router-dom'

import Layout from "./components/layout/Layout"

import AllAlgorithmOverview from "./pages/Overview/AllAlgorithmOverview"
import WebsiteDetails from "./pages/WebsiteDetails"
import Account from "./pages/Account"
import SmoothScroll from './components/SmoothScroll/SmoothScroll'

function App() {

  return (
  // <SmoothScroll>
    <Layout>
      <Switch>
        <Route path='/' exact>
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
// </SmoothScroll>
  );
}

export default App;
