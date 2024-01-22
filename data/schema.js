import { buildSchema } from "graphql";

const schema = buildSchema(`
            type Product {
                id: ID
                name: String
                description: String
                price: Float
                soldout: Soldout
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
                soldout: Soldout
                inventory: Int
                stores: [StoreInput]!
            }

            enum Soldout {
                SOLDOUT
                ONSALE
            }

            type Mutation {
                createProduct(input: ProductInput): Product
            }

`)//when we are asking a query with hello, it's simply going to return a string, enum can contain only those 2 values => we can restrict it to
//take only those 2 values

export default schema; 