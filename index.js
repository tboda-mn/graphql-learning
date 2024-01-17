import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema'

const app = express();

app.get('/',(req,res) => {
    res.send('Graphql is chillar')
});

const root = { product: () => {
    return {
        "id":1,
        "name": "widget",
        "desc": "good widget",
        "price": 250.99,
        "soldOut": false
    }
}
}; //create a response

app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}))
app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'))