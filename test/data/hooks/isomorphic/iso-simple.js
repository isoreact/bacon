import isomorphic from '../../../../src/isomorphic';

import Simple from '../components/simple';
import SimpleContext from '../../context/simple-context';
import getData from '../../iso-streams/simple';

export default isomorphic({
    name: 'iso-simple--hooked',
    component: Simple,
    context: SimpleContext,
    getData,
});
