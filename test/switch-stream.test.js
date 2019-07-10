import React, {useLayoutEffect, useState} from 'react';
import ReactDOM from 'react-dom';

import IsoVerySimpleConnected from './data/connect/isomorphic/iso-very-simple';
import IsoVerySimpleHooked from './data/hooks/isomorphic/iso-very-simple';
import IsoVerySimpleNoContext from './data/no-context/isomorphic/iso-very-simple';

describe('Isomorphic component props change', () => {
    let mountElement;

    beforeEach(() => {
        mountElement = document.body.appendChild(document.createElement('div'));
    });

    afterEach(() => {
        ReactDOM.unmountComponentAtNode(mountElement);
        document.body.removeChild(mountElement);
    });

    [
        {
            name: '<Connect />',
            IsoVerySimple: IsoVerySimpleConnected,
        },
        {
            name: 'useIsomorphicContext()',
            IsoVerySimple: IsoVerySimpleHooked,
        },
        {
            name: 'No context',
            IsoVerySimple: IsoVerySimpleNoContext,
        },
    ].forEach(({name, IsoVerySimple}) => {
        describe(name, () => {
            beforeEach(() => {
                function Component() {
                    const [power, setPower] = useState(1); // with initial state, should render <section>5</section>

                    useLayoutEffect(() => {
                        setPower(2); // with updated state, should render <section>25</section>
                    }, []);

                    return (
                        <IsoVerySimple power={power} />
                    );
                }

                ReactDOM.render(<Component />, mountElement);
            });

            it('updates UI', () => {
                expect(mountElement.querySelector('section').innerHTML).toBe('25');
            });
        });
    });
});
