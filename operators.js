const x = 4;
const y = 11;

if (x > 5 || y > 10) {  //OR condition try with AND
    console.log('x is morethan 5 and y is more than 10 ');
}

if (x > 5) {
    if (y > 10) {

    }

}
// else if (x > 10 ){
//     console.log('X is greater than 10');
// } else {
//     console.log('x is less than 10');
// }


const color = x > 10 ? 'red' : 'blue'  //terinary operator

console.log(color)


switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is Not red or Blue')
        break;

}



