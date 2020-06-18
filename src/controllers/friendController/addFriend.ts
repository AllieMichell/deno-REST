import { friend } from '../../models/config/dbconnect.ts';

// This is the function that adds a friend to the database
export const addFriend = async(context:any) => {
    try { 
        // accesing data from the request body is
        let body: any = await context.request.body()
        const {name, pno, email} = body.value

        // inserting into the db
        const id = await friend.insertOne({
            name:name, 
            pno:pno,
            email: email
        })

        // sending the response 
        context.response.body = id
        context.response.status = 201
    }
    // when the insertion fails
    catch (err) {
        context.response.body = null
        context.response.status = 500
        console.log(err)
    } 
}