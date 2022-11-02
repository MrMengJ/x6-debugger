import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Demo = dynamic(() => import("./ButtonNodeTool"), {
  loading: () => <p>加载中...</p>,
  ssr: false,
});

function X6Demo() {
  return <Demo />;
}

export default X6Demo;
