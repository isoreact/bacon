import React, {useLayoutEffect, useState} from 'react';
import ReactDOM from 'react-dom';

import {IsoVerySimple as IsoVerySimpleConnected} from './data/connect/isomorphic/iso-very-simple';
import {IsoVerySimple as IsoVerySimpleHooked} from './data/hooks/isomorphic/iso-very-simple';

describe('Isomorphic component props change', () => {
    let originalProcessBrowser;
    let mountElement;

    beforeEach(() => {
        originalProcessBrowser = process.browser;
        process.browser = true;
        mountElement = document.body.appendChild(document.createElement('div'));
    });

    afterEach(() => {
        ReactDOM.unmountComponentAtNode(mountElement);
        document.body.removeChild(mountElement);
        process.browser = originalProcessBrowser;
    });

    describe('<Connect />', () => {
        beforeEach(() => {
            function Component() {
                const [power, setPower] = useState(1); // with initial state, should render <section>5</section>

                useLayoutEffect(() => {
                    setPower(2); // with updated state, should render <section>25</section>
                }, []);

                return (
                    <IsoVerySimpleConnected power={power} />
                );
            }

            ReactDOM.render(<Component />, mountElement);
        });

        it('updates UI', () => {
            expect(mountElement.querySelector('section').innerHTML).toBe('25');
        });
    });

    describe('useIsomorphicContext()', () => {
        beforeEach(() => {
            function Component() {
                const [power, setPower] = useState(1); // with initial state, should render <section>5</section>

                useLayoutEffect(() => {
                    setPower(2); // with updated state, should render <section>25</section>
                }, []);

                return (
                    <IsoVerySimpleHooked power={power} />
                );
            }

            ReactDOM.render(<Component />, mountElement);
        });

        it('updates UI', () => {
            expect(mountElement.querySelector('section').innerHTML).toBe('25');
        });
    });
});
