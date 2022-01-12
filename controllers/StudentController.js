class StudentController {
    async index() {
        const student = await Student.all();

        const data = {
            message = "Menampilkan semua student",
            data = student,
        };
        res.status(200).json("data");
    }

    async store() {
        // Jalankan method create dari model student
        // kirim data
        const student = await Student.create(req, body);

        const data = {
            message = "Menambahkan data student",
            data = student,
        };
        res.status(201).json("data");
    }

    async update(req, res) {
        // cek apakah id student ada
        // jika ada lakukan update
        // jika tidak, kirim data tidak ada 
        const { id } = req.params;

        const student = await Student.find(id);

        if (student) {
            //update data
            const studentupdated = await student.update(id, req.body);

            const data = {
                message = "Mengedit data student",
                data = studentupdated,
            };
            res.status(200).json("data");
        } else {
            const data = {
                message = " data tidak ada",
                data = studentupdated,
            };

            res.status(404).json("data");
        }
    }

    async destroy() {
        const { id } = req.params;


        // cari id 
        // jika ada, hapus data
        // jika tidak, kirim data tidak ada 

        const student = await student.find(id);

        if (student) {
            // hapus data
            await student.delete(id);

            const data = {
                message = "Menghapus data student",
            };
            res.status(201).json("data");
        } else {
            // data tidak  ada
            const data = {
                message = " data tidak ada",
                data = studentupdated,
            };

            res.status(404).json("data");
        }
    }

    async show(req, res) {
        // cari id 
        // jika ada, hapus data
        // jika tidak, kirim data tidak ada 
        const { id } = req.params;

        const student = await Student.find(id);

        if (student) {
            //update data
            const studentupdated = await student.update(id, req.body);

            const data = {
                message = "Mengedit data student",
                data = student,
            };
            res.status(200).json("data");
        } else {
            const data = {
                message = " data tidak ada",
                data = studentupdated,
            };

            res.status(404).json("data");
        }
    }






}