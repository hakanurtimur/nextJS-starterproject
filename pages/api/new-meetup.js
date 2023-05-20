import { MongoClient } from "mongodb"; //import ediyoruz

async function handler(req, res) {
    
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect('mongodb+srv://hakanurtimur:34350q@cluster0.9ouy84u.mongodb.net/meetups?retryWrites=true&w=majority'); // şifre ve kullnıcı adı
    const db = client.db(); // database i yakalamak için bu methodu kullanıyoruz

    const meetupsCollection = db.collection("meetups"); // koleksiyonu çekiyoruz

    const result = await meetupsCollection.insertOne(data); // insert sonucunu göster
    console.log(result);

    client.close(); // ve bağlantıyı kapatıyoruz

 
      res.status(201).json({ message: "Meetup sended!" });
  
  }
}

export default handler;
