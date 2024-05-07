// Object.setPrototypeOf(destinationObj, sourceObj)

let toyota = {
    drive(){
        return 'driving toyota';
    }
};

let camry = {
    wifi(){
        return 'using wifi';
    }
};



Object.setPrototypeOf(camry, toyota);
console.log(camry.drive());
// driving toyota