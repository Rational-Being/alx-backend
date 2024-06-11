#!/usr/bin/yarn dev
import { createQueue } from "kue";


function notification (message, time) {
    if (time) {
        console.log(`About to send ${message}`);
    }
}