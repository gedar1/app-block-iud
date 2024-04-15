

export const getInfo = async () => {
  console.log('getInfo')
  try { let response = await fetch('https://jsonplaceholder.typicode.com/users/1'); 
        let data = await response.json();
        console.log(data); 
        return data;
      } 
        catch (error) { 
          console.log(error); 
        }
}

