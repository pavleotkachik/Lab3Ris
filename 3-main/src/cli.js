import { program } from 'commander'
import { findPairs } from './findPairs.js'
import { strictEqual } from './strictEqual.js'
import {getInput, sendOutput} from './io.js'

program
    .option('-i, --input [filename]')
    .option('-o, --output [filename]')
    .requiredOption('-t, --task <taskname>')

program.parse()

const options = program.opts()

async function bootstrap() {
    for await (const input of getInput(options.input)) {
        let parsed
        try {
            parsed = JSON.parse(input)
        } catch {
            console.log('Failed to parse input')
            continue
        }
        switch (options.task) {
            case 'findPairs':
                const pairsResult = findPairs(parsed)
                await sendOutput(`${pairsResult}`, options.output)
                break
            case 'strictEqual':
                const equalResult = strictEqual(options.input)
                await sendOutput(`${equalResult}`, options.output)
                break
            default:
                console.log('Unknown task')
                process.exit(1)
                break
        }
    }
}

bootstrap()