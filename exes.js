//01
function extractNumbers(arr){
   
if (!Array.isArray(arr)) {
  
    throw new Error("Input is not an array");
}   
     return arr.filter((i)=>{
            return (typeof(i)==="number")
        })
        
  
}
console.log(extractNumbers([3,5,6,"k",9,"t"]))

//02
function sumNumbersSafe(arr){
    try {
        let numArr=extractNumbers(arr)
        let sum=0
        
        numArr.forEach(number => {
          sum+=number  
        });
        return sum;
    } catch (error) {
       console.log("input is not an array") 
       return 0;
    }
}
console.log(sumNumbersSafe([1,2,5,3,"j"]))
console.log(sumNumbersSafe("hi"))

//03
function  filterLargeSums(arrList, minTotal){
 return arrList.filter((arr)=>{
    return sumNumbersSafe(arr)>minTotal
 })
}
console.log(filterLargeSums([[4,6,8],[6,8,"j"],"hi",[1,2,"k"]], 10))

 //04
 function summaryStats(arrList){
    let filtered=filterLargeSums(arrList,10)
    let result=[]

    filtered.forEach((arr)=>{
        let sum=sumNumbersSafe(arr)
        let avarage=sum/arr.length
        result.push({sum:sum, avarage:avarage})

    })
return result;
 }
 console.log(summaryStats([[1,2,3], [5,5,5], [100], "bad"]))

 //05
 function safeCalculator(a, b, operation){
    if (typeof a !== typeof b) {
    throw new Error("a and b must be the same type");
}
 }
