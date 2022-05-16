
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
        return await storageService.query()
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

  



