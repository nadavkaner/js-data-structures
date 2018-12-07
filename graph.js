const { createQueue } = require('./queue');

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
    },
    breadthFirstDepth(startingKey, visitFn) {
      const startingNode = this.getNode(startingKey);
      const visited = {};
      
      const queue = createQueue();
      queue.enqueue(startingNode);

      while(!queue.isEmpty()) {
        const current = queue.dequeue();
        if (!visited[current.key]) {
          visited[current.key] = true;
          visitFn(current);
        }
        
        current.neighbors.forEach(node => {
          if (!visited[node.key]) {
            queue.enqueue(node)
          }
        });
      }
    },
    depthFirstSearch(startingNodeKey, visitFn) {
      const startingNode = this.getNode(startingNodeKey);
      const visited = {};

      function explore(node) {
        if (visited[node.key]) {
          return;
        }

        visitFn(node);
        visited[node.key] = true;

        node.neighbors.forEach(node => {
          explore(node);
        })
      }

      explore(startingNode);
    }
  }
}

/*
  USAGE:
*/
/*
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
*/

const graph = createGraph(true);

const nodes = ['a', 'b', 'c', 'd', 'e', 'f'];
const edges = [
  ['a', 'b'],
  ['a', 'e'],
  ['a', 'f'],
  ['b', 'd'],
  ['b', 'e'],
  ['c', 'b'],
  ['d', 'c'],
  ['d', 'e']
];

nodes.forEach(node => {
  graph.addNode(node);
})
edges.forEach(nodes => {
  graph.addEdge(...nodes);
})

graph.depthFirstSearch('a', node => {
  console.log(node.key);
})