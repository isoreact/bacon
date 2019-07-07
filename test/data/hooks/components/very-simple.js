import React from 'react';

import useIsomorphicContext from '../../../../src/use-isomorphic-context';

import VerySimpleContext from '../../context/very-simple-context';

export default React.forwardRef(function VerySimple(props, ref) {
    const {x} = useIsomorphicContext(VerySimpleContext);

    return (
        <section ref={ref}>
            {x}
        </section>
    );
});
