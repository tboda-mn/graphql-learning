import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema'

const app = express();

app.get('/',(req,res) => {
    res.send('Graphql is chillar')
});

class Product {
    constructor(id, {name, description,price,soldout,stores}) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.soldOut = soldout;
        this.stores = stores;
    }
}

const productDatabase = {
     
};

const root = { product: () => {
    return {
        "id":1,
        "name": "widget",
        "desc": "good widget",
        "price": 250.99,
        "soldOut": false,
        "stores":[
            {store: "Lothukunta"},
            {store: "Balnagar"}
        ],
    }
},
    createProduct: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        productDatabase[id] = input;
        return new Product(id,input)
    }
}; //create a response

app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}))
app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'))