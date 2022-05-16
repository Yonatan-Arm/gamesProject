
import { utilService } from './util-service.js'
import { storageService } from './async-storage-service.js'




const ENDPOINT = 'item'
const item_KEY = 'item_db'


export const itemService = {
    query,
    getById,
}




async function query(filterBy) {
    try {
        const items= await storageService.query(filterBy)
        const filteredItems = await _filter(items, filterBy.name)
        return filteredItems.slice(0,50)
    } catch {
        console.error('cannot load items')
    }
}


async function getById(id) {
    try {
       return await  storageService.get(id)
    } catch (err) {
        console.log('cannot get item by id', err);
    }
}
 function _filter(items, filterBy){
    const regex = new RegExp(filterBy, "i");
    return  items.filter((item) => regex.test(item.title))
 }
  



  
    //  return this.mails.filter((mail) => regex.test(mail.body) || regex.test(mail.name));