import React from 'react';

import Connect from '../../../../src/connect';

import VerySimpleContext from '../../context/very-simple-context';

export default React.forwardRef((props, ref) => (
    <section ref={ref}>
        <Connect context={VerySimpleContext}>
            {({x}) => x}
        </Connect>
    </section>
));
