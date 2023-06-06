import { useState } from "react";

function Counter() {
    let [count, setCount] = useState(0);

    const handleClickIncrease = () => {
        const newValue = count + 1;
        setCount(newValue);
    };

    const handleClickDecrease = () => {
        const newValue = count - 1;
        setCount(newValue);
    };

    return (
        <div>
            Giá trị {count}
            <div>
                <button onClick={handleClickIncrease}>Tăng</button>
                <button onClick={handleClickDecrease}>Giảm</button>
            </div>
        </div>
    );
}

export default Counter;