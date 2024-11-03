// ตั้งค่าการเชื่อมต่อกับฐานข้อมูล PostgreSQL
//import { Client } from "pg";

import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
    user: "admin",
    host: "localhost",
    database: "pokemon_db",
    password: "admin",
    port: 5432,
});

client.connect();

export default client;

// ฟังก์ชันทดสอบการเชื่อมต่อกับฐานข้อมูล
export const testConnection = async () => {
    try {
        await client.query("SELECT 1"); // สั่งให้ฐานข้อมูลรัน SELECT 1
        console.log("Database connection successful!");
    } catch (error) {
        console.error("Database connection failed:", error.message);
    }
};