export function findPairs(arr) {
    const numMap = {}
    for (const num of arr) {
        numMap[num] = true
    }

    const result = []

    for (const num of arr) {
        if (numMap[num + 2]) {
            result.push([ num, num + 2 ])
        }
    }

    result.sort(([a, b]) => b - a)

    return result
}

// console.log(findPairs([ 1, 23, 3, 4, 7 ]))
// console.log(findPairs([ 1, 3, 4, 6 ]))
