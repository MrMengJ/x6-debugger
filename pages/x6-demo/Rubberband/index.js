import React from "react";
import { Graph } from "@antv/x6";

export default class RubberbandExample extends React.Component {
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
        enabled: (shape) => {
          return true;
          return shape.getAttrs()?.label.text !== "Target";
        },
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
      resizing: {
        enabled: (shape) => {
          return true;
          return shape.getAttrs()?.label.text !== "Target";
        },
      },
      selecting: {
        enabled: true,
        rubberband: true,
        rubberEdge: true, // 框选可以选中edge
        rubberNode: true, // 框选可以选中node
        strict: true,
        showNodeSelectionBox: true,
        showEdgeSelectionBox: false, // 必须为false，否则连接线的文本编辑功能会失效
        pointerEvents: "none", // 事件穿透selectionBox，fix #669
        multipleSelectionModifiers: ["ctrl", "meta", "shift"],
      },
    });

    window.graph = graph;

    const source = graph.addNode({
      x: 140,
      y: 140,
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
