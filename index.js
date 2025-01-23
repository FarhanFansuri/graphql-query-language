import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";

// here the server schema
const server = new ApolloServer({
    // typeDefs
    typeDefs
    // resolvers
}) 

const {url} = await startStandaloneServer(server,{
    listen: {
        port: 4000
    }
}).then(()=>{
    console.log('listen to port 4000!')
}).catch(()=>{
    console.log("something is wrong")
})