const numInputsOne = [-4,-1,0,3,10];
const numInputsTwo = [-7,-3,2,3,11];

const sortedSquares = (nums) => {
    let left = 0; 
    let right = nums.length - 1 ;
    let results = [] ;
    
    while(left <= right){
        const leftIntegerSquared = Math.pow(nums[left],2);
        const rightIntegerSquared = Math.pow(nums[right],2);

        if(leftIntegerSquared >= rightIntegerSquared){ 
            results.unshift(leftIntegerSquared);
            left++;
        } else{
            results.unshift(rightIntegerSquared);
            right--;
        }
       
   }
   
   return results ;
}

console.log(sortedSquares(numInputsOne));
console.log(sortedSquares(numInputsTwo));