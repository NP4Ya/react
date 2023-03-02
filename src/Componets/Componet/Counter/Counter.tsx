import React, {useState} from 'react';

const Counter = () => {

    const [correntN, setCurrentN] = useState('1')
    const [state, setState] = useState(0)

const OnClick = (value:number) =>{
        setState(state + value)
}


    return (
        <div>
            <div>
                <input
                    type = "text"
                    value ={correntN}
                    onChange={(e)=>setCurrentN(e.target.value)}
                />
            </div>
            <div>
                {state}
            </div>


            <div>
                <button onClick={()=>OnClick(100)}>
                    Plus 100
                </button>

                <button onClick={()=>OnClick(100)}>
                   Minus 100
                </button>

                <button onClick={()=>OnClick(1)}>
                    Plus 1
                </button>

                <button onClick={()=>OnClick(1)}>
                    Minus 1
                </button>

                <button onClick={()=>OnClick(parseInt(correntN))}>
                    Plus N
                </button>


            </div>
        </div>
    );
};

export default Counter;