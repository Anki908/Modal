import { useEffect } from "react"
const Comp = ({props}) => {
    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return  () => {
            document.body.style.overflowY = "scroll";
        }
    })
    return(
        <>
        <div className = "model-wrapper" onClick={props}></div>
        <div className = "model-container">
            <p>Hello bhaiyo Ye hamara Pop Up Notification Hai</p>
            <button onClick = {props}>Close</button>
        </div>
        </>
    )
}
export default Comp