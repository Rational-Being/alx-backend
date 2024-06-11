#!/usr/bin/yarn dev
import { createQueue } from "kue";

const queue = createQueue({name: 'push_notification_code'});

const job = queue.create('push_notification_code', {
    phoneNumber: '0811100110091'
    message: 'success'
});

job
    .on('job failing' () => {
        console.log('Notification job failed');
    })
    .on('job created', () => {
        console.log('Notification job created');
    })
    .on('job completed', () => {
        console.log('Notification job is completed');
    })
job.save()