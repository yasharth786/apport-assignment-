import {createContext, useState,useEffect} from 'react'
import axios from 'axios'
export const Context = createContext()
export const ContextProvider = ({children})=>{
    const [tickets , setTickets] = useState(null)
    const [users , setUsers] = useState(null)
    
    const [loading, setLoading] = useState(true);

    const [grouping , setGrouping] = useState(localStorage.getItem('group')||'Status')
    const [ordering , setOrdering] = useState(localStorage.getItem('order')||'Priority') 
    
    useEffect(() => {
        const fetchApi = async()=>{
            try {
                const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
                const data = response.data;
                setTickets(data.tickets);
                setUsers(data.users);
            } catch (error) {
                console.error('Error fetching data:');
            } finally {
                setLoading(false);
            }
        }
        fetchApi()
    }, [])

    return(
        <Context.Provider value={{tickets , setTickets , users , setUsers , ordering , setGrouping , grouping , setOrdering , loading}}>
            {children}
        </Context.Provider>
    )
}