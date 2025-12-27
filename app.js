import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const resJson = await res.json();
    setAdvice(resJson.slip.advice);
    setCount((c) => c + 1);
  }
  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <div>
      <h2>{advice}</h2>
      <button onClick={getAdvice}>get advice</button>
      <Message count={count} />
    </div>
  );
}
function Message(props) {
  return (
    <p>
      you have read <strong>{props.count}</strong> advices so far
    </p>
  );
}