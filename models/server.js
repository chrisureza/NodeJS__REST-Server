const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersRoutePath = '/api/users';

        //Middlewares
        this.middelwares();

        //Routes
        this.routes();
    }

    middelwares() {
        //CORS
        this.app.use(cors());

        //Read and Parse Body
        this.app.use(express.json());

        //Public directory
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usersRoutePath, require('../routes/user.routes'));
    }

    listen() {

        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

module.exports = Server;