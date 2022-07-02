import * as React from "react";
import { Graph } from "@antv/x6";

import { Tabs } from "antd";
const { TabPane } = Tabs;

export default class Example extends React.Component {
  componentDidMount() {
    this.graph = new Graph({
      container: this.container,
      grid: { visible: true },
      clipboard: {
        enabled: true,
      },
      selecting: {
        enabled: true,
        showNodeSelectionBox: true,
      },
      keyboard: {
        enabled: true,
        global: true,
      },
    });

    this.graph.addNode({
      x: 280,
      y: 100,
      width: 100,
      height: 40,
      label: "Rect",
    });

    const source = this.graph.addNode({
      x: 32,
      y: 32,
      width: 100,
      height: 40,
      label: "Hello",
    });

    const target = this.graph.addNode({
      shape: "circle",
      x: 160,
      y: 180,
      width: 60,
      height: 60,
      label: "World",
    });

    this.graph.addEdge({
      source,
      target,
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
  }

  refContainer = (container) => {
    this.container = container;
  };

  render() {
    return (
      <div className="app">
        <div className="app-info">
          <p>
            <span>Ctrl + C</span>Copy Cell
            <span style={{ marginLeft: 24 }}>Ctrl + V</span>Paste Cell
          </p>
        </div>
        <div className="app-content" ref={this.refContainer} />
        <Tabs defaultActiveKey="1" type="card">
          <TabPane tab="Card Tab 1" key="1">
            Content of card tab 1
          </TabPane>
          <TabPane tab="Card Tab 2" key="2">
            Content of card tab 2
          </TabPane>
          <TabPane tab="Card Tab 3" key="3">
            Content of card tab 3
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
