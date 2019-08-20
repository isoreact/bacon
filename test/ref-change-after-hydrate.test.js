import React, {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import {Bus, combineTemplate} from 'baconjs';

import hydrate from '../src/hydrate';
import isomorphic from '../src/isomorphic';
import renderToHtml from '../src/render-to-html';

jest.mock('uuid/v1');
require('uuid/v1').mockImplementation(() => '0123456789abcdef');

describe('Change ref after hydration', () => {
    let mounts = 0;

    const bus = new Bus();

    const Child = isomorphic({
        name: 'child',
        component: React.forwardRef((props, ref) => {
            useEffect(
                () => {
                    ++mounts;
                },
                []
            );

            return (
                <div ref={ref}>
                    Child
                </div>
            );
        }),
        getData: (props$) => props$.map((state) => ({state})), // generate new state every time props change
    });

    const Parent = isomorphic({
        name: 'parent',
        component: () => {
            const [refIndex, setRefIndex] = useState(0);
            const childRefs = [useRef(null), useRef(null)];

            // Make this component, and therefore the child, re-render.
            useEffect(
                () => {
                    setRefIndex(1);
                },
                []
            );

            // Notify readiness to test
            useEffect(
                () => {
                    if (refIndex === 1) {
                        bus.push(null);
                    }
                },
                [refIndex]
            );

            return (
                <div>
                    <Child ref={childRefs[refIndex]} />
                </div>
            );
        },
        getData: (props$) => combineTemplate({
            state: {
                shouldInitiallyRenderChild: props$.map(({shouldInitiallyRenderChild}) => shouldInitiallyRenderChild),
            },
        }),
    });

    beforeEach(async () => {
        document.body.appendChild(document.createElement('div'));
        document.body.innerHTML = await renderToHtml(<Parent />);
        eval(document.querySelector('script').innerHTML);
        hydrate(Parent);

        // Wait until component updates are complete
        await bus.firstToPromise();
    });

    afterEach(() => {
        ReactDOM.unmountComponentAtNode(document.getElementById('0123456789abcdef'));
        delete window.__ISO_DATA__;
        document.body.innerHTML = '';
        mounts = 0;
    });

    test('it mounts only once', () => {
        expect(mounts).toBe(1);
    });
});
