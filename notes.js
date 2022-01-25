module.exports.age = 25;


function bubbleSort(A){
	let sorted = false;
	while(!sorted){
		sorted = true;
		for(let i = 0; i < A.length - 1; i++){
			if(A[i] > A[i + 1]){
				let temp = A[i + 1];
				A[i + 1] = A[i];
				A[i] = temp;
				sorted = false;
			}
		}
	}
}


module.exports.bubbleSort = bubbleSort;