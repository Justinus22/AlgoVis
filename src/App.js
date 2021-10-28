import { Route , Switch} from 'react-router-dom'
import {useContext } from "react"

import Layout from "./components/layout/Layout"

import AllAlgorithmOverview from "./pages/AllAlgorithmOverview"
import WebsiteDetails from "./pages/WebsiteDetails"
import Account from "./pages/Account"

import OnOpenContext from "./contexts/OnOpenContext"


function App() {

  const onopenCtx = useContext(OnOpenContext);



  window.addEventListener('wheel',(event) => {
      if(onopenCtx.onopen){
        onopenCtx.setonopen(false)

      }
  });


  return (
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
  );
}

export default App;
