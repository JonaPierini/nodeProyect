const allData = async ()  => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    const result = await data.json()
    return result
}

allData().then((resp)=> console.log(resp))