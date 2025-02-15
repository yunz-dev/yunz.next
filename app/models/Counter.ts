import mongoose from "mongoose";

const CounterSchema = new mongoose.Schema({
  count: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Counter = mongoose.models.Counter || mongoose.model("Counter", CounterSchema);

export default Counter;
