export const GetData =async(product)=>{
    const response = await fetch(product,{
        method:"GET",
        headers:{
            "content-type":"application/json"
        },
    })
    const result = response.json()
    return result
}