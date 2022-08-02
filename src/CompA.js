import React, { useMemo } from "react";

export const CompA = React.memo(({ colur }) => {
  console.log("comp A rerender");
  return <>CompA:{colur}</>;
});
