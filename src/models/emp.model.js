import { Schema, model } from 'mongoose';

const userSchema = new Schema(
    {
    firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
      gender: {
        type: String,
      },
      department: {
        type: String,
      },
      company: {
        type: String,
      },
      salary: {
        type: Number,
      },
      startdate: {
        Type: Date
      },
    },
      {
          timestamps: true
      }
);

export default model('Employee', userSchema);