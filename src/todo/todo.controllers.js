const todoDB = [ 
    {
     id:1,
     title: "Do pokedex", 
     description: "learn Redux Toolkit",
     complete: false
     },
     {
      id:2,
      title: "Speak my friend ", 
      description: "Speak about thesis",
      complete: false
      },
    ]


const getAllTodos = () => {
    return todoDB
  }
  

  const getTodoById = (id) => {
    const filteredDB =todoDB.filter((item) =>item.id === id);
    return filteredDB[0]
  }
  


  const createTodo = (todoObj) => {
    if (todoDB.length === 0) {
      const newTodo = {
     id:1,
     title: todoObj.title, 
     description:todoObj.description,
     complete:todoObj.complete

      }
       todoDB.push(newTodo)
      return newTodo
    }


    const newTodo= {
      id: todoDB[todoDB.length - 1].id + 1,
      title: todoObj.title, 
       description:todoObj.description,
       complete:todoObj.complete
      
    }
     todoDB.push(newTodo);
    return newTodo
  }

  
  const deleteTodo =(id) =>{
    const index = todoDB.findIndex((item)=> item.id === id)
    if(index!==-1){
      todoDB.splice(index, 1)
      return true
    }
    return false
  }

 const editTodo= (id, data) =>{
  const index = todoDB.findIndex ((item)=> item.id === id)
  if(index!==-1){
    todoDB [index] =data
    return todoDB[index]
  } else {
    createTodo (data)
    return todoDB.at(-1)
  }

 }

  
  module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    deleteTodo,
    editTodo
  }