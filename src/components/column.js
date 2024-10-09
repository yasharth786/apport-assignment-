import { useContext } from "react"
import { Context } from "../context/context"
import Card from "./card.js"
import add from '../assests/add.svg'
import dots from '../assests/3dotmenu.svg'
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
import '../styles/column.css'
import '../styles/card.css'
import Profile from "./profile.js"

const Column = ()=>{

    const {tickets , users , grouping , ordering , loading} = useContext(Context)
    const priority = [
        { name: "No Priority", value: 0, img: noPriority },
        { name: "Low", value: 1, img: ImgLowPriority },
        { name: "Medium", value: 2, img: ImgMediumPriority },
        { name: "High", value: 3, img: ImgHighPriority },
        { name: "Urgent", value: 4, img: UrgentPriority }
      ]
    
      const status = [
        { name: "Backlog", value: "Backlog", img: Backlog },
        { name: "Todo", value: "Todo", img: Todo },
        { name: "In Progress", value: "In progress", img: InProgress },
        { name: "Done", value: "Done", img: Done },
        { name: "Cancelled", value: "Cancelled", img: Cancelled }
      ]
    
      const heads = grouping === 'Priority' ? priority :
        grouping === 'Status' ? status : users.map(user => ({
          name: user.name,
          value: user.id,
          img: null
        })) 
    
      const filteredTickets = (group) => {
        if (loading || !tickets) return []; 
        if (grouping === 'Priority') {
          return tickets.filter(ticket => ticket.priority === group.value);
        } else if (grouping === 'Status') {
          return tickets.filter(ticket => ticket.status === group.value);
        } else if (grouping === 'User') {
          return tickets.filter(ticket => ticket.userId === group.value);
        }
        return []
      }

    const Comp = ({img , name , tickets})=>{
        let user = null
        if(grouping==='User'){
            user = users.find(user => user.name === name);
        }

        const sortedTickets = tickets.sort((a, b) => {
            if (ordering === 'Title') return a.title.localeCompare(b.title)
            else if (ordering === 'Priority') return -(a.priority-b.priority)
            return 0
        })

        return(
            <>
                <div className="topbar-card">
                    <div className="name-wrapper" style={{display:'flex' , alignItems:'center' , gap:'10px'}}>
                        {grouping!=='User'?<img src={img} alt=""/>:<Profile user={user}/>}
                        {name} {tickets.length}</div>
                    <div style={{display:'flex' , alignItems:'center' , gap:'10px'}}><img src={add} alt=""/><img src={dots} alt=""/></div>
                </div>
                <div className="tickets-outer">
                <div className="tickets-wrapper">
                    {sortedTickets.map(ticket => (
                        <div key={ticket.id} className="ticket-item">
                        <Card ticket={ticket}/>
                        </div>
                    ))}
                </div>
                </div>
            </>
        )
    }

    return(
        <div className="main-outer-wrapper">
            <div className="inner-wrapper">
            {heads.map((head,index)=>{
                const filtered = filteredTickets(head);
                return(
                    <div className="comp-wrapper" key={index}>
                        <Comp img={head.img} name={head.name} tickets={filtered}/>
                    </div>
                )
            })}
            </div>

            
        </div>
    )
}
export default Column