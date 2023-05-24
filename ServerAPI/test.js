const fs = require('fs');
const path = require('path');

const writeFile = async (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) {
                console.log("Have an error: " + err.toString());
                reject();
            } else {
                console.log("Writing to file finished successfuly");
                resolve();
            }
        });
    });
}

const appendFile = async (path, data) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(path, data, (err) => {
            if (err) {
                console.log("Have an error: " + err.toString());
                reject();
            } else {
                console.log("Appending to file finished successfuly");
                resolve();
            }
        });
    });
}

const readFile = async (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, {encoding:'utf-8'}, (err, data) => {
            if (err) {
                console.log("Have an error: " + err.toString());
                reject();
            } else {
                console.log("File read operation performed successfuly");
                resolve(data);
            }
        });
    });
}

const rmFile = async (path) => {
    return new Promise((resolve, reject) => {
        fs.rm(path, (err) => {
            if (err) {
                console.log("Have an error: " + err.toString());
                reject();
            } else {
                console.log("File removing finished successfuly");
                resolve();
            }
        });
    });
}

writeFile(path.join(__dirname, "TestFile.txt"), "TestData1\n")
    .then(() => appendFile(path.join(__dirname, "TestFile.txt"), "Test number 2\n"))
    .then(() => appendFile(path.join(__dirname, "TestFile.txt"), "Test number 2\n"))
    .then(() => appendFile(path.join(__dirname, "TestFile.txt"), "Test number 2\n"))
    .then(() => appendFile(path.join(__dirname, "TestFile.txt"), "Test number 2\n"))
    .then(() => appendFile(path.join(__dirname, "TestFile.txt"), "Test number 2\n"))
    .then(() => readFile(path.join(__dirname, "TestFile.txt")))
    .then((data) => console.log(data))
    .then(() => rmFile(path.join(__dirname, "TestFile.txt")))
    .catch(() => console.log("Have an error. Check messages below"));