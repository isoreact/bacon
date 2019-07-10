import isomorphic from '../../../../src/isomorphic';

import NestedWithStyles from '../components/nested-with-styles';
import getData from '../../iso-streams/nested-with-styles';

export default isomorphic({
    name: 'iso-nested-with-styles--no-context',
    component: NestedWithStyles,
    getData,
});
