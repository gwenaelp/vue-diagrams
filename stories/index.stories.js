import { storiesOf } from "@storybook/vue";

// Add more stories here to live develop your components
storiesOf("Diagram", module).add("story as a template", () => ({
  data() {
    return {
      nodes: [
        {
          title: "test",
          x: 10,
          y: 100,
          width: 72,
          height: 100,
          ports: [
            {
              id: 1,
              type: "out",
              name: "testOut1"
            },
            {
              id: 2,
              type: "out",
              name: "testOut2"
            },
            {
              id: 7,
              type: "out",
              name: "testOut3"
            }
          ]
        },
        {
          title: "test",
          x: 10,
          y: 300,
          width: 144,
          height: 80,
          ports: [
            {
              id: 5,
              type: "in",
              name: "testIn"
            },
            {
              id: 6,
              type: "out",
              name: "testOut"
            }
          ]
        },
        {
          title: "test2",
          x: 300,
          y: 200,
          width: 144,
          height: 80,
          ports: [
            {
              id: 3,
              type: "in",
              name: "testIn"
            },
            {
              id: 4,
              type: "out",
              name: "testOut"
            }
          ]
        }
      ],
      links: [
        {
          id: 1,
          from: 2,
          to: 3,
          positionFrom: {},
          positionTo: {},
          points: []
        },
        {
          id: 2,
          from: 6,
          to: 3,
          positionFrom: {},
          positionTo: {},
          points: []
        }
      ]
    };
  },
  template: `<diagram :nodes="nodes" :links="links"></diagram>`
}));
