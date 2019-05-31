class TrieNode {
  constructor(value) {
    this.value = value;
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode("$");
  }

  add(word) {
    let currentNode = this.root;
    for (let letter of word) {
      const letterNodeExist = currentNode.children[letter];
      if (letterNodeExist) {
        currentNode = currentNode.children[letter];
      } else {
        const newLetterNode = new TrieNode(letter);
        currentNode.children[letter] = newLetterNode;
        currentNode = newLetterNode;
      }
    }
  }

  search(key) {
    var curNode = this.root,
      curChar = key.slice(0, 1),
      d = 0;

    key = key.slice(1);

    while (
      typeof curNode.children[curChar] !== "undefined" &&
      curChar.length > 0
    ) {
      curNode = curNode.children[curChar];
      curChar = key.slice(0, 1);
      key = key.slice(1);
      d += 1;
    }

    if (curNode.value === null && key.length === 0) {
      return d;
    } else {
      return -1;
    }
  }
}

const trie = new Trie();
trie.add("nadav");
console.log(JSON.stringify(trie, null, 2));
