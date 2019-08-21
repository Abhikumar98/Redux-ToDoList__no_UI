let id = 1;
export const addTodo = (text) => ({
        type: 'ADD_TODO',
        text,
        id: id++
    })

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})

export const VisibilityFilter = filter =>({
    type: 'SET_VISIBILITY_FILTER',
    filter
})