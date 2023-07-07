import * as React from "react";
import { Graph } from "@antv/x6";
import { nanoid } from "../../utils/id";

export default class Example extends React.Component {
  componentDidMount() {
    this.graph = new Graph({
      container: this.container,
      grid: { visible: true, size: 10, snapToGrid: false },
      idGenerator: nanoid,
      history: {
        enabled: true,
      },
      clipboard: {
        enabled: true,
        useLocalStorage: false,
        dragCopy: {
          enabled: true,
          modifiers: ["ctrl", "meta"],
          tolerance: 10,
        },
        getSubGraph: (cells, options) => {
          const subgraph = [];
          const cache = {};
          const edges = [];
          const collect = (cell) => {
            if (!cache[cell.id]) {
              cache[cell.id] = cell;
              if (cell.isEdge()) {
                edges.push(cell);
              }

              if (cell.isNode()) {
                subgraph.push(cell);
              }
            }
          };

          cells.forEach((cell) => {
            collect(cell);
            if (options.deep) {
              const descendants = cell.getDescendants({ deep: true });
              descendants.forEach((descendant) => collect(descendant));
            }
          });

          edges.forEach((edge) => {
            const sourceCell = edge.getSourceCell();
            const targetCell = edge.getTargetCell();

            if (!sourceCell && !targetCell) {
              subgraph.push(edge);
            } else if (sourceCell && cache[sourceCell.id] && !targetCell) {
              subgraph.push(edge);
            } else if (targetCell && cache[targetCell.id] && !sourceCell) {
              subgraph.push(edge);
            } else if (
              sourceCell &&
              cache[sourceCell.id] &&
              targetCell &&
              cache[targetCell.id]
            ) {
              subgraph.push(edge);
            }
          });

          return subgraph;
        },
        dataGenerator: (data) => {
          console.log("data", data);
          // const bizData = data.data;
          // bizData.a = "test";
          // if (bizData) {
          //   bizData.id = data.id;
          // }
          return data;
        },
      },
      selecting: {
        enabled: true,
        showNodeSelectionBox: true,
        rubberband: true,
        rubberEdge: true, // 框选可以选中edge
        rubberNode: true, // 框选可以选中node
        strict: true,
        showEdgeSelectionBox: false, // 必须为false，否则连接线的文本编辑功能会失效
        pointerEvents: "none",
        multipleSelectionModifiers: ["ctrl", "meta", "shift"],
      },
      keyboard: {
        enabled: true,
        global: true,
      },
      mousewheel: {
        enabled: true,
        modifiers: ["ctrl", "meta"],
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
        autoResizeOptions: {
          direction: ["bottom", "right"],
          filter(cell) {
            if (cell?.attrs?.text?.text === "Hello") {
              return true;
            }
            return false;
          },
        },
      },
      preventDefaultContextMenu({ graph, cell }) {
        return false;
      },
      moveThreshold: 0,
      // connecting: {
      //   anchor: "center",
      //   connectionPoint: "boundary",
      //   router: "manhattan",
      // },
    });

    window.graph = this.graph;

    const rect = this.graph.addNode({
      x: 280,
      y: 210,
      width: 100,
      height: 40,
      label: "Rect",
      id: nanoid(),
      // id: "rect",
    });

    const source = this.graph.addNode({
      x: 132,
      y: 100,
      width: 100,
      height: 40,
      label: "Hello",
      id: nanoid(),
      zIndex: 1,
      // id: "hello",
    });

    const target = this.graph.addNode({
      shape: "circle",
      x: 32,
      y: 180,
      width: 60,
      height: 60,
      label: "World",
      id: nanoid(),
      // id: "circle",
    });

    this.graph.addEdge({
      source,
      target,
      id: nanoid(),
    });

    this.graph.addEdge({
      source: rect,
      target: {
        x: 510,
        y: 292,
      },
      id: nanoid(),
    });

    this.graph.addEdge({
      source: {
        x: 540,
        y: 300,
      },
      target: {
        x: 610,
        y: 192,
      },
      id: nanoid(),
    });

    this.graph.cleanHistory();

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

    this.graph.bindKey("ctrl+z", () => {
      this.graph.undo();
    });

    this.graph.bindKey("ctrl+shift+z", () => {
      this.graph.redo();
    });

    this.graph.bindKey("delete", () => {
      this.graph.removeCells(this.graph.getSelectedCells());
    });
  }

  componentWillUnmount() {
    if (this.graph) {
      this.graph.dispose();
      this.graph = null;
    }
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
