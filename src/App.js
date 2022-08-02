import React, { useCallback, useEffect, useMemo, useState } from "react";
import { CompA } from "./CompA";
import { CompB } from "./CompB";
import { CompC } from "./CompC";

const App = () => {
  const [colur, setColur] = useState(0);
  const [count, setCount] = useState(0);
  const handleCompA = useCallback(() => {
    console.log("handleCompA");
    setColur(Math.random());
  }, [colur]);
  const handleCompB = useCallback(() => {
    console.log("handleCompB");
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      <CompA colur={colur} />
      <CompB handleCompA={handleCompA} handleCompB={handleCompB} />
      <CompC count={count} />
      {/* <button>click</button> */}
    </div>
  );
};
export default App;
