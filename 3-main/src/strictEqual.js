export function strictEqual(string) {
    const cleanString = string.replace(/[^0-9.+\-*\/]/g, '')
    const [ firstNum, secondNum ] = cleanString.split(/[+\-*\/]/)

    const num1 = parseFloat(firstNum)
    const num2 = parseFloat(secondNum)
    const operator = cleanString[firstNum.length]

    let result

    switch (operator) {
        case '+':
            result = num1 + num2
            break
        case '-':
            result = num1 - num2
            break
        case '*':
            result = num1 * num2
            break
        case '/':
            result = num1 / num2
            break
        default:
            throw new Error(`Unknown operator: ${operator}`)
    }

    const rounded = Math.round(result)

    return rounded.toString()
}

// console.log(strictEqual(';$%§fsdfsd235??df/sdfgf5gh.000kk0000'))
