/******************************************************** 
 * 
 *  Created by : Shourya Mittal
 *  liscense: MIT
 *  Year: 2021
 *  I really wish this can help you out. Happy Coding.
 * 
**********************************************************/


"use strict";

function flatten(obj) {
    let flatObject = {};

    for(let prop in obj) {
        if(!obj.hasOwnProperty(prop))
            continue;
        if(Array.isArray(obj[prop])) {
            //handle array
            for(let i = 0 ; i < obj[prop].length; i++) {
                if(Array.isArray(obj[prop][i]) || typeof obj[prop][i] == "object") {
                    let tempFlatObj = flatten(obj[prop][i]);
                    for(let j in tempFlatObj) {
                        flatObject[prop + "[" + i + "]" + "." + j] = tempFlatObj[j];
                    }
                }
                else {
                    flatObject[prop + "[" + i + "]"] = obj[prop][i];
                }
            }
        }
        else if(typeof obj[prop] == "object") {
            //handle object
            let tempFlatObj = flatten(obj[prop]);
            for(let i in tempFlatObj) {
                flatObject[prop + "." + i] = tempFlatObj[i];
            }
        }
        else {
            //simple property
            flatObject[prop] = obj[prop];
        }
    }
    return flatObject;
}
module.exports = flatten;