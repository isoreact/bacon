import isomorphic from '../../../../src/isomorphic';

import NestedWithStyles from '../components/nested-with-styles';
import NestedWithStylesContext from '../../context/nested-with-styles-context';
import getData from '../../iso-streams/nested-with-styles';

export default isomorphic({
    name: 'iso-nested-with-styles--hooked',
    component: NestedWithStyles,
    context: NestedWithStylesContext,
    getData,
});
