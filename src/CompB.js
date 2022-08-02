export const CompB = ({ handleCompB, handleCompA }) => {
  console.log("rerender B");
  return (
    <>
      <div>
        <button onClick={() => handleCompA()}>compA</button>
        <button onClick={() => handleCompB()}>compB</button>
      </div>
    </>
  );
};
