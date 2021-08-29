module.exports = function towelSort (matrix) {
    if (matrix === undefined) {
        return [];
    }

    if (matrix.length === 0) {
        return [];
    }

    let n = matrix.length;    
    let ans = [];

    for (let i = 0; i < n; i++) {        
        if (i % 2 != 0) matrix[i].reverse();
        for (let j = 0; j < matrix[i].length; j++) ans.push(matrix[i][j]);
    }

    return ans;
}
