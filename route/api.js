// import express
const express = require("express");
// buat object router
const router = express.Router();

// test routing 
app.get("/", (req, res) => {
    res.send("Hello Ekspress");
})


// buat routing student
router.get("/students", (req, res) => {
    res.send("Menampilkan semua students");
});
router.post("/students", (req, res) => {
    res.send("Menampilkan data students");
});
router.put("/students/:id", (req, res) => {
    const { id } = req.params;
    res.send("Mengedit students ${id}");
});
router.delete("/students/:id", (req, res) => {
    const { id } = req.params;
    res.send("Menghapus students ${id}");
});

// routing untuk student
router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students", StudentController.update);
router.delete("/students", StudentController.destroy);
router.get("/students", StudentController.show);

// export routing
module.export = router;