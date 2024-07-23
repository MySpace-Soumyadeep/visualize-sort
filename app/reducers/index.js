import { combineReducers } from "redux";
import { array } from "./array";
import { algorithm } from "./algorithm";
import { currentBubbleTwo } from "./bubbleSort";
import { currentQuickTwo, pivot } from "./quickSort";
import { currentChecker, currentSwappers } from "./swappers";
import { currentHeapThree } from "./heapSort";
import { currentSortedTwo } from "./sorted";
import { currentMergeX } from "./mergeSort";
import { currentSelectionTwo } from "./selectionSort"
import { isRunning } from "./running";

export default combineReducers({
  array,
  algorithm,
  currentBubbleTwo,
  currentQuickTwo,
  pivot,
  currentSwappers,
  currentHeapThree,
  currentMergeX,
  isRunning,
  currentChecker,
  currentSortedTwo,
  currentSelectionTwo
});
