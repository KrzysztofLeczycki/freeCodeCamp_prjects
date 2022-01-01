function checkCashRegister(price, cash, cid) {
  const denomination = [ 1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
 let cashCopy = [...cid];
 let cashReg = cashCopy.map(item => Math.round(item[1]*100));
 let rest = (cash - price)*100;
 let changed = [];
 
 function count(num){
   let k = cashReg[num]/denomination[num];
   let change = 0;
   for (let j = 1; j <= k; j+=1){
     if (cashReg[num] > 0 && rest - denomination[num] >= 0){
       change += denomination[num];
       rest = rest - denomination[num];
       cashReg[num] -= denomination[num];
   }}
   return change;
 }

 for (let i = cashReg.length - 1; i >= 0; i--){
   let temp = count(i);
   if (temp != 0){
     changed.push([cid[i][0], temp/100])
   }}
   
   if (rest > 0){
    return {status: 'INSUFFICIENT_FUNDS', change: []};
  } else if (rest === 0 && cashReg.every(item => item === 0)){
   return {status: "CLOSED", change: cashCopy};
 } else if (rest === 0) {
   return {status: "OPEN", change: changed};
 }
 }

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

