import { buildSchema } from "graphql";

const schema = buildSchema(`
            type Query {
                hello: String 
            }

`)//when we are asking a query with hello, it's simply going to return a string

export default schema; 