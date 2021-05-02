const baseUrl = "http://localhost:3001/todo";

const todoService = {
  //getOne är en property på todoService 
  //Här skickar vi in id och för att hämta todon som matchar det id:t
  getOne: async (id) => {
    //Hämtar basUrl:n och det id vi skickat in, svaret sparar vi i variabeln response
    const response = await fetch(`${baseUrl}/${id}`);
    //Om response är ok så omvandlar vi response till json, sparar i result-variabel och returnerar resultatet
    if (response.ok) {
      const result = await response.json();
      return result;
    }
    //Annars kastar vi ett fel
    throw new Error({
      status: response.status,
      statusText: response.statusText
    });
  },

  // getAll är en property på todoService 
  getAll: async () => {
    //Hämta basUrl:n, dvs alla todos, svaret sparar vi i variabeln response
    const response = await fetch(baseUrl);
    //Om response är ok så omvandlar vi response till json, sparar i result-variabel och returnerar resultatet
    if (response.ok) {
      const result = await response.json();
      return result;
    }
    //Annars kastar vi ett fel
    throw new Error({
      status: response.status,
      statusText: response.statusText
    });
  },

  // createTodo är en property på todoService 
  //Här skickar vi in data för en nyskapad todo (newTodo) och för att skapa den
  createTodo: async (newTodo) => {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    //Om response är ok så omvandlar vi response till json, sparar i result-variabel och returnerar resultatet
    if (response.ok) {
      const result = await response.json();
      return result;
    }
    throw new Error({
      status: response.status,
      statusText: response.statusText
    });
  },
  // updateTodo är en property på todoService 
  //Här skickar vi in id och data för en updaterad todo (updatedTodo) för att uppdatera den
  updateTodo: async (id, updatedTodo) => {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    });
    //Om response är ok så omvandlar vi response till json, sparar i result-variabel och returnerar resultatet
    if (response.ok) {
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

  // deletTodo är en property på todoService 
  //Här skickar vi in id och för att ta bort todon som matchar det id:t
  deleteTodo: async (id) => {
    const response = await fetch(`${baseUrl}/${id}`, { method: "DELETE" });
    //Om response är ok så omvandlar vi response till json, sparar i result-variabel och returnerar resultatet
    if (response.ok) {
      const result = await response.json();
      return result;
    }
    //Annars kastar vi ett fel
    throw new Error({
      status: response.status,
      statusText: response.statusText
    });
  },
};

//Här exporterar vi todoService
export default todoService;
