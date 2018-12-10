/*
  Data structure that uses a fixed-size buffer as if it were connected end-to-end.
*/

function createCircularBuffer(size) {
  let currentIndex = 0;
  const buffer = new Array(size);

  return {
    insert(item) {
      buffer[currentIndex] = item;
      currentIndex = (currentIndex + 1) % size;
    },
    getLastNth(nth) {
      if (nth < 0 || nth > size) {
        throw new Error('nth length out of bounds');
      }

      const resolved = currentIndex - nth;
      let reminder = resolved < 0 ? Math.abs(resolved) : null; 
      
      let result = [...buffer.slice(resolved < 0 ? 0 : resolved, currentIndex)];

      return reminder ? result.concat([...buffer.slice(size - reminder)]) : result;
    }
  }
}

/*
USAGE:

const circularBuffer = createCircularBuffer(5);

circularBuffer.insert(1);
circularBuffer.insert(2);
circularBuffer.insert(3);
circularBuffer.insert(4);
circularBuffer.insert(5);

console.log(circularBuffer.getLastNth(4))
*/
