import { Route , Switch} from 'react-router-dom'

import Layout from "./components/layout/Layout"

import AllAlgorithmOverview from "./pages/AllAlgorithmOverview"

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllAlgorithmOverview />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
