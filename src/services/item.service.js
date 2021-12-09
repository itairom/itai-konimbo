'use strict';

import axios from 'axios';
import { Utils } from './utils.service'

let gItems = null

export default {
    query,
    getItemById,
    postDetails
};

async function query() {
    gItems = await fetch()
    Utils.storeToStorage('items', gItems)
    return gItems;
}

async function fetch() {
    const items = await axios.get('https://api.konimbo.co.il/v1/items?token=9c1a92bf8cefc59e4ec9fa7c53bba0f90dd8b15850bef1062dbf32c5e8fd3a08')
        .then(res => {
            console.log(res.data)
            return res.data
        })
    return items
}
async function postDetails(userInfo) {
    console.log('POST');
    const items = await axios.post('https://webhook.site/202838e1-803f-42d6-a494-fec5ab089a5b',
        { userInfo },
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            }
        })
}

function getItemById(id) {
    if (!gItems) query()
    const items = Utils.loadFromStorage('items')
    const filterItem = items.filter(item => {
        return item.id === id
    })
    return filterItem.shift()
}
