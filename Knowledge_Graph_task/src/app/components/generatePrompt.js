
export const getEventsToKGJSONPrompt = (events) => {
    return {
        text: `Extract an ontology. Do not draw it but Create a json having nodes and edges, node should be an array of json have only 3 keys as integer id, String label and string title where as edges should be an array of json having only 2 keys integer from and integer to, Use this text as a basis:
${events}

a sample json output format and structure
        {
            nodes: [
                { id: 1, label: "Node 1", title: "node 1 tootip text" },
                { id: 2, label: "Node 2", title: "node 2 tootip text" },
                { id: 3, label: "Node 3", title: "node 3 tootip text" },
                { id: 4, label: "Node 4", title: "node 4 tootip text" },
                { id: 5, label: "Node 5", title: "node 5 tootip text" }
            ],
            edges: [
                { from: 1, to: 2 },
                { from: 1, to: 3 },
                { from: 2, to: 4 },
                { from: 2, to: 5 }
            ]
        }
        `
    }
}