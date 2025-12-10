// Fibonacci-Zahlen
let a = 0;
let b = 1;
const n  = 30 // n = Grenzwert, darf man nicht überschreiten.
let next = a + b;
while( next <= n ) {
    console.log(next);
    a = b;
    b = next;
    next = a + b;
}
