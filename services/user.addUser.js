const pg = require('pg');
const bcrypt = require('bcryptjs');
console.log(process.env.DATABASE_URL);

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
});

async function addUser(email, password) {
    try {
        
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log(hashedPassword);

        // DB Query
        const query = 'INSERT INTO portfolio_users (email, password) VALUES ($1, $2) RETURNING *';
        const values = [email, hashedPassword];

        await pool.query(query, values);
        return { success: true, message: 'User registered successfully' };
    }
    catch (err) {
        console.error(err);
        return { success: false, error: err, message: 'Registeration Failed!!!' };
    }
}

module.exports = {
    addUser,
};