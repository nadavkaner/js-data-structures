function createNode(key) {
  const neighbors = [];
  return {
    key,
    neighbors,
    addNeighbor(node) {
      neighbors.push(node);
    }
  }
}

function createGraph(directed = false) {
  const nodes = [];
  const edges = [];

  return {
    directed,
    nodes,
    edges,
    addNode(key) {
      nodes.push(createNode(key));
    },
    getNode(key) {
      return nodes.find(node => node.key === key);
    },
    addEdge(node1Key, node2Key) {
      const node1 = this.getNode(node1Key);
      const node2 = this.getNode(node2Key);

      node1.addNeighbor(node2);

      this.edges.push(`${node1Key}-${node2Key}`);

      if (!directed) {
        node2.addNeighbor(node1);
      }
    },
    print() {
      return nodes.map(({key, neighbors}) => 
        `${key} => ${neighbors.map(x => x.key).join(' ')}`).join('\n');
    }
  }
}

const graph = createGraph(true);

graph.addNode('Pikachu');
graph.addNode('Charmander');
graph.addNode('Balbazor');
graph.addNode('Wabaphet');

graph.addEdge('Pikachu', 'Wabaphet');
graph.addEdge('Pikachu', 'Charmander');
graph.addEdge('Pikachu', 'Balbazor');
graph.addEdge('Balbazor', 'Charmander');
graph.addEdge('Wabaphet', 'Pikachu');
graph.addEdge('Charmander', 'Balbazor');

console.log(graph.print());

