const moment = require('moment');

describe('Writeread file', function(){
    it('write file', function(){
    
        // create a text file and write
    //cy.writeFile('cypress/fixtures/RegisterMedications.csv', 'xx001 ')
    //cy.writeFile('cypress/fixtures/RegisterMedications.csv', 'fever', {flag: 'a+'})
    cy.writeFile('cypress/fixtures/RegisterMedications.csv', {

        medicationid: 'M001',
        nature:'Fever',
        expiryDate: '06-12-2023',
        comment:'Patient has high temparature',
    })

    })

    it('read file', function(){
     
        //read csv file
        cy.readFile('cypress/fixtures/RegisterMedications.csv').then((medication) => {
            const {expiryDate} = JSON.parse(medication);
            expect(moment(expiryDate,'DD-MM-YYYY', true).isValid()).to.be.true;
        })
       

    })
  })