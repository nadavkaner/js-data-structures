const { createLinkedList } = require("./linked-list");

function hashTable(count) {
  const array = [];

  function _hash(value) {
    return value.length % count;
  }

  return {
    get: function(key) {
      const hashedKey = _hash(key);
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
      const hashedKey = _hash(key);
      const hashBucket = array[hashedKey];
      if (hashBucket) {
        hashBucket.push({ key, value });
      } else {
        array[hashedKey] = createLinkedList();
        array[hashedKey].push({ key, value });
      }
    },
    hasKey: function(key) {
      const hashedKey = _hash(key);
      return !!array[hashedKey];
    }
  };
}

/*

const ht = hashTable(100);
ht.set("nadav", { my: "hello" });

console.log(ht.get("nadav"));

*/
