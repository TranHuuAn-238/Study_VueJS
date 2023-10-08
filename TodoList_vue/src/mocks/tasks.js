// const { v4: uuidv4 } = require('uuid'); // syntax ES5 la require, syntax ES6 la import
import { v4 as uuidv4 } from "uuid";

export default [
    {
        id: uuidv4(),
        name: 'aorem A',
        level: 0	// small
    },
    {
        id: uuidv4(),
        name: 'aorem B',
        level: 1	// medium
    },
    {
        id: uuidv4(),
        name: 'lorem C',
        level: 2	// high
    },
    {
        id: uuidv4(),
        name: 'lorem D',
        level: 0	// small
    },
]