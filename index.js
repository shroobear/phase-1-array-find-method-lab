// code your solution here
function superbowlWin(record) {
    const winRecord = record.find(r => r.result === "W");
    return winRecord ? winRecord.year : undefined;
}
  