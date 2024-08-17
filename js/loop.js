for(let i = 0; i < 10; i++){
    console.log(i);
}

let arr = ['honda', 'nissan', 'toyota'];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
arr.forEach(item => {
    console.log(item);
});
arr.map(item => {
    console.log(item);
});