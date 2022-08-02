// break er kaj muloto notun ekta shorto jure dewa jetar maddhome loopk stop kora jabe
/* var nums=[25, 53, 65, 45, 75, 36,71, 41, 121, 69]
for (var i=0; i<= nums.length; i++) {
   var num=nums[i];
    if (num > 70){
        break;
    }
    console.log(num)
} */


// 'Continue' er maddhome je index take target kora hocche oitake SKIP kore porerta display korbe 
/* var nums=[25, 53, 65, 45, 75, 36,71, 41, 121, 69]
for (var i=0; i<= nums.length; i++) {
   var num=nums[i];
    if (num > 70){
        continue;
    }
    console.log(num)
}
 */
var items=['pen', 'scissor', 'stick', 'tissue', 'marker', 'box'];
for (var i=0; i< items.length; i++) {
   var item=items[i];
    if (item == 'stick'){
        continue;
    }
    console.log(item)
}