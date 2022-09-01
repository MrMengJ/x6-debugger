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
      rotating: {
        enabled: true,
        grid: 15,
      },
      snapline: {
        enabled: true,
      },
    });

    window.graph = graph;

    const path1 = graph.addNode({
      shape: "path",
      x: 40,
      y: 40,
      width: 120,
      height: 50,
      path: 'M 0 5 10 0',
      markup: [
        {
          tagName: 'rect',
          selector: 'bg',
        },
        {
          tagName: 'path',
          selector: 'body',
        },
        {
          tagName: 'text',
          selector: 'label',
        },
      ],
      attrs: {
        bg: {
          refWidth: '100%',
          refHeight: '100%',
          fill: 'none',
          stroke: 'none',
          pointerEvents: 'all',
        },
        body: {
          fill: 'none',
          stroke: '#000',
          strokeWidth: 2,
        },
      },
    });
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
