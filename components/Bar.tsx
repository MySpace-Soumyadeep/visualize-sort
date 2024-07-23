'use client'

import Link from "next/link";
import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setArray } from '../app/reducers/array';
import { setAlgorithm } from '../app/reducers/algorithm';

import Popup from './Popup';
import { doSort } from './utils/commonFunction';
import { setRunning } from '@/app/reducers/running';
import { setCurrentCheckTwo, setCurrentSwappers } from '@/app/reducers/swappers';
import { setCurrentBubbleTwo } from '@/app/reducers/bubbleSort';
import { setCurrentSortedTwo } from '@/app/reducers/sorted';
import { setCurrentSelectionTwo } from '@/app/reducers/selectionSort';


const Bar: React.FC = () => {

    const [numBars, setNumBars] = useState<number>(5);
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const cancelledRef = useRef(false);

    const states = useSelector((state: any) => state);

    const {
        array,
        algorithm,
        currentSwappers,
        currentChecker,
        currentBubbleTwo,
        currentSortedTwo,
        isRunning,
        currentSelectionTwo

    } = states


    // console.log("currentSelectionTwo ", currentSelectionTwo);
    // console.log("currentChecker ", currentChecker);
    // console.log("currentSwappers ", currentSwappers);
    // console.log("currentSortedTwo ", currentSortedTwo);


    const dispatch = useDispatch();


    const listOfSort = [
        "Selection Sort",
        "Bubble Sort",
        // "Insertion Sort",
        // "Merge Sort",
        // "Quick Sort",
        // "Heap Sort",
        // "Counting Sort",
        // "Radix Sort",
        // "Bucket Sort",
        // "Tim Sort",
        // "Tree Sort",
        // "Shell Sort",
        // "Cube Sort",
    ]

    const generateRandomData = (count: number) => {
        return Array.from({ length: count }, () => Math.floor(Math.random() * 30) + 1);
    };

    const generateNewArray = () => {
        dispatch(setCurrentSwappers([]));
        dispatch(setCurrentBubbleTwo([]));
        dispatch(setCurrentSortedTwo([]));
        dispatch(setArray(generateRandomData(numBars)));
    }

    useEffect(() => {
        generateNewArray()
    }, [numBars])

    const handleSort = () => {
        if (isRunning) {
            stopSorting()
        }
        else {
            cancelledRef.current = false;
            console.log("doing bubble sort");

            doSort(algorithm, array, dispatch, currentSortedTwo, cancelledRef)
            // bubbleSort(array)
        }
    }

    const getColor = (index: number) => {
        if (currentSwappers?.includes(index)) {
            //red
            return "rgba(219, 57, 57, 0.8)";
        } else if (currentBubbleTwo?.includes(index) || currentSelectionTwo?.includes(index)) {
            //green
            return "rgba(78, 216, 96, 0.8)";
        } else if (currentSortedTwo?.includes(index)) {
            //purple
            return "rgba(169, 92, 232, 0.8)";
        } else if (currentChecker?.includes(index)) {
            //yellow
            return "rgba(245, 230, 83, 1";
        }
        return "rgba(66, 134, 244, 0.8)";
    }

    const stopSorting = () => {
        cancelledRef.current = true;
        dispatch(setRunning(false))
        dispatch(setCurrentSwappers([]))
        dispatch(setCurrentBubbleTwo([]))
        dispatch(setCurrentSortedTwo([]))
        dispatch(setCurrentCheckTwo([]))
        dispatch(setCurrentSelectionTwo([]))
    }

    const handleChooseAlgorithm = () => {
        setIsPopupOpen(true)
    }

    return (
        <div className='flex flex-col sm:flex-row'>
            {/* <div className='flex flex-col w-52 p-2 border h-dvh'> */}
            <div className='flex flex-row sm:flex-col w-full sm:w-52 p-2 sm:border-r-2 border-r-gray-700 sm:h-dvh'>
                {!isRunning && <Link type="button" className={`text-blue-500 text-center bg-gray-800 sm:text-red-800 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-base px-2 sm:px-5 py-2.5 me-2 mb-2 dark:bg-black dark:hover:bg-blue-400 dark:hover:text-white dark:border-gray-700`}
                    href="/"
                >{`Go to Home`}</Link>}
                {algorithm && <button type="button" className={`${isRunning ? "text-red-700" : "text-green-700"} bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-black ${isRunning ? "dark:hover:bg-red-700" : "dark:hover:bg-green-700"} dark:hover:text-white dark:border-gray-700`}
                    onClick={handleSort}
                >{`${isRunning ? "Stop" : "Start"} Sorting`}</button>}

                {!isRunning && <button type="button" className={`text-gray-500 bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-black "dark:hover:bg-gray-700" dark:hover:text-white dark:border-gray-700`}
                    onClick={generateNewArray}
                >New Array</button>}

                {!isRunning && <button type="button" className={`text-gray-500 bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-black "dark:hover:bg-gray-700" dark:hover:text-white dark:border-gray-700`}
                    onClick={handleChooseAlgorithm}
                >Choose Algorithm</button>}

                {/* {!isRunning && <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    onClick={handleChooseAlgorithm}
                >Choose Algorithm</button>} */}
            </div>

            <div className="p-4 flex flex-1 justify-center flex-col items-center sm:ml-28">
                {/* <div className="relative w-4/6 md:w-3/4 h-60 max-w-4xl border border-gray-300 flex flex-wrap items-end justify-center overflow-x-auto"> */}
                {/* <div className='text-transparent font-serif text-4xl mb-16 bg-gradient-to-r from-yellow-500 via-blue-700 to-green-600 bg-clip-text'> */}
                <div className={`${isRunning ? "gradient-text text-transparent" : "text-blue-700"} font-serif text-4xl mb-16 ${true ? "animate-gradient" : ""}`}>
                    {algorithm || "Select Algorithm"}
                </div>
                <div id="bar-chart-container" className="relative w-4/6 md:w-3/4 h-60 max-w-4xl  flex flex-wrap items-end justify-center">
                    {array.length ? array.map((number: number, index: number) => {
                        const chartContainer = document.getElementById('bar-chart-container');
                        if (chartContainer) {
                            const containerWidth = chartContainer.clientWidth; // Get container width
                            const barWidth = Math.max(1, ((containerWidth / array.length) - 5));
                            const h = `${number * 10}px`
                            const w = `${barWidth}px`

                            return <div
                                className="text-white text-center mx-0.5"
                                key={index}
                                style={{
                                    backgroundColor: getColor(index),
                                    height: h,
                                    width: w,
                                }}>
                                {numBars <= 20 && number}
                            </div>
                        }
                    }) : null
                    }
                </div>

                {/* input range  */}
                {<div className="w-4/6 md:w-3/4 lg:w-1/2 flex flex-col items-center mt-32">
                    <label htmlFor="numBars" className="text-lg mb-2">Number of Bars: {numBars}</label>
                    <input
                        type="range"
                        id="numBars"
                        min="4"
                        max="100"
                        step="2"
                        disabled={isRunning}
                        value={numBars}
                        onChange={(e) => setNumBars(Number(e.target.value))}
                        className="w-2/3"
                    />
                </div>}
            </div>

            {isPopupOpen && (
                <Popup
                    message={listOfSort}
                    selectedOption={algorithm}
                    onOk={(value) => {
                        dispatch(setAlgorithm(value));
                        setIsPopupOpen(false)
                    }}
                    onClose={() => {
                        setIsPopupOpen(false)
                    }}
                />
            )}
        </div>
    )
};

export default Bar;
