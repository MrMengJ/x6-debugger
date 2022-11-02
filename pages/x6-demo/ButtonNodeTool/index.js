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
        multipleSelectionModifiers: ["ctrl", "meta", "shift"],
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
      // 普通画布, 支持拖拽平移, 开启scroller时此项需要关闭,由 scroller pannable 选项来控制平移, 不然效果会叠加, 导致UI交互异常
      panning: {
        enabled: false,
      },
      scroller: {
        enabled: true,
        pageVisible: true,
        pageBreak: true,
        pannable: true,
        padding: 40,
        background: {
          color: "transparent",
        },
        modifiers: "alt",
        autoSize: true,
      },
      preventDefaultContextMenu({ graph, cell }) {
        return false;
      },
    });

    window.graph = this.graph;

    const source = this.graph.addNode({
      x: 532,
      y: 250,
      width: 100,
      height: 40,
      label: "Hello",
      tools: [
        {
          name: "button",
          args: {
            markup: [
              {
                tagName: "circle",
                selector: "button",
                attrs: {
                  r: 14,
                  stroke: "#fe854f",
                  "stroke-width": 3,
                  fill: "white",
                  cursor: "pointer",
                },
              },
              {
                tagName: "text",
                textContent: "Btn A",
                selector: "icon",
                attrs: {
                  fill: "#fe854f",
                  "font-size": 8,
                  "text-anchor": "middle",
                  "pointer-events": "none",
                  y: "0.3em",
                },
              },
            ],
            x: "100%",
            y: "100%",
            offset: { x: -18, y: -18 },
          },
        },
      ],
    });

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

    this.graph.on("node:dblclick", ({ node }) => {
      console.log("node:dblclick", node);
    });

    this.graph.on("resize", (...args) => {
      console.log("args", ...args);
    });
  }

  refContainer = (container) => {
    this.container = container;
  };

  handleTest = () => {
    const firstCell = this.graph.getCells()[0];
    if (firstCell) {
      this.graph.removeCell(firstCell);
    }
  };

  render() {
    return (
      <div className="app">
        <div className="app-content" ref={this.refContainer} />
        <button onClick={this.handleTest}>Delete</button>
      </div>
    );
  }
}
