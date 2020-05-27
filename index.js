function findMinAndRemove(array){
  let min = arr[0]
  let minIndex = 0
  for(let i= 0; i < array.length; i++ ){
    if (arr[i] < min){
      min = arr[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1)
  return min
}

function insertionSort(array){

}
