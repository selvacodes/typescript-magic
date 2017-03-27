import { map } from 'ramda'


interface Human {
    name: string
    age: number
}

interface Angel {
    name: string
    age: number
    wings: boolean
}

function human(name: string, age: number): Human {
    return {
        name,
        age
    }
}

function humanToAngel(human: Human): Angel {
    return {
        ...human,
        wings: true
    }
}

const me = human("Selva", 12)

const x = [me].map(humanToAngel)

const y = map(humanToAngel)([me])

