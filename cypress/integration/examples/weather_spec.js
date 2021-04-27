describe('Weather Home Page', () => {
  beforeEach(() => {
    cy
      .intercept('/api/location/2514815/', { fixture: 'fakeWeather.json' })
      .intercept('/api/location/search/?query=washington', { fixture: 'fakeCity.json' })
      .visit('http://localhost:3000')
  })

  it('Should display a fully loaded header', () => {
    cy
      .get('.nav-bar').should('be.visible')
      .get('.header-text').should('be.visible')
      .get('.logo').should('be.visible')
  })

  it('Should display a fully loaded subheader', () => {
    cy
      .get('.pin-container').should('be.visible')
      .get('.red-pin').should('be.visible')
      .get('.search-icon').should('be.visible')
      .get('.clear-button').should('be.visible')
      .get('input').should('be.visible')
      .get('input').should('be.empty')
  })

  it('Should be able to display the city details', () => {
    cy
      .get('.header-container')
      .should(($headerContainer) => {
        expect($headerContainer).to.contain('Forecast')
        expect($headerContainer).to.contain('Coordinates')
      })
      .get('.header-container__pin').should('be.visible')
  })

  it('Should be able to display the daily weather details', () => {
    cy
      .get('.card-container')
      .should(($cardContainer) => {
        expect($cardContainer).to.contain('Heavy Clouds')
        expect($cardContainer).to.contain('57')
        expect($cardContainer).to.contain('Humidity: 62%')
        expect($cardContainer).to.contain('Wind Speed: 6 MPH')
        expect($cardContainer).to.contain('Wind Direction: ENE')
        expect($cardContainer).to.contain('Air Pressure: 1021.5 MBAR')
        expect($cardContainer).to.contain('Visibility: 9 Miles')
      })
  })

  // it('Should be able to click on a nav button and be redirected to a new link', () => {
  //   cy
  //     .get('.movie-card:first').contains('Money').click()
  //     .url().should('include', '694919')
  // });
})


