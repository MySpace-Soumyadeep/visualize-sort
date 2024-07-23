import { setArray } from "../reducers/array";
import { setCurrentBubbleTwo } from "../reducers/bubbleSort";
import { setCurrentCheckTwo, setCurrentSwappers } from "../reducers/swappers";
import { setCurrentSortedTwo } from "../reducers/sorted";
import { setRunning } from "../reducers/running";
import { sleep } from "@/components/utils/commonFunction";
import { Dispatch } from "redux";


const bubbleSort = async (
    arr: number[],
    dispatch: Dispatch,
    currentSortedTwo: number[],
    cancelledRef: React.RefObject<boolean>) => {

    dispatch(setRunning(true))
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        if (cancelledRef.current) return;
        for (let j = 0; j < n - i - 1; j++) {
            if (cancelledRef.current) return;
            dispatch(setCurrentCheckTwo([j, j + 1]))
            await sleep(1000);  // Add delay to visualize
            if (arr[j] > arr[j + 1]) {
                dispatch(setCurrentSwappers([j, j + 1]));
                await sleep(1000);  // Add delay to visualize
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap elements
                swapped = true;
                dispatch(setArray([...arr]));
                await sleep(1000);  // Add delay to visualize
            }
            dispatch(setCurrentSwappers([]))
            dispatch(setCurrentBubbleTwo([j, j + 1]))
            await sleep(1000);  // Add delay to visualize
            dispatch(setCurrentBubbleTwo([]))
            dispatch(setCurrentSwappers([]))
            dispatch(setCurrentCheckTwo([]))
        }
        dispatch(setCurrentSortedTwo([...currentSortedTwo, n - i - 1]))
        if (!swapped) break;
    }
    // if (!cancelledRef.current) {
    //     dispatch(setCurrentBubbleTwo(Array.from({ length: n }, (_, i) => i)))
    //     await sleep(100);
    //     dispatch(setCurrentBubbleTwo([]))
    //     dispatch(setCurrentSortedTwo(Array.from({ length: n }, (_, i) => i)))
    //     await sleep(100);
    //     dispatch(setRunning(false))
    // }

}

export default bubbleSort;
