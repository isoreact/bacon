import React from 'react';

import useIsomorphicContext from '../../../../src/use-isomorphic-context';

import SimpleContext from '../../context/simple-context';

export default function Simple() {
    const state = useIsomorphicContext(SimpleContext);

    return (
        <section>
            {!!state && state.x}
        </section>
    );
}
