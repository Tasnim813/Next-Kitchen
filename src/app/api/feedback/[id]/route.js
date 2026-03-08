
import { connect } from "@/app/lib/dbConnect"
import { ObjectId } from "mongodb";


const feedbackCollection=connect("feedbacks")

export async function GET (request, {params}){

    const {id}= await params;
    if(id.length !== 24){
        return Response.json({
            status:400,
            message:" Send correct _id"
        })
    }
    const query={_id: new ObjectId(id)} 
    const result=await feedbackCollection.findOne(query)
 
    return Response.json(result)
}
export async function DELETE (request, {params}){

    const {id}= await params;
    if(id.length !== 24){
        return Response.json({
            status:400,
            message:" Send correct _id"
        })
    }
    const query={_id: new ObjectId(id)} 
    const result=await feedbackCollection.deleteOne(query)
 
    return Response.json(result)
}