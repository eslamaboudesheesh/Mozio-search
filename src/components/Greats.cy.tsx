import React from 'react';

import Greats from './Greats';

describe('<Greats />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<Greats />);
    });
});
