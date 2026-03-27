import Card from "./Card";
import { language } from "./assets/languages.js";


function CardRenderer(){
    return (
    <>
        <div className="mx-[70px] mt-6">
           {language.map((item) => (
            <div key={item.id}>
                <Card data={item}/>
            </div>
            ))} 
        </div>
    </>
    );
}

export default CardRenderer;