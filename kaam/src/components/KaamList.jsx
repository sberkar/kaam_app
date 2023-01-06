import { collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../contexts/auth-context";
import { db } from "../firebaseConfig";

function KaamList({fatch, handleFatch}){
    const {currentUser} = useAuth();
    const [kaamData, setKaamData] = useState([]);

    const [kaamDataLoading, setKaamDataLoading] = useState(true)
    useEffect(() => {
        if(fatch){
            let q = query(collection(db, "kaams"), where("user_id", "==", currentUser.uid));

            getDocs(q).then(documents => {
                setKaamData([])
                documents.docs.forEach(doc => {
                    setKaamData(prev => {
                        return [...prev, doc.data()]
                    })
                })
                setKaamDataLoading(false);
                handleFatch(false)
                console.log(kaamData)
            }).catch(e => console.log(e))
        }
    }, [fatch, currentUser, handleFatch, kaamData])


    return <div>
        {kaamDataLoading && <div>Loading...</div>}
        {!kaamDataLoading && kaamData.forEach(doc => {
            return <div>{JSON.stringify(doc)}</div>
        })}
    </div>
}

export default KaamList;