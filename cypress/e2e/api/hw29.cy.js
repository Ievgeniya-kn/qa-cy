/// <reference types="cypress" />

const URL = 'https://jsonplaceholder.typicode.com';
const USERS = '/users';
const POSTS = '/posts';


describe('API tests', () => {
})

it('1 - Verify GET /1 contains userId=1 ', () => {
    cy.request({
        method: 'GET',
        url: `${URL}${USERS}/1`,
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('name');
    })
})

it('2 - Verify POST ', () => {
    cy.request({
        method: 'POST',
        url: `${URL}${POSTS}`,
        body: {
            "userId": 135,
            "id": 135,
            "title": "test",
            "body": "There should be awesome text"
        },
    },
  ).then((response) => {
        expect(response.status).to.equal(201);
    })
    .its('body.title').should('eq','test')
})

it('3 - Verify DELETE ', () => {
    cy.request({
        method: 'DELETE',
        url: `${URL}${POSTS}/135`,
    },
  ).then((response) => {
        expect(response.status).to.equal(200);
    });
})