// Türme Stapeln
let tuerme = [[1, 2, 3, 4], [0,0,0,0], [0,0,0,0]] // Ausgangssituation
console.log(tuerme)
// 1. kleinstes(1) auf mittleren Turm
let tuerme1 = [[0,2,3,4], [0,0,0,1], [0,0,0,0]]
console.log(tuerme1)
// 2. Scheibe nach links
let tuerme2 = [[0,0,3,4], [0,0,0,1],[0,0,0,2]]
console.log(tuerme2)
//3. kleine Scheibe auf links
let tuerme3 =[[0,0,3,4], [0,0,0,0],[0,0,1,2]]
console.log(tuerme3)
//4. 3.Scheibe auf Mitte
let tuerme4 = [[0,0,0,4], [0,0,0,3],[0,0,1,2]]
console.log(tuerme4)
// 5. 1 geht auf 4
let tuerme5 = [[0,0,1,4], [0,0,2,3], [0,0,0,2]]
console.log(tuerme5)
// 6. 2 geht auf 3
let tuerme6 = [[0,0,1,4], [0,0,2,3],[0,0,0,0]]
console.log(tuerme6)
// 7. 1 geht auf 2 und 3
let tuerme7= [[0,0,0,4], [0,1,2,3], [0,0,0,0]]
console.log(tuerme7)
// 8. 4 geht auf links
let tuerme8 = [[0,0,0,0], [0,1,2,3],[0,0,0,4]]
console.log(tuerme8)
// 9. 1 geht rechts
let tuerme9 = [[0,0,0,1], [0,0,2,3], [0,0,0,4]]
console.log(tuerme9)
// 10. 2 geht auf 4
let tuerme10 = [[0,0,0,1], [0,0,0,3],[0,0,2,4]]
console.log(tuerme10)
// 11. 1 geht auf 2 & 4
let tuerme11 = [[0,0,0,0],[0,0,0,3],[0,1,2,4]]
console.log(tuerme11)
//12. 3 geht links
let tuerme12= [[0,0,0,3],[0,0,0,0], [0,1,2,4]]
console.log(tuerme12)
//13. 1 geht auf 3
let tuerme13 = [[0,0,1,3],[0,0,0,0],[0,0,2,4]]
console.log(tuerme13)
//14. 2 geht in die Mitte
let tuerme14 = [[0,0,1,3],[0,0,0,2],[0,0,0,4]]
console.log(tuerme14)
// 15. 1 geht auf 2
let tuerme15 =[[0,0,0,3],[0,0,1,2],[0,0,0,4]]
console.log(tuerme15)
// 16. 3 geht auf 4
let tuerme16 = [[0,0,0,0],[0,0,1,2],[0,0,3,4]]
console.log(tuerme16)
// 17. 1 geht rechts
let tuerme17= [[0,0,0,1],[0,0,0,2],[0,0,3,4]]
console.log(tuerme17)
// 18. 2 geht auf 3&4
let tuerme18=[[0,0,0,1],[0,0,0,0],[0,2,3,4]]
console.log(tuerme18)
// 19. 1 geht auf 2&3&4
let tuerme19= [[0,0,0,0],[0,0,0,0],[1,2,3,4]]
console.log(tuerme19)