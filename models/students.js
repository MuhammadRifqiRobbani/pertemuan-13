// import db
const db = require('../config/database');

class Student {
    static all() {
        const promise = new Promise((resolve, reject) => {
            // melakukan query
            const sql = "SELECT * FROM students";
            db.query(sql, (error, results) => {
                resolve(results);
            });
        });

        return promise;
    }


    static show(id) {
        const promise = new Promise((resolve, reject) => {
            // melakukan query
            const sql = `SELECT * FROM students WHERE id = ${id}`;
            db.query(sql, (error, results) => {
                resolve(results);
            });
        });

        return promise;
    }

    static create(data) {
        return new Promise((resolve, reject) => {
            // melakukan insert data
            const sql = `INSERT INTO students SET ?`;
            db.query(sql, data, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(this.show(results.insertId));
                }
            });
        });
    }
    static async create(data) {
        // promise 1= insert data
        // Insert data ke database
        const id = await new Promise((resolve, reject) => {
            // Insert data ke database 
            const sql = "INSERT INTO STUDENTS SET?";
            db.query(sql, data, function(err, results) {
                resolve(results.insertid);
            });
        });

        // promise 2= select data yang baru di insert
        return new promise((resolve, reject) => {
            const sql = "SELECT * FROM students WHERE id = ?"
            db.query(sql, id, (err, results) => {
                resolve(results);

            });
        });

        // promise 2: select data yang baru di insert
        const student = await this.find(id);
        return student;

    }

    static find(id) {
        // lakukan promise, select by id
        return new promise((resolve, reject) => {
            const sql = "SELECT * FROM students WHERE id = ?"
            db.query(sql, id, (err, results) => {
                resolve(results(0));

            });
        });
    }

    static async update(id, data) {
        // update data
        await new promise((resolve, reject) => {
            // query untuk update data
            const sql = "UPDATE students SET ?  WHERE id = ?"
            db.query(sql, (data, id)(err, results) => {
                resolve(results);

            });
        });

        // select data by id
        const student = await this.find(id);
        return student;
    }

    static delete(id) {
        // query delete
        return new promise((resolve, reject) => {
            // query sql
            const sql = "DELETE FROM students WHERE id = ?"
            db.query(sql, id, (err, results) => {
                resolve(results);

            });
        });

    }
}


// expor model
module.exports = Student;