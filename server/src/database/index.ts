import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/pizzasdb').then(() => {
  console.log('📦 Banco de dados conectado');
});
