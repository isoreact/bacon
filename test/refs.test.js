import React, {useLayoutEffect, useRef} from 'react';
import ReactDOM from 'react-dom';

import IsoVerySimpleConnected from './data/connect/isomorphic/iso-very-simple';
import IsoVerySimpleHooked from './data/hooks/isomorphic/iso-very-simple';
import IsoVerySimpleNoContext from './data/no-context/isomorphic/iso-very-simple';

describe('Forward refs to underlying component', () => {
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
                    const ref = useRef(null);

                    useLayoutEffect(() => {
                        // Vandalize the DOM element
                        ref.current.className = 'ref woz ere';
                    }, []);

                    return (
                        <IsoVerySimple
                            ref={ref}
                            power={2}
                        />
                    );
                }

                ReactDOM.render(<Component />, mountElement);
            });

            test('it changes the root element\'s className', () => {
                expect(mountElement.querySelector('section').className).toBe('ref woz ere');
            });
        });
    });
});
