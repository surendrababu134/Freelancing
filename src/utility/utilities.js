import { ajax } from "rxjs/ajax";


/**
 * Fitler the data in the array of object
 * 
*/

export const filterByValue = (array, string) => {
    return array.filter(o =>
        Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));
}
