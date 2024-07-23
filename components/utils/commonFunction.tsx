'use client'

import bubbleSort from "@/app/algorithms/bubbleSort";
import selectionSort from "@/app/algorithms/selectionSort";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

export const doSort = (algorithm: string, array: number[], dispatch: Dispatch, currentSortedTwo: number[], cancelledRef: React.RefObject<boolean>) => {

    switch (algorithm) {
        case 'Bubble Sort':
            return bubbleSort(array, dispatch, currentSortedTwo, cancelledRef);
        case 'Selection Sort':
            return selectionSort(array, dispatch, currentSortedTwo, cancelledRef);
        default:
            throw new Error(`Unknown sorting algorithm: ${algorithm}`);
    }
};

export const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

