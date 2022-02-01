
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  // mongodb://localhost:27017/test is the database
  await mongoose.connect('mongodb://localhost:27017/fruitsDB');
    console.log("Connected successfully to server");

    const fruitSchema = new mongoose.Schema({
      name: String,
      rating: Number,
      review: String
    });

    // Creat Model to create table----Tablename(Fruit)(converts to plural in db) refrence to schema
    const Fruit = mongoose.model('Fruit', fruitSchema);

    // create table with documents

    const fruit = new Fruit({
      name: "Apple",
      rating: 5,
      review: "what a great apple"
    })

    const kiwi = new Fruit({
      name:"Kiwi",
      rating:8,
      review: "best kiwi in the town"
    })
    const banana = new Fruit({
      name:"Banana",
      rating:8,
      review: "best banana in the town"
    })
    const peopleSchema = new mongoose.Schema({
      name:String,
      age:Number
    })

    const People = mongoose.model('People', peopleSchema);
    const people = new People({
      name:"John",
      age: 32
    })

// ############# DELETE ALL DOCUMENTS FROM FRUITS COLLECTION
    // Fruit.deleteMany({},function(err){
    //   if(err){
    //     console.log(err);
    //   }else{
    //     console.log("DELETED");
    //   }
    // });



    // banana.save();
    // kiwi.save();
    // people.save();
    // fruit.save();

// ############# ADD ALL DOCUMENTS FOR FRUITS COLLECTION
    // Fruit.insertMany([banana,kiwi,fruit],function(err){
    //   if(err){
    //     console.log(err);
    //   }else{
    //     console.log("added");
    //   }
    // });

    // ############# READ/FINDS ALL DOCUMENTS FROM FRUITS COLLECTION
        Fruit.find(function(err, fruits){
          if(err){
            console.log(err);
          }else{
            // console.log(fruits);

            // #####################CLOSE CONNECTION
            mongoose.connection.close();

            //############# READ ONLY NAMES FROM ARRAY 
            fruits.forEach(function(fruit){
              console.log(fruit.name);
            })
          }
        });









}
