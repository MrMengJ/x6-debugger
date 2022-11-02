import React from "react";
import { Graph } from "@antv/x6";

export default class Example extends React.Component {
  componentDidMount() {
    const graph = new Graph({
      container: this.container,
      grid: {
        visible: true,
        size: 20,
        type: "doubleMesh",
        snapToGrid: false,
        args: [
          {
            color: "#ecf3fe", // 主网格线颜色
            thickness: 1, // 主网格线宽度
          },
          {
            color: "#ecf3fe", // 次网格线颜色
            thickness: 2, // 次网格线宽度
            factor: 6, // 主次网格线间隔
          },
        ],
      },
      resizing: { enabled: true },
      rotating: {
        enabled: true,
        grid: 15,
      },
      snapline: {
        enabled: true,
      },
      mousewheel: {
        enabled: true,
        modifiers: "alt",
      },
      panning: {
        enabled: false,
      },
      selecting: {
        enabled: true,
        rubberband: true,
        rubberEdge: true, // 框选可以选中edge
        rubberNode: true, // 框选可以选中node
        showNodeSelectionBox: true,
      },
    });

    window.graph = graph;

    const path1 = graph.addNode({
      shape: "path",
      x: 640,
      y: 240,
      width: 120,
      height: 100,
      path: "M 0 0 L 100 20",
      markup: [
        {
          tagName: "rect",
          selector: "bg",
        },
        {
          tagName: "path",
          selector: "body",
        },
        {
          tagName: "text",
          selector: "label",
        },
      ],
      simple: true,
      attrs: {
        bg: {
          refWidth: "100%",
          refHeight: "100%",
          fill: "red",
          stroke: "none",
          pointerEvents: "all",
          style: {
            display: "none",
          },
        },
        body: {
          fill: "green",
          stroke: "#000",
          strokeWidth: 1,
        },
      },
    });

    const source = graph.addNode({
      x: 332,
      y: 250,
      width: 100,
      height: 40,
      label: "Hello",
    });

    graph.on("node:click", () => {});
  }

  refContainer = (container) => {
    this.container = container;
  };

  render() {
    return (
      <div className="app">
        <div className="app-content" ref={this.refContainer} />
      </div>
    );
  }
}
