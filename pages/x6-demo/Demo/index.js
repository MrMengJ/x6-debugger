import * as React from "react";
import { Graph } from "@antv/x6";

export default class Example extends React.Component {
  componentDidMount() {
    this.graph = new Graph({
      container: this.container,
      grid: { visible: true, size: 10, snapToGrid: false },
      clipboard: {
        enabled: true,
      },
      selecting: {
        enabled: true,
        showNodeSelectionBox: true,
        rubberband: true,
        rubberEdge: true, // 框选可以选中edge
        rubberNode: true, // 框选可以选中node
        strict: true,
        showEdgeSelectionBox: false, // 必须为false，否则连接线的文本编辑功能会失效
      },
      keyboard: {
        enabled: true,
        global: true,
      },
      mousewheel: {
        enabled: true,
        modifiers: "alt",
      },
      snapline: {
        enabled: true,
      },
      resizing: {
        enabled: true,
      },
      rotating: {
        enabled: true,
      },
    });

    window.graph = this.graph;

    this.graph.addNode({
      x: 280,
      y: 10,
      width: 100,
      height: 40,
      label: "Rect",
      // id: "rect",
    });

    const source = this.graph.addNode({
      x: 32,
      y: 100,
      width: 100,
      height: 40,
      label: "Hello",
      // id: "hello",
    });

    const target = this.graph.addNode({
      shape: "circle",
      x: 32,
      y: 180,
      width: 60,
      height: 60,
      label: "World",
      // id: "circle",
    });

    // this.graph.addEdge({
    //   source,
    //   target,
    // });

    this.graph.bindKey("ctrl+c", () => {
      const cells = this.graph.getSelectedCells();
      if (cells.length) {
        this.graph.copy(cells);
      }
      return false;
    });

    this.graph.bindKey("ctrl+v", () => {
      if (!this.graph.isClipboardEmpty()) {
        const cells = this.graph.paste({ offset: 32 });
        this.graph.cleanSelection();
        this.graph.select(cells);
      }
      return false;
    });
  }

  refContainer = (container) => {
    this.container = container;
  };

  handleLogCellsPosition = () => {
    const position = {};
    this.graph.getCells().forEach((cell) => {
      position[cell.id] = cell.getPosition();
    });

    console.log("position", position);
  };

  render() {
    return (
      <>
        <button onClick={this.handleLogCellsPosition}>
          log cells position
        </button>
        <div className="app">
          <div className="app-content" ref={this.refContainer} />
        </div>
      </>
    );
  }
}
