export const GetData =async(product)=>{
    const response = await fetch(product,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        },
    })
    const result = response.json()
    return result
}