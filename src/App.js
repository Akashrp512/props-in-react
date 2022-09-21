import "./styles.css";
//props similar to attributes on html element &can refer to variable using {}
export default function App() {
  return <input style={{ border: "3px solid red" }} type="number" min={5} />;
}
//if we put string as props wrap with ""
//if you wanna put number as props wrap with {}
//if you can provide array wrap with array inside {}
//if you wanna provide object wrap with curly brase{} like{{color:'red}} :{} -related to jsx and {}-related to objects
//we can't provide object as directly inside the jsx instead use props to provide object in jsx. for example <input abc={config} />
