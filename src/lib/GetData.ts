export const GetData =async(data)=>{
    const response = await fetch(data,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        },
    })
    const result = response.json()
    return result
}