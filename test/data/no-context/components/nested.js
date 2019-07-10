import React from 'react';

import IsoSimple from '../isomorphic/iso-simple';

// Not really nested
export default function Nested({isLoading, a, b}) { // eslint-disable-line react/prop-types
    return (
        <section>
            {isLoading ? (
                <div>
                    Loading...
                </div>
            ) : (
                <ul>
                    <li>
                        {a}
                    </li>
                    <li>
                        {b}
                    </li>
                    <li>
                        <IsoSimple power={4} />
                    </li>
                </ul>
            )}
        </section>
    );
}
