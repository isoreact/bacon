import React from 'react';

export default React.forwardRef(function VerySimple({x}, ref) {
    return (
        <section ref={ref}>
            {x}
        </section>
    );
});
