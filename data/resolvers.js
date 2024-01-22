import { reject } from 'lodash';
import { Widgets } from './dbConnectors';

class Product {
    constructor(id, {name, description, price, soldout, inventory, stores}) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.soldout = soldout;
        this.stores = stores;
        this.inventory = inventory;
    }
}

const productDatabase = {};

const resolvers = {
    getProduct: ({ id }) => {
        return Widgets.findById({ _id: id })
            .then(product => {
                return product;
            })
            .catch(err => {
                throw err;
            });
    },
        // });//sometimes if there is any lag in mongo db, its gonna try to return result and if it doesnt return result it'll lead to an error
    createProduct: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        productDatabase[id] = input;
        return new Product(id,input)
    }//function for mutations
};

export default resolvers;