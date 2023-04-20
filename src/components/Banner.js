import { useState } from "react";
function Bannner (){
    const [isClosed, setIsClosed] = useState(false);

    const handleClose = () => {
        setIsClosed(true);
    };
    
    return (
        <div>
        {!isClosed && (
            <div>
                <p className="d:flex bg-[#6ECEB2] text-center tracking-[.15em] justify-center pt-1 pb-1 font-['avenir'] font-semibold">Get 10% Off Your <span className="cursor-pointer tracking-normal"> First Order* </span> With HELLO10</p>
                <button
                    onClick={handleClose}
                    className="absolute top-1 bottom-0 right-4 w-[20px] h-[20px] font-semibold"
                >&#x2715;</button>
        </div>
        )}
        </div>
    );
}
export default Bannner;