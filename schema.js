import { buildSchema } from "graphql";

const schema = buildSchema(`
            type Product {
                id: ID
                name: String
                desc: String
                price: Float
                soldOut: Boolean
                stores: [Store]!
            }

            type Query {
                product: Product 
            }

            type Store {
                store: String
            }

`)//when we are asking a query with hello, it's simply going to return a string

export default schema; 