function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

  // //becomes

  const fillterOutOdds = (...args) => args.filter(n => n % 2 === 0)

  const findMin = (...args) => Math.min(...args)
  
findMin(1,4,12,-3) 
findMin(1,-1) 
findMin(3,1) 


//Merge Objects

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2}) //Merge 2 objects using spread

mergeObjects({a:1, b:2}, {c:3, d:4}) 


//Double arguments 

const doubleAnReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v * 2)]

doubleAnReturnArgs([1,2,3],4,4) 
doubleAnReturnArgs([2],10,4) 

//remove random element in the items array and return a new aray without that item

const removeRando = items => {
    let i = Math.floor(Math.random() * items.length);
    return [...items.slice(0,i), ...items.slice(i + 1)];

}

// Return a new object with all the keys and values from obj and a new key/value pair

const addKeyV = ( obj, key, val ) => {
    let newObj = { ...obj } 
     newObj[key] = val;
    return newObj;
}

// Return a new obj with a key removed

const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key];
    return newObj;
}


// update a new object with a modded key and value

const update = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}

/// conbune two objects and return a new object

const combine = (obj1, obj2) => {
    return{...obj1, ...obj2};
}