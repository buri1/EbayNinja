const MongoClient = require('mongodb').MongoClient;

const url ='mongodb+srv://buri:N0dYEXfgabOW17oD@cluster0.9xxdj.mongodb.net/?retryWrites=true&w=majority';

const createUser = async (req, res, next) => {

    const newUser = {
        name: "req.body.name",
        email: "req.body.email",
        pw: "req.body.pw",
        MessageTemplates: "",
        AdTemplates: "",
        SearchUrls:""
    };
   const client = new MongoClient (url);
   try {
    await client.connect();
    const db = client.db();
    const result = db.collection('usor').insertOne(newUser);


   } catch (error) {
    return res.json({message: 'could not store data.'});
   };
   client.close();

   res.json(newUser);

};

const getUser = async (req, res, next) => {


};

exports.createUser = createUser;
exports.getUser = getUser;