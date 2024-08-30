/// <reference types="cypress" />

const URL = 'https://jsonplaceholder.typicode.com';
const COMMENTS = '/comments';
const PHOTOS = '/photos';

it("GET API PHOTOS", () => {
    cy.api("GET", `${URL}${PHOTOS}/1`).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('thumbnailUrl');
    });
});

it("POST API COMMENTS", () => {
    cy.api("POST", `${URL}${COMMENTS}`, {
        "postId": 140,
        "id": 140,
        "name": "test",
        "email": "test@gardner.biz",
        "body": "something new"
    }).should((response) => {
        expect(response.status).to.eq(201);
    });
});

it("DELETE API COMMENTS", () => {
    cy.api("DELETE",`${URL}${COMMENTS}/140`).should((response) => {
      expect(response.status).to.eq(200);
    });
   });