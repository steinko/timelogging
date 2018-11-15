import uuidv4 from 'uuid/v4'
export default class Helper {
    newTimer( timer) {
        const helperTimer  = { id: uuidv4(),
                              title:timer.title}
        return helperTimer
    }
}