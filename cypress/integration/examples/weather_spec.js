describe('Weather Home Page', () => {
  beforeEach(() => {
    cy
      .intercept('https://www.metaweather.com/api/location/search/?query=london', { fixture: 'fakeCity.json' })
      .intercept('https://www.metaweather.com/api/location/44418/', { fixture: 'fakeWeather.json' })
      .visit('http://localhost:3000')
  })

  it('Should display a fully loaded header', () => {
    cy
      .get('.nav-bar').should('be.visible')
  })
})