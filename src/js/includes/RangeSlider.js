const JQuery = require('jquery');
const rangeSlider = require('ion-rangeslider');


export default function RangeSlider(){
    JQuery("#example_id").ionRangeSlider({
        type: "double",
        grid: true,
        min: 0,
        max: 20000,
        from: 200,
        to: 800,
        prefix: "$",
    });
}