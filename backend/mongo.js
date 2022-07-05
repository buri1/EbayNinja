const MongoClient = require('mongodb').MongoClient;

const url ="mongodb+srv://12347:12347@cluster0.9xxdj.mongodb.net/?retryWrites=true&w=majority";




const createUser = async (req, res, next) => {
    const newUser = {

        adTemplates: req.body.adTemplates,
        searchUrls: req.body.searchUrls
    };

    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });


   
   try {
    await client.connect();
    const db = client.db("User");
    const result = await db.collection("User").insertOne(newUser);
    res.json(newUser)
    


   } catch (error) {
    return res.json({message: 'could not store data.'});
   };
   client.close();

   

};

const getUser = async (req, res, next) => {
    const client = new MongoClient (url);
    try {
     await client.connect();
     const db = client.db();
     const user = await db.collection('').find().toArray();

    } catch (error) {
        return res.json({message: 'could not get data.'});
       };
       client.close();
    
       res.json(user);

};

exports.createUser = createUser;
exports.getUser = getUser;