const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');
const connection = process.env.DATABASE_URL || 'postgres://localhost:5432/helpdesk';
// const connection = 'postgres://wlvcqjflvazvsq:bbe54626626c89d01a54204096e715b426d10f095c4b5e225f9860a19871a4f0@ec2-107-22-183-40.compute-1.amazonaws.com:5432/dbli7dqa32nqb';

var client = new pg.Client(connection);
client.connect();

exports.submitContact = (req, res) => {

    const results = [];
    const contact = req.body;
    const query = client.query('INSERT INTO contacts(firstname, lastname, email, phone, streetaddress, city, state, postalcode, country) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)', [contact.firstname, contact.lastname, contact.email, contact.phone, contact.streetaddress, contact.city, contact.state, contact.postalcode, contact.country]);
    query.on('row', (row) => {
        results.push(row);
})
    query.on('end', (results) => {
        console.log(results);
        return res.json(results);
});

};


exports.submitTicket = (req, res) => {
    const results = [];
    const ticket = req.body;
    console.log(' ticket.createdAt : ', ticket.createdAt);
    const query = client.query('INSERT INTO tickets(author, subject, issue, chatUrl, archive, status, createdAt) values ($1, $2, $3, $4, $5, $6, $7)', [ticket.author, ticket.subject, ticket.issue, ticket.chatUrl, ticket.archive, ticket.status, ticket.createdAt]);
    query.on('row', (row) => {
        results.push(row);
})
    query.on('end', () => {
        return res.json(results);
});
};

exports.getOpenTickets = (req, res) => {
    const openTickets = [];
    const query = client.query('SELECT * FROM tickets WHERE archive = false');
    query.on('row', (row) => {
        openTickets.push(row);
});
    query.on('end', () => {
        return res.json(openTickets);
});
};

exports.getArchivedTickets = (req, res) => {
    const archiveTickets = [];
    const query = client.query('SELECT * FROM tickets WHERE archive = true');
    query.on('row', (row) => {
        console.log('request-handler.getArchivedTickets.row : ' + JSON.stringify(archiveTickets));
        archiveTickets.push(row);
});
    query.on('end', () => {
        console.log('request-handler.getArchivedTickets.end : ' + JSON.stringify(archiveTickets));
        return res.json(archiveTickets);
});
};

exports.updateTicket = (req, res) => {
    console.log(req.body);
    const results = [];
    const id = req.body.id;
    const ticket = Object.assign({}, req.body, { archive: !req.body.archive });
    console.log('ticket archive : ', ticket.archive);
    console.log('id : ', id)
    const query = client.query('UPDATE tickets SET archive = $1 WHERE id = $2', [ticket.archive, id]);
    query.on('row', (row) => {
        results.push(row);
})
    query.on('end', () => {
        return res.json(results);
});
};

exports.deleteTicket = (req, res) => {
    const results = [];
    const query = client.query('DELETE FROM tickets WHERE tickets.id = $1', [req.body.id]);
    query.on('row', (row) => {
        results.push(row);
})
    query.on('end', () => {
        return res.json(results);
});
};
