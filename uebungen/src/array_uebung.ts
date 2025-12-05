let array = [3, 5, 1, 7, 9];
console.log(array[2]);
array[2]=7
console.log(array)

let array2 =[0,1,2]
console.log(array2.length)
array2[10]=10
console.log(array2)
console.log(array2.length)

let array3 = [7, 19, 11]
console.log(array3);

array3.push(4);
console.log(array3);

array3.pop();
console.log(array3);

array3.unshift(1);
console.log(array3);

array3.shift();
console.log(array3);

array3.reverse();
console.log(array3);

let anders_array = [1, 2, 3]
let zusammen = array3.concat(anders_array)
console.log(zusammen)

let zutaten = ["zwiebel", "hackfleisch", "knoblauch", "salz", "tomate"];
zutaten.shift();
console.log(zutaten);

zutaten.pop();
console.log(zutaten);

zutaten[1]="tomate";
console.log(zutaten);

zutaten.push("knoblauch");
console.log(zutaten);

zutaten.unshift(zutaten[0]);
console.log(zutaten);

zutaten[5]="speck";
console.log(zutaten)

zutaten.reverse();
console.log(zutaten);

zutaten.pop();
console.log(zutaten)