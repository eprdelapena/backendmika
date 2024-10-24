import mongoose, { Schema } from "mongoose";
const commentsSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    }
});
const scomments = mongoose.model("scomments", commentsSchema);
export default scomments;
