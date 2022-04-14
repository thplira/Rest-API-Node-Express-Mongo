import express from "express";
import books from './books.routes.js';

const output = {
    titulo: "Curso de Construção de API", 
    tecnologias_envolvidas: {
        programing_language: "JavaScript", 
        environment: "NodeJS", 
        framework: "Express", 
        database: {
            description: "MongoDB", 
            framework: "Mongoose"
        }
    }
}

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).json(output);
    });

    app.use(
        express.json(),
        books
    )
}

export default routes