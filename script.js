const selectors = {
    boardContainer: document.querySelector('.board-container'),
    board: document.querySelector('.board'),
    moves: document.querySelector('.moves'),
    //timer: document.querySelector('.timer'),
    start: document.querySelector('button'),
    win: document.querySelector('.win')
}
const state = {
    gameStart: false,
    cardsFlipped: 0,
    flipsTotal: 0,
    timeTotal: 0,
    loop: null
}

const shuffle = array => {
    const clonedArray = [...array]

    for (let index = clonedArray.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index +1))
        const original = clonedArray[index]
        
        clonedArray[index] = clonedArray[randomIndex]
        clonedArray[randomIndex] = original
    }

    return clonedArray
}

const randomPick = (array, items) => {
    const clonedArray = [...array]
    const picksRandom = []

    for (let index = 0; index < items; index++) {
        const randomIndex = Math.floor(Math.random() * clonedArray.length)

        random.push(clonedArray[randomIndex])
        clonedArray.splice(randomIndex, 1)
    }
    return picksRandom
}