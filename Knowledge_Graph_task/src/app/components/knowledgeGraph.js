

import Graph from "react-graph-vis";
// import Graph from 'vis-react';

export default function KnowledgeGraph({ graphData }) {
  console.log({
    graphData1: graphData?.graphData,
    graphData2: graphData
  })
  const graph = graphData?.graphData ?? {
    "nodes": [],
    "edges": []
  }

  const options = {
    layout: {
      hierarchical: true
    },
    edges: {
      color: "#000000"
    },
    height: "500px"
  };

  const events = {
    select: function(event) {
      var { nodes, edges } = event;
    }
  };
  return (
    <Graph
      graph={graph}
      options={options}
      events={events}
    />
  );
}