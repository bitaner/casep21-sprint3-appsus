export const eventBus = new Vue()


eventBus.$on('setBGC', (noteId, bgc) => {
    console.log('arrived to bus', noteId, bgc)
})


eventBus.$on('updateText', (note) => {
    console.log('arrived to bus', note)
})