describe('Tutorial Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://powerful-scrubland-99007-c4aa236ac7c5.herokuapp.com/api/v1/users/1', {
      statusCode: 200,
      body: {
        id: 1,
        name: 'Test User'
      }
    }).as('getUser');

    cy.intercept('GET', 'https://powerful-scrubland-99007-c4aa236ac7c5.herokuapp.com/api/v1/users/1/habits', {
      statusCode: 200,
      body: [
        {
          id: 1,
          title: 'Test Habit',
          category: 'Health'
        }
      ]
    }).as('getHabits');
  });

  const navigateToTutorial = () => {
    cy.visit('localhost:3000/login');
    cy.wait('@getUser');
    cy.wait('@getHabits');
    cy.get('ul > :nth-child(1) > a').should('contain', 'How it Works');
    cy.get('ul > :nth-child(1) > a').click();
    cy.url().should('include', '/tutorial');
  };

  it('should navigate to the tutorial page and validate elements', () => {
    navigateToTutorial();
    cy.get('.tutorial-prompt').should('contain.text', 'Click "Add" to add a suggested habit.');
    cy.get('.suggested-habits-tutorial').should('have.class', 'highlight');
    cy.contains('Add').click();
    cy.get('.todays-habits-tutorial').should('have.class', 'highlight');
    cy.get('.user-habit-card-tutorial button').should('contain', 'Done');
    cy.get('.tutorial-prompt').should('contain.text', 'Click "Done" to complete the habit.');
    cy.contains('Done').click();
    cy.get('.streaks-tutorial').should('have.class', 'highlight');
    cy.get('.tutorial-prompt').should('contain.text', 'Unlock streaks by completing a habit 3 days in a row.');

    cy.contains('Rewatch').click();
    cy.get('.suggested-habits-tutorial').should('have.class', 'highlight');
    cy.get('.tutorial-prompt').should('contain.text', 'Click "Add" to add a suggested habit.');
    cy.get('.suggested-habit-card button').should('contain', 'Add');
  });

  it('should redirect to the login page if the user is logged out', () => {
    navigateToTutorial();

    cy.window().then((win) => {
      win.localStorage.setItem('isLoggedIn', 'false');
    });

    cy.contains('Add').click();
    cy.contains('Done').click();
    cy.contains('Done').click();

    cy.url().should('include', '/login');
  });

  it('should redirect to the dashboard if the user is logged in', () => {
    navigateToTutorial();

    cy.window().then((win) => {
      win.localStorage.setItem('isLoggedIn', 'true');
    });

    cy.contains('Add').click();
    cy.contains('Done').click();
    cy.contains('Done').click();

    cy.url().should('include', '/');
  });
});
