import mongoose, {Document, Schema} from "mongoose";

interface Icomments extends Document {
    username: string,
    comment: string
}

const commentsSchema = new Schema<Icomments>({
    username: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    }
})

const scomments = mongoose.model<Icomments>("scomments", commentsSchema);

export default scomments