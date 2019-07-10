import isomorphic from '../../../../src/isomorphic';

import ThrowsErrorContext from '../../context/throws-error-context';
import getData from '../../iso-streams/throws-delayed-error';
import ThrowsError from '../components/throws-error';

export default isomorphic({
    name: 'iso-throws-delayed-error--connected',
    component: ThrowsError,
    context: ThrowsErrorContext,
    getData,
});
