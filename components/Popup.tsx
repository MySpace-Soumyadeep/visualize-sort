import { algorithm } from "@/app/reducers/algorithm";
import { useState } from "react";

interface PopupProps {
    message: string[];
    selectedOption:string;
    onClose: () => void;
    onOk:(algorithm: string) => void;
}

const Popup: React.FC<PopupProps> = ({ message, onClose, onOk, selectedOption }) => {
    const [sortSelected, setSortSelected] = useState<string>(selectedOption)

    
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-mygray-100 p-6 rounded-lg shadow-lg relative sm:w-96 w-80">
                <div className="flex justify-between mb-5">
                    <span className="flex font-bold "> SELECT ALGORITHM</span>
                <button
                    // className="absolute top-2 right-2 text-gray-400 hover:text-gray-100"
                    className="text-gray-400 hover:text-gray-100 text-lg"
                    onClick={onClose}
                >
                    &times;
                </button>
                </div>
                <ul className="mt-2">
                    {message?.map((algorithm, index) => (
                        <li key={index} className="text-white flex items-center mb-2 cursor-pointer hover:bg-slate-700 p-0.5"
                        onClick={() => setSortSelected(algorithm)}>
                            <input type="radio" className="mr-2" checked={algorithm === sortSelected}/>
                            <span>{algorithm}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-4 flex justify-end">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => onOk(sortSelected)}
                    >
                        OK
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Popup;
