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
      },
    });

    window.graph = graph;

    const source = graph.addNode({
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

    const target = graph.addNode({
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

    const obstacles = [];
    const obstacle = graph.addNode({
      x: 340,
      y: 140,
      width: 120,
      height: 50,
      label: "Obstacle",
      attrs: {
        label: {
          text: "Obstacle",
          fill: "#eee",
        },
        body: {
          fill: "#9687fe",
          stroke: "#8e89e5",
          strokeWidth: 2,
        },
      },
    });

    const obstacle2 = graph.addNode({
      x: 540,
      y: 140,
      width: 120,
      height: 50,
      label: "Obstacle2",
      attrs: {
        label: {
          text: "Obstacle2",
          fill: "#eee",
        },
        body: {
          fill: "#9687fe",
          stroke: "#8e89e5",
          strokeWidth: 2,
        },
      },
    });

    let edge;

    const update = () => {
      const edgeView = graph.findViewByCell(edge);
      edgeView.update();
    };

    obstacles.push(obstacle);
    obstacles.push(graph.addNode(obstacle.clone().translate(200, 100)));
    obstacles.push(graph.addNode(obstacle.clone().translate(-200, 150)));
    obstacles.push(obstacle2);
    obstacles.forEach((obstacle, index) => {
      obstacle.on("change:position", update);
    });

    edge = graph.addEdge({
      source,
      target,
      sourcePort: "Qv10zeOnvuuR",
      targetPort: "U2tSOS2jRWJw",
      router: {
        name: "manhattan",
        args: {
          // padding: 10,
          // startDirections: ["top"],
          // endDirections: ["bottom"],
          excludeHiddenNodes: true,
          filter(node) {
            return node.attrs.text.text === "Obstacle";
          },
        },
      },
      tools: {
        name: 'segments',
        args: {
          snapRadius: 20,
          attrs: {
            fill: '#444',
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
