import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matrix-example',
  templateUrl: './matrix-example.component.html',
  styleUrls: ['./matrix-example.component.scss'],
})
export class MatrixExampleComponent implements OnInit {
  matrix = [
    [0, 1, 2, 3],
    [11, 12, 13, 4],
    [10, 15, 14, 5],
    [9, 8, 7, 6],
  ] as any;
  returnArray = [] as any;

  constructor() {}

  ngOnInit(): void {
    let a = this.walkMatrix(this.matrix);
    console.log('aaa', a);
  }

  walkMatrix(matrix: any) {
    console.log('Original Matrix : ', matrix);

    const rowCount = matrix.length;
    const colCount = matrix[0].length;

    let startRow = 0;
    let endRow = rowCount - 1;

    let startCol = 0;
    let endCol = colCount - 1;

  /*   while (endRow >= startRow && endCol >= startCol) {
      for (let col = startCol; col <= endCol; col++) {
        this.returnArray.push(matrix[startRow][col]);
      }
      startRow++;

      for (let row = startRow; row <= endRow; row++) {
        this.returnArray.push(matrix[row][endCol]);
      }
      endCol--;

      if (endRow >= startRow) {
        for (let col = endCol; col <= startCol; col--) {
          this.returnArray.push(matrix[endRow][col]);
        }
      }
      endRow--;

      if (endCol >= startCol) {
        for (let row = endRow; row <= startRow; row--) {
          this.returnArray.push(matrix[row][startCol]);
        }
      }
      startCol++;
    } */

    console.log('this.returnArray', this.returnArray);

    return this.returnArray;
  }
}
