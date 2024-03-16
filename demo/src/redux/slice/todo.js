import {createSlice,createAsyncThunk, isFulfilled, isRejected} from '@reduxjs/toolkit'

export const fetchtodos= createAsyncThunk('fetchtodos',async()=>
{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return response.json();
})

const todoslice = createSlice({

        name:todo,
        initialState:
        {
            isLoading:false,
            data:null,
            isError:false
        },
        extraReducers:(builder)=>{
            builder.addCase(fetchtodos.pending,(state,action)=>
            {
                state.isLoading=true;
            })
            builder.addCase(fetchtodos,isFulfilled,(state,action)=>
            {
                state.isLoading=false;
                state.data=action.payload;
            })
            builder.addCase(fetchtodos,isRejected,(state,action)=>
            {
                state.isError=true;
            })
        }
})
export default todoslice.reducer