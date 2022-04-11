import {AuthProvider} from "./Auth"

function ContextProvider(props) {
  return (
    <AuthProvider>
      {props.children}
    </AuthProvider>
  );
}

export default ContextProvider;
