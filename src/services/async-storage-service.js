import axios from 'axios' 
export const storageService = {
    query,
    get,
    post,
    put,
    remove,
    postMany
}


const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  headers: {
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    'X-RapidAPI-Key': '0b2f281ac1msh132fb1220e1ff40p1e3abcjsn9ca99561f4c5'
  }
};




async function loadGames(){
    const res =  await axios.request(options)
 try{
        return res.data
    }
    catch (err){
        console.error(err);
    };
}


 async function query(delay = 300) {
    var entities = JSON.parse(localStorage.getItem('items_games')) || []
    if(!entities.length ) entities = await loadGames()
    _save('items_games', entities) 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(entities)
        }, delay)
    })
}


async function get(id) {
    const items = await query()
    return items.find(item => item.id.toString() === id) 
}

async function post(entityType, newEntity) {
    newEntity._id = _makeId()
    const items = await query(entityType)
         items.push(newEntity);
         _save(entityType, items)
            return newEntity;
}

async function postMany(entityType, newEntities) {
    const items = await query(entityType)
         items.push(...newEntities);
         _save(entityType, items)
            return items;
}

async function put(entityType, updatedEntity) {
    const items = await  query(entityType)
            const idx = items.findIndex(entity => entity._id === updatedEntity._id);
            items.splice(idx, 1, updatedEntity)
            _save(entityType, items)
            return updatedEntity;
}

async function remove(entityType, entityId) {
    const items = await query(entityType)
            const idx = items.findIndex(entity => entity._id === entityId);
            if (idx === -1) return Promise.reject(`Unknown Entity ${entityType} with Id: ${entityId}`)
            items.splice(idx, 1)
            _save(entityType, items)
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}
