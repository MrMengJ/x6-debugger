import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Demo = dynamic(() => import("./Rubberband"), {
  loading: () => <p>加载中...</p>,
  ssr: false,
});

function X6Demo() {
  return <Demo />;
}

export default X6Demo;
