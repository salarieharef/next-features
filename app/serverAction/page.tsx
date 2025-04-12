import { revalidatePath } from "next/cache";
import React from "react";

const ServerAction = () => {
    const handleAdd = async (formData:FormData)=> {
        
        "use server";
        
        const res = await fetch('https://673ef547a9bc276ec4b66ea0.mockapi.io/users/user', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                name: formData.get('name'),
                afe: formData.get('age')
            })
        });

        // console.log(formData.get('name'));
        // const obj= {
        //     name: formData.get('name'),
        //     desc: formData.get('desc')
        // }

        // const res = await axios.post('https://66e301e5494df9a478e3f4f6.mockapi.io/test/test' , obj)
    
        // console.log(res);
    
        // if (!res.ok) {
        //     throw new Error('Failed to add user');
        // }
    
    
        revalidatePath("/");

      }

  return (
    <div>
    <form action={handleAdd}>
      <input name="name" required />
      <input name="age" required />
      <button type="submit">Submit</button>
    </form>
  </div>
  )
};

export default ServerAction;
