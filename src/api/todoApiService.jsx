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
      return result;
    }
    //Annars kastar vi ett fel
    throw new Error({
        status: response.status,
        statusText: response.statusText
    });
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
    throw new Error({
      status: response.status,
      statusText: response.statusText
    });
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
      throw new Error({
        status: response.status,
        statusText: response.statusText
      });
  },

  deleteTodo: async (id) => {
    const response = await fetch(`${baseUrl}/${id}`, {method: "DELETE"});
    if(response.ok){
      //Om vi får ok så gör vi om response till json och returnerar resultatet
      const result = await response.json();
      return result;
    }
    throw new Error({
      status: response.status,
      statusText: response.statusText
    });
  },


};


export default todoService; 
