const express = require('express');
const app = express();
const router = express.Router();

exports.showHome = (req, res)=> {
let table = 5
    res.render('home', { table });
}
exports.getPhoneDetails = (req, res) => {
    console.log("in getPhoneDetails");
    let id = req.params.id;
    console.log(id);
    for (let i = 0; i < inventory.length; i++) {
        console.log(inventory[i].id)
        if (`${inventory[i].id}` === id){
            console.log("Match")
             res.render('showPhoneDetails', {
                 manufacturer: inventory[i].manufact,
                id: inventory[i].id,
                item: inventory[i].item,
                price: inventory[i].price,
                avail: inventory[i].avail,
                description: inventory[i].descr,
                colors: inventory[i].colors,
                 sale: inventory[i].sale,
            });
        }
    }
    res.render('phoneNotFound', {title:"Phone Not Found"});
}
exports.getCustomers = (req, res)=>{
    res.render('showCustomers', {});
}
//exports.getCustomers = (re)