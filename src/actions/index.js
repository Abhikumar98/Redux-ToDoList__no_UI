export const addTodo = (text) => ({
        type: 'ADD_TODO',
        text,
        id: Date.now()
    })

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})

export const VisibilityFilter = filter =>({
    type: 'SET_VISIBILITY_FILTER',
    filter
})