import React from "react";
import { Graph } from "@antv/x6";

export default class Example extends React.Component {
  componentDidMount() {
    const graph = new Graph({
      container: this.container,
      grid: true,
      onToolItemCreated({ tool }) {
        const handle = tool;
        const options = handle.options;
        if (options && options.index % 2 === 1) {
          tool.setAttrs({ fill: "red" });
        }
      },
    });

    window.graph = graph;

    graph.addEdge({
      source: { x: 340.2, y: 240.7 },
      target: { x: 680, y: 240.7 },
      // vertices: [
      //   {
      //     x: 360,
      //     y: 360,
      //   },
      //   {
      //     x: 680,
      //     y: 300,
      //   },
      // ],
      router: {
        name: "manhattan",
        args: {
          excludeHiddenNodes: true,
        },
      },
      attrs: {
        line: {
          stroke: "#3c4260",
          strokeWidth: 2,
          targetMarker: "classic",
        },
      },
      tools: {
        name: "segments",
        args: {
          snapRadius: 20,
          attrs: {
            fill: "#444",
          },
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
