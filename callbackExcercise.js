// Define a function called callback which receives an argument and prints it out.
// Start Exercise

function useCallback(callback)
{
    callback(1);
    callback(2);
    callback(3);
}

function callback(sentence) {
    // TODO: print out sentence
    console.log(sentence);
}

// TODO: execute useCallback with the callback as the argument

useCallback(callback);
// output:
// 1
// 2
// 3