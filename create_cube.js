export const new_cube_solved = () => {
    let i = 0, cube = Array(6).fill().map(e => e = Array(Array(2).fill(i), Array(2).fill(i++)));
    return cube;
};

const shuffle = (l) => {
    return l.sort(() => Math.random() - 0.5);
};

export const new_cube_shuffled = () => {
    let i = 0, cube = Array(6).fill().map(e => e = Array(Array(2).fill(i), Array(2).fill(i++)));
    let list_shuffled = shuffle(cube.flat().flat());
    i = 0;
    return cube.map(e => e = [
        [
            list_shuffled[i * 4], 
            list_shuffled[(i * 4) + 1]
        ], 
        [
            list_shuffled[(i * 4) + 2], 
            list_shuffled[(i++ * 4) + 3]
        ]
    ]);
};