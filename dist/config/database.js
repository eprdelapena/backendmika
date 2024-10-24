import mongoose from "mongoose";
import CONNECTIONSTATES from "../enums/econnectionstates.js";
class ClassDatabase {
    constructor() {
        this.isConnected = null;
    }
    static createInstance() {
        if (!this.instance) {
            this.instance = new ClassDatabase();
        }
        return this.instance;
    }
    async connectDB() {
        if (this.isConnected === CONNECTIONSTATES.connected) {
            console.log("There is an existing connection");
            return;
        }
        const response = await mongoose.connect(`${process.env.DATABASENAME}`);
        this.isConnected = response.connections[0].readyState;
        console.log("Database connected");
    }
    async disconnectDB() {
        if (this.isConnected) {
            const response = await mongoose.connection.close();
            this.isConnected = null;
            console.log("database disconnected");
            return;
        }
        return;
    }
}
const instanceConnection = new ClassDatabase();
export default instanceConnection;
// const connection: {isConnected?: number} = {}
// export const connectDB = async () => {
//     try{
//         if(connection.isConnected === CONNECTIONSTATES.connected){
//             console.log("existing connection");
//             return;
//         }
//         console.log("connecting to the database");
//         const response = await connect(`${process.env.DATABASENAME}`);
//         connection.isConnected = response.connections[0].readyState
//         console.log("Database connected");
//     }
//     catch(error){
//         console.error(error);
//     }
// }
// export const disconnectDB = async () => {
//     if(connection.isConnected){
//         await mongoose.connection.close();
//         connection.isConnected = CONNECTIONSTATES.disconnected;
//         console.log("database connection closed");
//     }
// }
// export const exitFunction = () => {
//     process.on("SIGINT", async () => {
//         await disconnectDB();
//         process.exit(0);
//     })
// }
