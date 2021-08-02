describe('Handling file upload', function () {
    beforeEach(function () {
        cy.visit('https://the-internet.herokuapp.com/upload')
        
    })
    

    

   it('upload files', function() {
	const fileName = 'RegisterMedications.csv'
    //const fileName = 'image.png'
    
    
    //const fileType = '.csv';
     //const fileType=should('.contain', 'csv')
    
	cy.fixture('RegisterMedications').then(function(fileContent){
		cy.get('#file-upload').attachFile({fileContent,fileName,mimeType: 'application/csv'})
		cy.get('#file-submit').click()
    

})


   })

})