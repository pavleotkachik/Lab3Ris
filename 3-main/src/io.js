import { readFile, access, writeFile } from 'fs/promises'
import { createInterface } from 'readline'

export async function* getInput(filename) {
    if (filename) {
        try {
            await access(filename)
        } catch {
            process.stdout.write('Failed to access input file\n')
            process.exit(1)
            return
        }
        yield await readFile(filename, { encoding: 'utf8' })
    } else {
        const rl = createInterface(process.stdin)
        for await (const line of rl) {
            yield line
        }
    }
}

export async function sendOutput(content, filename) {
    if (!filename) {
        process.stdout.write(content + '\n')
    } else {
        await writeFile(filename, content)
    }
}
