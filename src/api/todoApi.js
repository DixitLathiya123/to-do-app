import useLocalStorage from '../hooks/useLocalStorage';

const BASE_URL = 'https://dummyjson.com/todos';

export const useTodos = () => {
    const [todos, setTodos] = useLocalStorage('todos', []);

    const fetchTodos = async () => {
        if (todos.length === 0) {
            try {
                const response = await fetch(`${BASE_URL}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch todos');
                }
                const data = await response.json();
                setTodos(data.todos); 
            } catch (error) {
                console.error('Error fetching todos:', error);
                throw error;
            }
        }
    };

    const addTodo = async (newTodo) => {
        try {
            const response = await fetch(`${BASE_URL}/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTodo),
            });
            if (!response.ok) {
                throw new Error('Failed to add todo');
            }
            const result = await response.json();
            setTodos((prevTodos) => [...prevTodos, result]); 
            return result;
        } catch (error) {
            console.error('Error adding todo:', error);
            throw error;
        }
    };

    const deleteTodo = async (id) => {
        try {
            const response = await fetch(`${BASE_URL}/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete todo');
            }
            const result = await response.json();
            setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id)); 
            return result;
        } catch (error) {
            console.error('Error deleting todo:', error);
            throw error;
        }
    };

    const updateTodo = async (id, updatedData) => {
        try {
            const response = await fetch(`${BASE_URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });
            if (!response.ok) {
                throw new Error('Failed to update todo');
            }
            const result = await response.json();
            setTodos((prevTodos) =>
                prevTodos.map((todo) => (todo.id === id ? result : todo))
            ); 
            return result;
        } catch (error) {
            console.error('Error updating todo:', error);
            throw error;
        }
    };

    return {
        todos,
        fetchTodos,
        addTodo,
        deleteTodo,
        updateTodo,
    };
};
