/*
Write a program in the Tower of Hanoi consists of three pegs or towers with n disks placed
one over the other. The objective of the puzzle is to move the stack to another peg following these
simple rules.
1. Only one disk can be moved at a time.
2. No disk can be placed on top of the smaller disk.
*/

const towerOfHanoi = (n,fromRod,toRod,auxRod) => {
    if (n === 1) {
        console.log(`Move disk 1 from rod ${fromRod} to  ${toRod}`);
        return
    }
    towerOfHanoi(n - 1, fromRod, auxRod, toRod)
    console.log(`Move disk ${n} from rod ${fromRod} to ${toRod}`);
    towerOfHanoi(n - 1, auxRod, toRod, fromRod);
}

let num = 4
towerOfHanoi(num,'A','B','C')