const products = [
    'dell hardcore i29 200gb laptop',
    'iphone 1TB camera flashlight phone',
    'yellow laptop with black camera',
    '1x59 lenovo commercial yoga laptop',
    'dell lg super nova laptop',
    ' HTC low price phone',
];
const searching = 'dell';
//indexOf
const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product);
    }
}
// console.log(output);   
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        //output.push(product);
    }
}
//console.log(output);
//starts with
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);


