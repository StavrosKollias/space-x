export const GetYearsArray = (items) => {
    const yearsArray = items.map((item) => {
        return item.launch_year;
    });
    return [...new Set(yearsArray)];

    // alternative filtering  for no duplicates
    // return yearsArray.filter((item, index, arr) => {
    //     return arr.indexOf(item) == index;
    // });

    // return yearsArray.sort().filter(function (item, index, arr) {
    //     return !index || item !== arr[index - 1];
    // });
};
