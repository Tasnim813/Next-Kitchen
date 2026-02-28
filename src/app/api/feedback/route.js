import { feedback } from "../route";

export async function GET(request) {
    return Response.json(feedback)

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