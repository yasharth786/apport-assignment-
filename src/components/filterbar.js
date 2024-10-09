import { useContext, useEffect, useState } from 'react'
import display from '../assests/Display.svg'
import down from '../assests/down.svg'
import '../styles/filter.css'
import { Context } from '../context/context'

const FilterBar = ()=>{
    const [drop , setDrop] = useState(false)
    const [group , setGroup] = useState(false)
    const [order , setOrder] = useState(false)
    const {setGrouping , setOrdering , grouping , ordering} = useContext(Context)

    useEffect(()=>{
        if(grouping !== 'User')
        localStorage.setItem('group' , grouping)
    },[grouping])

    useEffect(()=>{
        localStorage.setItem('order' , ordering)
    },[ordering])

    return(
        <>
            <div className='navbar' style={{backgroundColor:'white' , position:'fixed' , top:'0px' , height:'30px' , display:'flex' , alignItems:'center' }}>
                <div className='display-btn-wrapper' style={{ height:'90%'}}>
                    <button onClick={()=>{setDrop(!drop)
                        setGroup(false)
                        setOrder(false)
                    }}
                     style={{display:'flex' , width:'100%' , height:'100%' , justifyContent:'space-around',  alignItems:'center' , border:'2px solid rgb(220, 220, 220)' , boxShadow:'2px 2px 4px rgb(240, 240, 240) ' , background:'transparent' , borderRadius:'4px'}}>
                        <img src={display} alt=''/>Display<img src={down} alt=''/>
                    </button>
                </div>
            </div>

            {
                drop &&
                <div className='drop-menu'>
                    <div className='filter-wrapper'>
                        <div className='filter-name'>Groupings</div>
                        <div className='filter-options'>
                            <button onClick={()=>{setGroup(!group)}}
                            style={{display:'flex', width:'80px' , justifyContent:'space-around',  alignItems:'center' , border:'2px solid rgb(220, 220, 220)' , boxShadow:'2px 2px 4px rgb(240, 240, 240) ' , background:'transparent' , borderRadius:'4px'}}>
                                {grouping}<img src={down} alt=''/>
                            </button>
                        </div>
                    </div>
                    {
                                group &&
                                <div className='options-menu'>
                                    {
                                        ["Status" , "User" , "Priority"].map((value)=>{
                                            return(
                                                <div onClick={()=>{setGrouping(value)
                                                    setGroup(false)
                                                }} style={{color:value===grouping?'red':'black'}}>{value}</div>
                                            )
                                        })
                                    }
                                </div>
                    }
                    <div className='filter-wrapper'>
                        <div className='filter-name'>Ordering</div>
                        <div className='filter-options'>
                            <button onClick={()=>{setOrder(!order)}}
                            style={{display:'flex', width:'80px' , justifyContent:'space-around',  alignItems:'center' , border:'2px solid rgb(220, 220, 220)' , boxShadow:'2px 2px 4px rgb(240, 240, 240) ' , background:'transparent' , borderRadius:'4px'}}>
                                {ordering}<img src={down} alt=''/>
                            </button>
                        </div>
                    </div>
                    {
                                order &&
                                <div className='options-menu'>
                                    {
                                        ["Priority" , "Title"].map((value)=>{
                                            return(
                                                <div onClick={()=>{setOrdering(value)
                                                    setOrder(false)
                                                }} style={{color:value===ordering?'red':'black'}}>{value}</div>
                                            )
                                        })
                                    }
                                </div>
                            }
                </div>
            }
        </>
    )
}

export default FilterBar