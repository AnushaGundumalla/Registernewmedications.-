

/*describe('File upload test', function(){

  it('File upload test', function(){
      cy.visit('https://fineuploader.com/demos.html')

      //upload a file

      const fileName = 'RegisterMedications.csv';

cy.fixture(fileName).then(fileContent => {
 cy.get('[type="file"]').upload({fileContent, fileName, mimeType: 'application/csv'});

})
//cy.get('[type="submit"]').click()
cy.get('[class="qq-upload-button-selector qq-upload-button"]').attachFile(csvFile );
cy.contains("You have uploaded a csv file")
  })
})

       //const csvFile = 'RegisterMedications.csv';
       //cy.get('.buttons > .qq-upload-button-selector > input')
       //cy.get('.buttons > .qq-upload-button-selector > input')
//cy.get('[name="qqfile"]').attachFile(csvFile );
//cy.get('[class="qq-upload-button-selector qq-upload-button"]').attachFile(csvFile );


  // })
//})*/

describe('File upload test', ()=>{

  it('File upload test', ()=>{
      cy.visit('https://fineuploader.com/demos.html')

     

      const csvFile = 'RegisterMedications.csv';
      
      //cy.get('.buttons > .qq-upload-button-selector > input')
      //cy.get('.buttons > .qq-upload-button-selector > input')

      //negative testing
//cy.get('[name="qqfile"]').attachFile(csvFile );
cy.get('[class="qq-upload-button-selector qq-upload-button"]').attachFile(csvFile );
console.log("File uploaded successfully")
//cy.get('.buttons > .qq-upload-button-selector > input')

  })
})

