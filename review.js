
const array = [1, 2, 3, 2, 4, 5, 4, 5];
const duplicatesArray = findDuplicates(array);
function findDuplicates (array) {
    return array.reduce((duplic, num)=>{
        if (seen.has(num)) {
            if (!duplicates.includes(num)) {
                duplicates.push(num);
            }
        } else {
            seen.add(num);
        }
        return duplicates;
        // return duplic.includes(num) ? [...duplic, num] : duplic
    }, [])
};
console.log(duplicatesArray); // Output: [2, 4, 5]