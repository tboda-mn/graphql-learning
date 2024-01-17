import { buildSchema } from "graphql";

const schema = buildSchema(`
            type Product {
                id: ID
                name: String
                description: String
                price: Float
                soldOut: Boolean
                inventory: Int
                stores: [Store]
            }

            type Query {
                getProduct(id: ID): Product 
            }

            type Store {
                store: String
            }

            input StoreInput {
                store: String
            }

            input ProductInput {
                id:ID
                name:String
                description:String
                price: Float
                soldOut: Boolean
                inventory: Int
                stores: [StoreInput]!
            }

            type Mutation {
                createProduct(input: ProductInput): Product
            }

`)//when we are asking a query with hello, it's simply going to return a string

export default schema; 