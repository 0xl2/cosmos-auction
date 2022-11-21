// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Naruto0913CosmosauctionCosmosauction from './naruto0913.cosmosauction.cosmosauction'


export default { 
  Naruto0913CosmosauctionCosmosauction: load(Naruto0913CosmosauctionCosmosauction, 'naruto0913.cosmosauction.cosmosauction'),
  
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}