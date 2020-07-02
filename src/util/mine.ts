export function make2dMineArray(row: number, mineCount: number) {
    const arr: Array<number> = [];
    const result: Array<Array<number>> = [];
    for (let i = 0; i < row * row; i++) {
        arr.push(i < mineCount ? 1 : 0);
    }
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    for (let i = 0; i < row; i++) {
        result.push(arr.slice(row * i, row * (i + 1)));
    }
    return result;
}
export function make2dMineCountArray(mineArr: Array<Array<number>>) {
    const result: Array<Array<number>> = [];
    for (let i = 0; i < mineArr.length; i++) {
        result[i] = [];
        for (let j = 0; j < mineArr[i].length; j++) {
            let count = 0;
            if (mineArr[i][j] === 1) {
                result[i][j] = 10;
                continue;
            }
            if (mineArr[i - 1] && mineArr[i - 1][j - 1] === 1) count++;
            if (mineArr[i - 1] && mineArr[i - 1][j] === 1) count++;
            if (mineArr[i - 1] && mineArr[i - 1][j + 1] === 1) count++;
            if (mineArr[i][j - 1] === 1) count++;
            if (mineArr[i][j] === 1) count++;
            if (mineArr[i][j + 1] === 1) count++;
            if (mineArr[i + 1] && mineArr[i + 1][j - 1] === 1) count++;
            if (mineArr[i + 1] && mineArr[i + 1][j] === 1) count++;
            if (mineArr[i + 1] && mineArr[i + 1][j + 1] === 1) count++;
            result[i][j] = count;
        }
    }
    return result;
}
