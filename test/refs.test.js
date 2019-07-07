import React, {useLayoutEffect, useRef} from 'react';
import ReactDOM from 'react-dom';

import {IsoVerySimple as IsoVerySimpleConnected} from './data/connect/isomorphic/iso-very-simple';
import {IsoVerySimple as IsoVerySimpleHooked} from './data/hooks/isomorphic/iso-very-simple';

describe('Forward refs to underlying component', () => {
    let mountElement;

    beforeEach(() => {
        mountElement = document.body.appendChild(document.createElement('div'));
    });

    afterEach(() => {
        ReactDOM.unmountComponentAtNode(mountElement);
        document.body.removeChild(mountElement);
    });

    describe('<Connect />', () => {
        beforeEach(() => {
            function Component() {
                const ref = useRef(null);

                useLayoutEffect(() => {
                    // Vandalize the DOM element
                    ref.current.className = 'ref woz ere';
                }, []);

                return (
                    <IsoVerySimpleConnected
                        ref={ref}
                        power={2}
                    />
                );
            }

            ReactDOM.render(<Component />, mountElement);
        });

        it('changes the root element\'s className', () => {
            expect(mountElement.querySelector('section').className).toBe('ref woz ere');
        });
    });

    describe('useIsomorphicContext()', () => {
        beforeEach(() => {
            function Component() {
                const ref = useRef(null);

                useLayoutEffect(() => {
                    // Vandalize the DOM element
                    ref.current.className = 'ref woz ere';
                }, []);

                return (
                    <IsoVerySimpleHooked
                        ref={ref}
                        power={2}
                    />
                );
            }

            ReactDOM.render(<Component />, mountElement);
        });

        it('changes the root element\'s className', () => {
            expect(mountElement.querySelector('section').className).toBe('ref woz ere');
        });
    });
});
