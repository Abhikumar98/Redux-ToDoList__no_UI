export const saveTolocalstorage = (state) => {
    try{
        const serializeState = JSON.stringify(state);
        localStorage.setItem('state', serializeState);
        console.log('state saved');
        
    }
    catch(err){

    }
}

export const loadState = () => {
    try{
        const deserializedState = localStorage.getItem('state');
        if(deserializedState === null) return undefined;
        console.log(deserializedState);
        
        return JSON.parse(deserializedState);
    }
    catch(err){
        console.log(err);
        return undefined;
        
    }
}