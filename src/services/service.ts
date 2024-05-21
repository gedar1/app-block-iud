

export const getInfo = async (id:any) => {
  console.log(id)
  try { let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`); 
        let data = await response.json();
        console.log(data); 
        return data;
      } 
        catch (error) { 
          console.log(error); 
        }
}

