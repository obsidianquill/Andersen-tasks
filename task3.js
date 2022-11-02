function displayArray(a) {
    for(let i = 0; i < a.length; i++) {
        if((a[i] % 3) === 0) {
            console.log(a[i])
        }
    }
}
let arr = [1, 2, 3, 6];
displayArray(arr);