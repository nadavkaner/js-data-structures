const { createLinkedList } = require("./linked-list");

function hashTable(count) {
  const array = [];

  function hashFunction(value) {
    return value.length % count;
  }

  return {
    get: function(key) {
      const hashedKey = hashFunction(key);
      const hashBucket = array[hashedKey];

      if (!hashBucket) {
        return undefined;
      }

      const head = hashBucket.head;
      while (head != null) {
        if (head.value.key === key) {
          return head.value.value;
        }
      }

      return undefined;
    },
    set: function(key, value) {
      const hashedKey = hashFunction(key);
      const hashBucket = array[hashedKey];
      if (hashBucket) {
        hashBucket.push({ key, value });
      } else {
        array[hashedKey] = createLinkedList();
        array[hashedKey].push({ key, value });
      }
    }
  };
}

/*

const ht = hashTable(100);
ht.set("nadav", { my: "hello" });

console.log(ht.get("nadav"));

*/
