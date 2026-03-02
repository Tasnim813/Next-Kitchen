import { connect } from "@/app/lib/dbconnect";
import { feedback } from "../route";

export async function GET(request) {
    const feedbackCollection=connect("feedbacks")
    const result=await feedbackCollection.find().toArray()
    return Response.json(result)

}
export async function POST(request) {
    const {message}= await request.json()

    if(!message || typeof message !== "string"){
        return Response.json({
        status:400,
        message:"Please send a message"
    })

    }

    const newFeedback={message, id:feedback.length+1}
    feedback.push(newFeedback)
    return Response.json({
        acknowledged:true,
        insertedId:newFeedback.id,
    })

}