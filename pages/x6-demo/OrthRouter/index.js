import React from "react";
import { Graph } from "@antv/x6";

export default class ManhattanRouterExample extends React.Component {
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
        resizing: true,
        filter(targetNode, snapNode) {
          if (snapNode.store?.data?.attrs?.label?.text === "Target") {
            return true;
          }

          return false;
        },
      },
      history: {
        enabled: true,
      },
      resizing: true,
      mousewheel: {
        enabled: true,
        modifiers: ["ctrl", "meta"],
      },
      connecting: {
        snap: { radius: 20 },
      },
      highlighting: {
        magnetAdsorbed: {
          name: "stroke",
          args: {
            padding: 3,
            attrs: {
              fill: "rgba(66, 133, 244, 1)",
              stroke: "rgba(66, 133, 244, 0.4)",
              "stroke-width": 8,
            },
          },
        },
      },
    });

    window.graph = graph;
    this.graph = graph;

    const source = graph.addNode({
      x: 140,
      y: 140,
      width: 120,
      height: 50,
      angle: 0,
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
      // tools: [
      //   {
      //     name: "button",
      //     args: {
      //       markup: [
      //         {
      //           tagName: "circle",
      //           selector: "button",
      //           attrs: {
      //             r: 14,
      //             stroke: "#fe854f",
      //             "stroke-width": 3,
      //             fill: "white",
      //             cursor: "pointer",
      //           },
      //         },
      //         {
      //           tagName: "text",
      //           textContent: "Btn A",
      //           selector: "icon",
      //           attrs: {
      //             fill: "#fe854f",
      //             "font-size": 8,
      //             "text-anchor": "middle",
      //             "pointer-events": "none",
      //             y: "0.3em",
      //           },
      //         },
      //       ],
      //       x: "100%",
      //       y: "100%",
      //       offset: { x: -18, y: -18 },
      //     },
      //   },
      // ],
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

    const target = graph.addNode({
      ...source
        .clone()
        .translate(480, 100)
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

    // const edge = graph.addEdge({
    //   source,
    //   target,
    //   sourcePort: "Qv10zeOnvuuR",
    //   targetPort: "U2tSOS2jRWJw",
    //   router: {
    //     // name: "manhattan",
    //     name: "orth",
    //     args: {
    //       padding: 20,
    //     },
    //   },
    //   zIndex: 1000,
    // });
  }

  refContainer = (container) => {
    this.container = container;
  };

  handleDelete = () => {
    if (this.graph) {
      const nodes = this.graph.getNodes();
      if (nodes.length > 0) {
        graph.removeNode(nodes[0].id);
      }
    }
  };

  handleUndo = () => {
    if (this.graph) {
      this.graph.undo();
    }
  };

  handleRedo = () => {
    if (this.graph) {
      this.graph.redo();
    }
  };

  render() {
    return (
      <>
        <div className="app">
          <div className="app-content" ref={this.refContainer} />
          <button onClick={this.handleDelete}>删除</button>
        </div>
        <div>
          <button onClick={this.handleUndo}>undo</button>
          <button onClick={this.handleRedo}>redo</button>
        </div>
      </>
    );
  }
}
