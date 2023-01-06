import CreateKaam from "./CreateKaam";
import KaamList from "./KaamList";

import { useState } from "react"

import "./css/Kaam.css";

function KaamSection(){
    const [onInsert, setOnInsert] = useState(true)

    return <div className="kaam">
        <KaamList fatch={onInsert} handleFatch={setOnInsert} />
        <CreateKaam inserted={setOnInsert} />
    </div>

}

export default KaamSection;