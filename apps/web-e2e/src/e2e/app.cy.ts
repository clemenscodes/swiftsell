describe('Navbar', () => {
    it('renders correctly', () => {
        cy.visit('/');
        cy.get('nav').should('be.visible');
    });
});
