import * as cube from './create_cube.js';
import * as move from './move_cube.js';

/* 
    - 0 --> bianco
    - 1 --> rosso
    - 2 --> giallo
    - 3 --> arancione
    - 4 --> verde
    - 5 --> blue
*/

let c = cube.new_cube_solved();

console.log(c);
console.log(move.test(c));