const Ship = (size) => {
  let shipArr = [];

  for (let i = 0; i < size; i++) {
    shipArr.push("");
  }

  const shipStatus = () => {
    return shipArr;
  };

  const hit = (position) => {
    shipArr[position] = "X";
  };

  const isSunk = () => {
    let sunk = true;

    for (let segment of shipArr) {
      if (segment !== "X") {
        sunk = false;
        break;
      }
    }

    return sunk;
  };

  return { shipStatus, hit, isSunk };
};

export { Ship };
