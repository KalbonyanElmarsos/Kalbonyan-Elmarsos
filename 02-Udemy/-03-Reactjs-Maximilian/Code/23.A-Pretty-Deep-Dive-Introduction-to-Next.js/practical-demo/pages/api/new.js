import { MongoClient } from "mongodb";

// ---- this end point will not appear in the client side

// Route- api/new-meetup    end-Point
async function handler(req, res) {
  if (req.method === "POST") {
    // const { title, description, address, image } = req.body;
    const connection = await MongoClient.connect(
      "mongodb+srv://mahmoud:admin@taskmanagerdb.rd2ff.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = connection.db();

    const meetUpCollection = db.collection("meetups");

    const result = await meetUpCollection.insertOne(req.body);

    connection.close();

    res.status(200).json({ mesg: "new item inserted ", payload: result });
  }
}
export default handler;
