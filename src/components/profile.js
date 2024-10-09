const Profile = ({user})=>{
    const name = user.name
    const available = user.available
    const arr = name.split(" ")
    const init = arr[0][0].toUpperCase()+(arr.length>1?arr[1][0].toUpperCase():(arr[0].length>1?arr[0][1].toUpperCase():""))
    const col = `rgb(${Math.floor(Math.random()*256)} , ${Math.floor(Math.random()*256)} , ${Math.floor(Math.random()*256)})`
    return(
        <div style={{position:"relative",width: "20px",height: "20px",borderRadius: "50%",backgroundColor:col===`rgb(256,256,256)`?"black":col,display: "flex",justifyContent: "center",alignItems: "center",color: "white",fontWeight: "bold",fontSize: "0.7rem"}}>
            {init}
            <div style={{ position:"absolute",bottom:"-2px",right:"-2px",width:"6px",height:"6px",borderRadius:"50%",backgroundColor:available?"green":"gray",border:"2px solid white" }} />
        </div>
    )
}
export default Profile