const {MongoClient} = require('mongodb');

async function main() {

    const uri= "mongodb+srv://samini:AppleDogsHate9Yams@cluster0.sjroo.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(uri);
    try {
        await client.connect();
        
        await deleteByName(client, "Big Thing");
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}   

main().catch(console.error);

async function deleteByName(client, nameOfListing) {    
       await client.db("sample_airbnb").collection("listingsAndReviews").deleteOne({ name: nameOfListing});

       console.log(` document(s) deleted`)
       
}

