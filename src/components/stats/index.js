import React from "react";

import { TheStats } from "../../style/stats_style";

const Stats = ({ stats }) => {
  if (!stats) {
    //LOADING
    return <TheStats>Loading..</TheStats>;
  }

  return (
    <TheStats>
      {stats.error && "🤯 Error!"}
      {stats.isLoading && "🙄 Loading..."}
      {stats.downloads !== null && `🤘 ${stats.downloads}`}
    </TheStats>
  );
};
