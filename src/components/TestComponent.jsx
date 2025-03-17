import { useState } from "react";

const TestComponent = () => {
    const [count, setCount] = useState(0); 
    console.log(count);
    const handleIncrease = () => {
        setCount(count + 1)
        return count
          
    }

    const handleDecrease = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>count is {count}</h1>
            <button 
                type="button" 
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={handleIncrease}
                >
                +
            </button>
            <button 
                type="button" 
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={handleDecrease}
                >
                -
            </button>
        </div>
    );
};

export default TestComponent;