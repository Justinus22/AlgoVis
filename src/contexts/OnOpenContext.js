import { createContext, useState } from 'react';

const OnOpenContext = createContext({
  onopen: undefined,
  setonopen: (status) => {}
});

export function OnOpenContextHandler(props) {
  const [onOpenInternally, setOnOpenInternally] = useState(true);

  function setOnOpen(status) {
      setOnOpenInternally(status)
      console.log(onOpenInternally)
    }



  const context = {
    onopen: onOpenInternally,
    setonopen: setOnOpen
  };


  return (
    <OnOpenContext.Provider value={context}>
      {props.children}
    </OnOpenContext.Provider>
  );
}

export default OnOpenContext;
