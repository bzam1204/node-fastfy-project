import postgres from 'postgres';

import 'dotenv/config';

const { DATABASE_URL } = process.env;

const sql = postgres(DATABASE_URL, { ssl: 'require' });

export default sql;
