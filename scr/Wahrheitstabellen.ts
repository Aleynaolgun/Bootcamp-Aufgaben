//Wahrheitstabellen

//Aufgabe 1 (A UND B) ODER C
const variables = ["A", "B","C"];
for( let i=0; i<8;i++) {
    const A= (i & 4) !==0;
    const B=(i & 2) !==0;
    const C= (i & 1) !==0;

    const result=(A && B)||C;

console.log (
    (A ? 1:0),
    (B ? 1:0),
    (C ? 1:0),
    '=>',
    result ? 1:0);
}
// (A UND B) ODER (A UND C)
const variables2 =["A","B","C"];
for(let b=0; b < 8; b++) {
    const A= (b & 4) !==0;
    const B=(b & 2) !==0;
    const C= (b & 1) !==0;

    const result=(A&&B) || (A&&C);

console.log(
    (A ? 1 : 0),
    (B ? 1 : 0),
    (C ? 1 : 0),
    '===',
     result ? 1: 0);
}

//(A ODER B ODER C) UND (B UND D)

const variables3 = ["A","B","C","D"];
for(let a=0; a<16; a++) {
    const A= (a & 8) !==0;
    const B =(a & 4) !==0;
    const C= (a & 2) !==0;
    const D= (a & 1) !==0;

    const result= (A||B||C) && (B||D)

console.log(
    (A ? 1:0),
    (B ? 1:0),
    (C ? 1:0),
    (D ? 1:0),
    '=',
    result? 1:0,)

}