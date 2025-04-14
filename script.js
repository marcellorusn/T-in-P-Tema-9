let A = [
    [1, 2, 3],
    [8, 9, 10],
];

let B = [
    [5, 6],
    [12, 13],
    [19, 20],
];

let C = [];

function setup() {
    createCanvas(800, 300);
    textAlign(CENTER, CENTER);
    textSize(16);
    noStroke();

    drawMatrix(A, 50, 50);

    drawMatrix(B, 335, 20);
    //C[i][j] = A[i][0] * B[0][j] + A[i][1] * B[1][j] + A[i][2] * B[2][j]
    for (let i = 0; i < A.length; i++) {
        C[i] = [];
        for (let j = 0; j < B[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < A[0].length; k++) {
                sum += A[i][k] * B[k][j];
            }
            C[i][j] = sum;
        }
    }
    drawMatrix(C, 580, 50);

    //desenez si * si =
    fill(200);
    rect(250, 80, 30, 30);
    rect(490, 80, 30, 30);
    fill(0);
    text('*', 265, 100);
    text('=', 505, 97);
}
function drawMatrix(matrix, startX, startY) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let x = startX + j * 50;
            let y = startY + i * 50;

            fill(random(255), random(255), random(255));
            rect(x, y, 45, 45);

            fill(0);
            text(matrix[i][j], x + 22.5, y + 22.5);
        }
    }
}