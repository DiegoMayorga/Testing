import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  return (
    <div>
      <h2>Hello World</h2>
      {!changedText && <Output>It&apos;s good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={() => setChangedText(true)}>Change Text!</button>
    </div>
  );
};

export default Greeting;
