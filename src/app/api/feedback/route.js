import { connect } from "@/app/lib/dbConnect"



const feedbackCollection=connect("feedbacks")
export async function GET(request) {
    
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

    const newFeedback={message, date: new Date().toISOString()}

    const result= await feedbackCollection.insertOne(newFeedback)
  
    return Response.json(result)

}