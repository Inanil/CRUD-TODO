
    1.Definir las rutas
    1.Definir los verbos de cada ruta

     /todo

    GET (obtener todos las tareas)
    POST (crear una nueva tarea) /todo/:id
    GET (obtener  una tarea en especifico)
    PUT (editar tarea )
    PATCH (editar tarea)
    DELETE (eliminar tarea)

    Crear los controladores

    const getAllTodos = () => {
        return todoDB
    }

    Crear los servicios
    Crear las rutas
