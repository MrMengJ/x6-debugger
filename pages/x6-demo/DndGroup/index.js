import React from "react";
import { Addon, Graph } from "@antv/x6";

export default class ManhattanRouterExample extends React.Component {
  constructor(props) {
    super(props);
  }

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

    this.graph = graph;

    const dndInstance = new Addon.Dnd({
      scaled: false,
      animation: false,
      target: graph,
      getDragNode: (node, { draggingGraph }) => {
        console.log("getDragNode node", node);

        const parent = draggingGraph.addNode({
          x: 0,
          y: 0,
          width: 400,
          height: 400,
          zIndex: -10000,
          attrs: {
            body: {
              fill: "transparent",
            },
          },
        });

        const source = draggingGraph.addNode({
          x: 40,
          y: 40,
          width: 120,
          height: 50,
          attrs: {
            body: {
              fill: "#fe8550",
              stroke: "#ed8661",
              strokeWidth: 2,
            },
            label: {
              text: "Source",
              fill: "#f0f0f0",
              fontSize: 18,
              fontWeight: "lighter",
              fontVariant: "small-caps",
            },
          },
          ports: {
            items: [
              {
                id: "R6VCAo0SPpQ6",
                group: "top",
                attrs: {
                  circle: {
                    r: 4,
                    magnet: true,
                    stroke: "#4185f3",
                    strokeWidth: 2,
                    fill: "#fff",
                    style: {
                      visibility: "visible",
                    },
                  },
                },
                position: {
                  name: "top",
                  args: {},
                },
                label: {
                  position: {
                    name: "left",
                    args: {},
                  },
                },
                zIndex: 10,
                size: {},
              },
              {
                id: "Qv10zeOnvuuR",
                group: "right",
                attrs: {
                  circle: {
                    r: 4,
                    magnet: true,
                    stroke: "#4185f3",
                    strokeWidth: 2,
                    fill: "#fff",
                    style: {
                      visibility: "visible",
                    },
                  },
                },
                position: {
                  name: "right",
                  args: {},
                },
                label: {
                  position: {
                    name: "left",
                    args: {},
                  },
                },
                zIndex: 10,
                size: {},
              },
              {
                id: "WwC8g1pP57bs",
                group: "bottom",
                attrs: {
                  circle: {
                    r: 4,
                    magnet: true,
                    stroke: "#4185f3",
                    strokeWidth: 2,
                    fill: "#fff",
                    style: {
                      visibility: "visible",
                    },
                  },
                },
                position: {
                  name: "bottom",
                  args: {},
                },
                label: {
                  position: {
                    name: "left",
                    args: {},
                  },
                },
                zIndex: 10,
                size: {},
              },
              {
                id: "jAt8VvDl8ldT",
                group: "left",
                attrs: {
                  circle: {
                    r: 4,
                    magnet: true,
                    stroke: "#4185f3",
                    strokeWidth: 2,
                    fill: "#fff",
                    style: {
                      visibility: "visible",
                    },
                  },
                },
                position: {
                  name: "left",
                  args: {},
                },
                label: {
                  position: {
                    name: "left",
                    args: {},
                  },
                },
                zIndex: 10,
                size: {},
              },
            ],
            groups: {
              bottom: {
                position: {
                  name: "bottom",
                },
                zIndex: 10,
                attrs: {
                  circle: {
                    r: 4,
                    magnet: true,
                    stroke: "#4185f3",
                    strokeWidth: 2,
                    fill: "#fff",
                    style: {
                      visibility: "visible",
                    },
                  },
                },
                label: {
                  position: {
                    name: "left",
                    args: {},
                  },
                },
              },
              right: {
                position: {
                  name: "right",
                },
                zIndex: 10,
                attrs: {
                  circle: {
                    r: 4,
                    magnet: true,
                    stroke: "#4185f3",
                    strokeWidth: 2,
                    fill: "#fff",
                    style: {
                      visibility: "visible",
                    },
                  },
                },
                label: {
                  position: {
                    name: "left",
                    args: {},
                  },
                },
              },
              top: {
                position: {
                  name: "top",
                },
                zIndex: 10,
                attrs: {
                  circle: {
                    r: 4,
                    magnet: true,
                    stroke: "#4185f3",
                    strokeWidth: 2,
                    fill: "#fff",
                    style: {
                      visibility: "visible",
                    },
                  },
                },
                label: {
                  position: {
                    name: "left",
                    args: {},
                  },
                },
              },
              left: {
                position: {
                  name: "left",
                },
                zIndex: 10,
                attrs: {
                  circle: {
                    r: 4,
                    magnet: true,
                    stroke: "#4185f3",
                    strokeWidth: 2,
                    fill: "#fff",
                    style: {
                      visibility: "visible",
                    },
                  },
                },
                label: {
                  position: {
                    name: "left",
                    args: {},
                  },
                },
              },
            },
          },
        });

        const target = draggingGraph.addNode({
          ...source
            .clone()
            .translate(480, 0)
            .setAttrByPath("label/text", "Target")
            .toJSON(),
          ports: {
            items: [
              {
                id: "fZ14o2gzriq9",
                group: "top",
                attrs: {
                  circle: {
                    r: 4,
                    magnet: true,
                    stroke: "#4185f3",
                    strokeWidth: 2,
                    fill: "#fff",
                    style: {
                      visibility: "visible",
                    },
                  },
                },
                position: {
                  name: "top",
                  args: {},
                },
                label: {
                  position: {
                    name: "left",
                    args: {},
                  },
                },
                zIndex: 10,
                size: {},
              },
              {
                id: "V6se24Qtrqwp",
                group: "right",
                attrs: {
                  circle: {
                    r: 4,
                    magnet: true,
                    stroke: "#4185f3",
                    strokeWidth: 2,
                    fill: "#fff",
                    style: {
                      visibility: "visible",
                    },
                  },
                },
                position: {
                  name: "right",
                  args: {},
                },
                label: {
                  position: {
                    name: "left",
                    args: {},
                  },
                },
                zIndex: 10,
                size: {},
              },
              {
                id: "Yx4P9tOijnoN",
                group: "bottom",
                attrs: {
                  circle: {
                    r: 4,
                    magnet: true,
                    stroke: "#4185f3",
                    strokeWidth: 2,
                    fill: "#fff",
                    style: {
                      visibility: "visible",
                    },
                  },
                },
                position: {
                  name: "bottom",
                  args: {},
                },
                label: {
                  position: {
                    name: "left",
                    args: {},
                  },
                },
                zIndex: 10,
                size: {},
              },
              {
                id: "U2tSOS2jRWJw",
                group: "left",
                attrs: {
                  circle: {
                    r: 4,
                    magnet: true,
                    stroke: "#4185f3",
                    strokeWidth: 2,
                    fill: "#fff",
                    style: {
                      visibility: "visible",
                    },
                  },
                },
                position: {
                  name: "left",
                  args: {},
                },
                label: {
                  position: {
                    name: "left",
                    args: {},
                  },
                },
                zIndex: 10,
                size: {},
              },
            ],
            groups: {
              bottom: {
                position: {
                  name: "bottom",
                },
                zIndex: 10,
                attrs: {
                  circle: {
                    r: 4,
                    magnet: true,
                    stroke: "#4185f3",
                    strokeWidth: 2,
                    fill: "#fff",
                    style: {
                      visibility: "visible",
                    },
                  },
                },
                label: {
                  position: {
                    name: "left",
                    args: {},
                  },
                },
              },
              right: {
                position: {
                  name: "right",
                },
                zIndex: 10,
                attrs: {
                  circle: {
                    r: 4,
                    magnet: true,
                    stroke: "#4185f3",
                    strokeWidth: 2,
                    fill: "#fff",
                    style: {
                      visibility: "visible",
                    },
                  },
                },
                label: {
                  position: {
                    name: "left",
                    args: {},
                  },
                },
              },
              top: {
                position: {
                  name: "top",
                },
                zIndex: 10,
                attrs: {
                  circle: {
                    r: 4,
                    magnet: true,
                    stroke: "#4185f3",
                    strokeWidth: 2,
                    fill: "#fff",
                    style: {
                      visibility: "visible",
                    },
                  },
                },
                label: {
                  position: {
                    name: "left",
                    args: {},
                  },
                },
              },
              left: {
                position: {
                  name: "left",
                },
                zIndex: 10,
                attrs: {
                  circle: {
                    r: 4,
                    magnet: true,
                    stroke: "#4185f3",
                    strokeWidth: 2,
                    fill: "#fff",
                    style: {
                      visibility: "visible",
                    },
                  },
                },
                label: {
                  position: {
                    name: "left",
                    args: {},
                  },
                },
              },
            },
          },
        });

        const edge = draggingGraph.addEdge({
          source,
          target,
          sourcePort: "Qv10zeOnvuuR",
          targetPort: "U2tSOS2jRWJw",
          router: {
            name: "manhattan",
            args: {
              excludeHiddenNodes: true,
              filter(node) {
                return node.attrs.text.text === "Obstacle";
              },
            },
          },
        });

        parent.addChild(source);
        parent.addChild(target);

        return parent;
      },
      validateNode: async (droppingNode) => {
        console.log("droppingNode", droppingNode);
        return false;
      },
    });

    this.dnd = dndInstance;
  }

  refContainer = (container) => {
    this.container = container;
  };

  handleStartDnd = (e) => {
    if (this.dnd) {
      this.dnd.start(this.graph.createNode({ data: { test: "测试测试" } }), e);
    }
  };

  render() {
    return (
      <div className="app">
        <button onClick={this.handleStartDnd}>Start Dnd</button>
        <div className="app-content" ref={this.refContainer} />
      </div>
    );
  }
}
