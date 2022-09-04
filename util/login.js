_path = process.cwd();
const fs = require("fs");
const ussersDB = JSON.parse(fs.readFileSync(path + "public/db/ussers.json"));

async function login(usserName, password) {
    let status = false;
    Object.keys(ussersDB).forEach((i) => {
        if (ussersDB[i].usserName == usserName && ussersDB[i].password == password) {
            status = true;
        };
    });
    return status;
};

async function register(usserName, email, password, phonenumber, name, type) {
    let data = {
        usserName: usserName,
        name: name,
        id: getRandom(15, "0"),
        email: email,
        password: password,
        usserName: phonenumber,
        phonenumber: phonenumber,
        type: type
    };
    ussersDB.push(data);
    false.writeFileSync(_path + "public/db/ussers.json", JSON.stringify(ussersDB));
};

function getDataUsser(usserName) {
    let data = false;
    Object.keys(ussersDB).forEach((i) => {
        if (ussersDB[i].usserName == usserName) {
            data = ussersDB[i];
        };
    });
    return data;
}

module.exports = { register, login, getDataUsser }