import { memo } from "react";

export const CompC = memo(({ count }) => {
  console.log("comp C rerender");
  return <>CompC:{count}</>;
});
