import isomorphic from '../../../../src/isomorphic';

import Simple from '../components/simple';
import getData from '../../iso-streams/simple';

export default isomorphic({
    name: 'iso-simple--no-context',
    component: Simple,
    getData,
});
