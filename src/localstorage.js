export const saveTolocalstorage = (state) => {
    try{
        const serializeState = JSON.stringify(state);
        localStorage.setItem('state', serializeState);
    }
    catch(err){
        // do nothing
    }
}

export const loadState = () => {
    try{
        const deserializedState = localStorage.getItem('state');
        if(deserializedState === null) return undefined;
        return JSON.parse(deserializedState);
    }
    catch(err){
        return undefined;
    }
}