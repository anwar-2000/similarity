import { ClassValue, clsx } from "clsx";
import {twMerge} from 'tailwind-merge'

export function cn(...inputs:ClassValue[]){
    return twMerge(clsx(inputs)) // sp tailwind can merge for ex : py-2 px-2 to p-2
}