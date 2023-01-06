import { db } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useAuth } from "../contexts/auth-context";

function CreateKaam({inserted}){
    const { currentUser } = useAuth()
    const kaamRef = collection(db, 'kaams')

    const [kaam, setKaam] = useState("");
    const [isCompleted, setIsCompleted] = useState(false)
    const [kaamErr, setKaamErr] = useState("")
    const [insertLoading, setInsertLoading] = useState(false)

    function HandleSubmit(e){
        e.preventDefault()
        setInsertLoading(true)
        if(kaam.length === 0){
            return setKaamErr("please enter your kaam")
        }
        let kaamData = {
            "kaam": kaam,
            "isCompleted": isCompleted,
            "user_id": currentUser.uid 
        }
        addDoc(kaamRef, kaamData).then(value => {
            setKaam("")
            setKaamErr("")
            inserted(true)
            setInsertLoading(false)
        }).catch(e => console.log(e))
    }

    function checkValue(value){
        if(value.length > 0){
            setKaamErr("")
        }else{
            setKaamErr("please enter your kaam")
        }
    }

    return <div className="create-kaam">
        <h2>
            Create Kaam
        </h2>
        <p>
            Create Your kaam And Start the Work
        </p>
        <form onSubmit={HandleSubmit}>
            <div className="form-field">
                <label htmlFor="kaam-input">Kaam:</label>
                <input type="text" value={kaam} id="kaam-input" onChange={e => {
                    setKaam(e.target.value)
                    checkValue(e.target.value)
                }} className={`${kaamErr.length === 0?"":"kaam-err"}`} placeholder="Enter your kaam" />
                <p className="kaam-error">{kaamErr}</p>
            </div>
            <div className="form-field">
                <label htmlFor="is-completed-input">Is Completed?:</label>
                <select id="is-completed-input" defaultValue="false" onChange={e => setIsCompleted(e.target.value)} >
                    <option value="false">
                        No
                    </option>
                    <option value="true">
                        Yes
                    </option>
                </select>
            </div>
            <div className="form-field">
                <button type="submit" disabled={insertLoading}>Add Kaam</button>
            </div>
        </form>
    </div>
}

export default CreateKaam;