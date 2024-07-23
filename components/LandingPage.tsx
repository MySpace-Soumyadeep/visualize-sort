
'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

const LandingPage: React.FC = () => {

    const Router = useRouter();

    const handleStartClick = () => {

    };

    return (

        <div className="relative flex justify-center items-center h-screen bg-black overflow-hidden">

            <div className="absolute w-full h-full overflow-hidden">
                <div className="absolute top-0 left-0 w-8 h-8 bg-yellow-500 rounded-full animate-move1"></div>
                <div className="absolute top-0 right-0 w-8 h-8 bg-red-500 rounded-full animate-move2"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 bg-green-500 rounded-full animate-move3"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-blue-500 rounded-full animate-move4"></div>
            </div>

            <div className="absolute inset-0 flex justify-center items-center">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 animate-zoomIn">Welcome to the Sort Visualizer</h1>
                    <Link
                        className="bg-black border border-blue-500 text-white font-bold py-3 px-6 rounded hover:bg-gray-900 transition-all duration-300 animate-pulse"
                        href="/playSort">
                        Start Sort Visualizer
                    </Link>
                </div>
            </div>
        </div>


    );
};

export default LandingPage;
