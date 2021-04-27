const baseUrl = "http://localhost:3001/todo";

const todoService = {
  // getAll är en property på todoService 
  getAll: async () => {
    //Hämta basUrl:n, dvs alla todos, svaret sparar vi i variabeln response
    const response = await fetch(baseUrl);
    //Om response är ok så omvandlar vi till json och sparar i result-variabel som vi returnerar
    if(response.ok){
      //Om vi får ok så gör vi om response till json och returnerar resultatet
      const result = await response.json();
      console.log("Glass");
      return result;
    }
    else {
      console.log("Get failed");
    }
    //Annars kastar vi ett fel
    /* throw new Error({
        status: response.status,
        statusText: response.statusText
    }); */
  },

  createTodo: async (newTodo) => {
    const response = await fetch(baseUrl, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    if(response.ok){
      //Om vi får ok så gör vi om response till json och returnerar resultatet
      const result = await response.json();
      return result;
    }
    else {
      console.log("Create failed");
    }
    /* throw new Error({
      status: response.status,
      statusText: response.statusText
    }); */
  },

  updateTodo: async (id, updatedTodo) => {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
      });
      if(response.ok){
        //Om vi får ok så gör vi om response till json och returnerar resultatet
        const result = await response.json();
        return result;
      }
      else {
        console.log("Create failed");
      }
      /* throw new Error({
        status: response.status,
        statusText: response.statusText
      }); */
  },

  deleteTodo: async (id) => {
    const response = await fetch(`${baseUrl}/${id}`, {method: "DELETE"});
    if(response.ok){
      //Om vi får ok så gör vi om response till json och returnerar resultatet
      const result = await response.json();
      return result;
    }
    else {
      console.log("Create failed");
    }
    /* throw new Error({
      status: response.status,
      statusText: response.statusText
    }); */
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