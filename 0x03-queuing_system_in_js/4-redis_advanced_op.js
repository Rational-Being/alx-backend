#!/usr/bin/yarn dev
import { hash } from "crypto";
import { createClient } from "redis";
import { promisify } from 'util';

const client = createClient();

client.on('error', (err) => {
    console.log('Redis client not connected to the server:')
});

const updateHash = (hashName, fieldName, fieldValue) => {
    client.HSET(hashName, fieldName, fieldValue, print);
};

const printHash = (hashName) => {
    client.HGETALL(hashName, (_err, reply) => console.log(reply));
};

function main() {
    const hashObj = {
        Bogota: 20,
        Seattle: 80,
        Cali: 40,
        Paris: 2,
        Portland: 50,
        'New York': 20, 
    };

    for (const [space, value] of Object.entries(hashObj)) {
        updateHash('HolbertonSchools', space, value);
    }
    printHash('HolbertonSchools');
}


client.on('connect', () => {
    console.log('Redis client connected to the server');
    main();
});
