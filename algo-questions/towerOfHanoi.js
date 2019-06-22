function towerOfHanoi(noOfDisks, fromRod, toRod, auxRod) {
  if (noOfDisks === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }

  towerOfHanoi(noOfDisks - 1, fromRod, auxRod, toRod);
  console.log(`Move disk ${noOfDisks} from ${fromRod} to ${toRod}`);
  towerOfHanoi(noOfDisks - 1, auxRod, toRod, fromRod);
}

towerOfHanoi(4, "A", "C", "B");
