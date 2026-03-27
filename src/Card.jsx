import {useState } from "react";

function Card(props){

    const { id, title, description } = props.data;
    const [Vis, SetVis] = useState(false);

    return (
    <>  
        <div className="border border-slate-300 rounded-sm px-4 py-4 mb-3">
            <button className={`rounded-sm px-3 py-2 mb-3 ${Vis ? "bg-yellow-300 ": "bg-blue-600"}`} onClick={() => SetVis((visibilitaPrecedente) => !visibilitaPrecedente)}>{title}</button>
            {Vis && 
            <p>{description}</p>}
        </div>
        
    </>
    );
}

export default Card;