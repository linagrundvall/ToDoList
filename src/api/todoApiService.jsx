

  const baseUrl = "http://localhost:3001";

  const todoService = {
    // getAll är en property på todoService 
    getAll: async () => {
      //Hämta basUrl:n, dvs alla todos, svaret sparar vi i variabeln response
      const response = await fetch(`${baseUrl}/todo`);
      //Om response är ok så omvandlar vi till json och sparar i result-variabel som vi returnerar
      if(response.ok){
        const result = await response.json();
        return result;
      };
      //Annars kastar vi ett fel
      throw new Error({
          status: response.status,
          statusText: response.statusText
      });
    },
  };


export default todoService; 




//Gamla
/* function createTodoApiService() {
    const apiAddress = "http://localhost:3001";
  
    return {
      getAll: async () => {
        // GET api/todo
        const result = await fetch(`${apiAddress}/todo`);
        return await result.json();
      },
      getTodo: async (id) => {
        // GET api/todo/:id
        const result = await fetch(`${apiAddress}/todo/${id}`);
        return await result.json();
      },
      createTodo: async (title, description) => {
        // POST api/todo/
            //   body:
            //   {
            //       title:string,
            //       description:string (optional)
             //  }
          
        const todo = {
          title,
          description,
        };
  
        const result = await fetch(`${apiAddress}/todo`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(todo),
        });
        return await result.json();
      },
      updateTodo: async (id, updatedTodo) => {
        // PUT api/todo/:id
            //   body:
             //  {
               //    id:string,
               //    title:string,
               //    description:string (optional),
               //    completed:boolean
               //}
          
        const result = await fetch(`${apiAddress}/todo/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedTodo),
        });
        return await result.json();
      },
      deleteTodo: async (id) => {
        // DELETE api/todo
        const result = await fetch(`${apiAddress}/todo/${id}`, {
          method: "DELETE",
        });
        return await result.json();
      },
    };
  }
   */