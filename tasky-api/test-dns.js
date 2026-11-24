import mongoose from 'mongoose';

await mongoose.connect(
  'mongodb+srv://20111314_db_user:UggFaXAKtcI9ywDA@cluster0.lneiiip.mongodb.net/tasky'
);

console.log('Connected');