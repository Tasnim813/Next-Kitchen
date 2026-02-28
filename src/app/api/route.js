export const feedback = [
    {   id:1,
        message:'Khabar khub moja silo'
    },
    {   id:2,
        message:'Waiter der babopher aro balo kora chai'
    }
]

export async function GET(request) {

    return Response.json({
        status: 200,
        message:"Yahoo api is created"
    })
}