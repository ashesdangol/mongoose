
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  // mongodb://localhost:27017/test is the database
  await mongoose.connect('mongodb://localhost:27017/fruitsDB');
    console.log("Connected successfully to server");

    const fruitSchema = new mongoose.Schema({
      name: {
        type: String,
        required:[1,"Fruit name is required"]
      },
      rating: {
        type: Number,
        min:1,
        max:10,
      },
      review: String
    });

    // Creat Model to create table----Tablename(Fruit)(converts to plural in db) refrence to schema
    const Fruit = mongoose.model('Fruit', fruitSchema);

    // create table with documents

    const fruit = new Fruit({
      name: "apple",
      rating: 9,
      review: "what a great apple"
    })

    const kiwi = new Fruit({
      name:"Kiwi",
      rating:7,
      review: "best kiwi in the town"
    })
    const banana = new Fruit({
      name:"Banana",
      rating:8,
      review: "best banana in the town"
    })

    const mango = new Fruit({
      name:"Mango",
      rating:10,
      review: "best Mango in the town"
    })



    const peopleSchema = new mongoose.Schema({
      name:String,
      age:Number,
      favouriteFruite: fruitSchema
    })

    const People = mongoose.model('People', peopleSchema);

    const people = new People({
      name:"John",
      age: 32
    })
    const amy = new People({
      name:"Amy",
      age: 12,
      favouriteFruite:banana
    })

// add fruit and updated john with fav fruit
  mango.save();
  People.updateOne({name:"John"}, {favouriteFruite:mango}, function(err){
    if(err){
      console.log(err);
    }else{
      console.log("successfully updated the document")
    }
  });

// ############# DELETE ALL DOCUMENTS FROM FRUITS COLLECTION
    // Fruit.deleteMany({},function(err){
    //   if(err){
    //     console.log(err);
    //   }else{
    //     console.log("DELETED");
    //   }
    //   mongoose.connection.close();
    // });


    // banana.save();
    // kiwi.save();
    // people.save();
    // fruit.save();
    // amy.save();

// ############# ADD ALL DOCUMENTS FOR FRUITS COLLECTION
    // Fruit.insertMany([banana,kiwi,fruit],function(err){
    //   if(err){
    //     console.log(err);
    //   }else{
    //     console.log("added");
    //   }
    // mongoose.connection.close();
    // });

// ###################### UPDATE THE DOCUMENTS
    // Fruit.updateOne({_id:1},{name:"peach"}, function(err){
    //   if(err){
    //     console.log(err);
    //   }else{
    //     console.log("successfully updated the document");
    //   }
    //   mongoose.connection.close()
    // });

    // ############# READ/FINDS ALL DOCUMENTS FROM FRUITS COLLECTION
        // Fruit.find(function(err, fruits){
          // if(err){
          //   console.log(err);
          // }else{
            // console.log(fruits);

            // #####################CLOSE CONNECTION
            // mongoose.connection.close();

            //############# READ ONLY NAMES FROM ARRAY
        //     fruits.forEach(function(fruit){
        //       console.log(fruit.name);
        //     })
        //   }
        // });









}
