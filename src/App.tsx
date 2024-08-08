import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const {count} = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="flex space-x-4">
        <button onClick={()=>dispatch(decrement(1))} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-lg hover:bg-blue-600 hover:shadow-xl transition duration-200 ease-in-out">
          Decrement
        </button>
        <span className="text-2xl font-bold text-gray-800">{count}</span>
        <button  onClick={()=>dispatch(increment(1))} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-lg hover:bg-blue-600 hover:shadow-xl transition duration-200 ease-in-out">
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
