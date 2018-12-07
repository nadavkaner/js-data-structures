function createNode(key) {
  const children = [];
  return {
    key,
    children,
    addChild(key) {
      const node = createNode(key);
      children.push(node);
      return node;
    }
  }
}

function createTree(rootKey) {
  const root = createNode(rootKey);
  return {
    root,
    print() {
      let result = '';

      function traverse(node, depth) {
        result += `${depth === 0 ? '' : '\n'}${' '.repeat(depth * 2)}${node.key}`;

        node.children.forEach(child => {
          traverse(child, depth + 1);
        })
      }

      traverse(root, 0);

      return result;
    }
  }
}

const dom = createTree('html');

const head = dom.root.addChild('head');
const body = dom.root.addChild('body');

const title = head.addChild('title - tree title');

const header = body.addChild('header');
const main = body.addChild('main');
const footer = body.addChild('footer');

const h1 = header.addChild('h1 - Tree is here!');
const p = main.addChild('Main section');
const copyright = footer.addChild(`Copyright ${new Date().getFullYear()}`);

console.log(dom.print());