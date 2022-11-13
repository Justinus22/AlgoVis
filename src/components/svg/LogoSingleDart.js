function LogoSingleDart(props){
  const color = props.color ? props.color : getComputedStyle(document.documentElement).getPropertyValue('--secondColor');
  return (
  <svg viewBox="100 0 300 300" width={props.size} height={props.size} xmlns="http://www.w3.org/2000/svg">
    <polygon style={{fill: color}} points="100 0 250 300 400 0 325 0 250 151.483 175 0"/>
  </svg>
  );
}

export default LogoSingleDart;
