import { useContext } from "react"
import { Context } from "../context/context"
import noPriority from '../assests/Nopriority.svg'
import ImgHighPriority from '../assests/ImgHighPriority.svg'
import ImgLowPriority from '../assests/ImgLowPriority.svg'
import ImgMediumPriority from '../assests/ImgMediumPriority.svg'
import UrgentPriority from '../assests/UrgentPrioritycolour.svg'
import Backlog from '../assests/Backlog.svg'
import Cancelled from '../assests/Cancelled.svg'
import Done from '../assests/Done.svg'
import InProgress from '../assests/in-progress.svg'
import Todo from '../assests/To-do.svg'
import Profile from "./profile"

const Card = ({ticket})=>{

    const {grouping , users} = useContext(Context)
    const user = users.find(user => user.id === ticket.userId);

    const map = {
        0: noPriority,             
        1: ImgLowPriority,     
        2: ImgMediumPriority,      
        3: ImgHighPriority,       
        4: UrgentPriority ,
        "Backlog": Backlog,  
        "Todo": Todo,             
        "In progress": InProgress, 
        "Done": Done,           
        "Cancelled": Cancelled   
    }

    return(
        <>
        <div>
        <div className="id-wrapper">
            {ticket.id}
            { 
                grouping!== 'User' &&
                <Profile user={user}/>
            }
        </div>
        <div className="title-wrapper">
            {
                grouping!=='Status' &&
                <img style={{marginTop:'4px'}} src={map[ticket.status]}/>
            }
            {(ticket.title).substring(0,40)} {(ticket.title).length>40 && "..."}
        </div>
        </div>
        <div className="tag-wrapper">
            {
                grouping!=='Priority' &&
                <div className="tag-img">
                    <img src={map[ticket.priority]}/>
                </div>
            }
            {
            (ticket.tag).map((tag)=>{
                return(
                    <div className="tags-box">{tag}</div>
                )
            })
            }
        </div>
        </>
    )
}
export default Card