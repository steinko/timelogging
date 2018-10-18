import uuidv4 from 'uuid/v4'
export default class Helper {
    newTimer( timer) {
        
        return { id: uuidv4(),
                 title: '' }
     }
}