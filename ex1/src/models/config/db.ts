import { init, MongoClient } from "https://deno.land/x/mongo@v0.6.0/mod.ts";

// @ts-ignore
// INITIALIZE THE PLUGIN
await init();

class DB {
    public client: MongoClient;
    constructor(public dbName: string, public url: string) {
        this.dbName = dbName;
        this.url = url;
        this.client = {} as MongoClient;
    }
    connect() {
        const client = new MongoClient();
        client.connect(this.url);
        this.client = client;
    }
    get getDatabase() {
        return this.client.database(this.dbName);
    }
}

const dbName = Deno.env.get("DB_NAME") || "four_paws";
const dbHostUrl = Deno.env.get("DB_HOST_URL") || "mongodb://localhost:27017";
const db = new DB(dbName, dbHostUrl);
db.connect();

export default db;