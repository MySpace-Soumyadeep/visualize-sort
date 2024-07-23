import { setCurrentCheckTwo, setCurrentSwappers } from "../reducers/swappers";
import { setCurrentSortedTwo } from "../reducers/sorted";
import { setRunning } from "../reducers/running";
import { sleep } from "@/components/utils/commonFunction";
import { Dispatch } from "redux";
import { setCurrentSelectionTwo } from "../reducers/selectionSort";

function swap(arr:number[],j:number, i:number)
{
    var temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

const selectionSort = async (
    arr: number[],
    dispatch: Dispatch,
    currentSortedTwo: number[],
    cancelledRef: React.RefObject<boolean>) => {

    dispatch(setRunning(true))
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        if (cancelledRef.current) return;
        let min_idx = i
        dispatch(setCurrentSelectionTwo([i]))
        await sleep(200)
        for (let j = i+1; j < n; j++) {
            if (cancelledRef.current) return;
            dispatch(setCurrentCheckTwo([j]))
            await sleep(200);  // Add delay to visualize
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
                dispatch(setCurrentSelectionTwo([i, j]))
                await sleep(200)
            }
        }
        dispatch(setCurrentSwappers([min_idx, i]))
        await sleep(200)
        swap(arr,min_idx, i)
        dispatch(setCurrentSortedTwo([...currentSortedTwo, i]))
        await sleep(200)
        dispatch(setCurrentSelectionTwo([]))
        dispatch(setCurrentSwappers([]))
        dispatch(setCurrentCheckTwo([]))
    }
    dispatch(setCurrentSortedTwo([...currentSortedTwo, n - 1]))
    dispatch(setRunning(false))
}

export default selectionSort;
