const db = require('../db');
class DiseaseController{
async getDiseases(req, res) {
    const diseases = await db.query(`SELECT * FROM disease`)
    res.json(diseases.rows)
}}

module.exports = new DiseaseController(); 