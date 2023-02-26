

export function fetchEmployees(object){
    return function(dispatch){
        let url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch({type: 'ADD_EMPL_LIST', payload: data}))
    }
}



