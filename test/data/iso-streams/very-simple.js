import {combineTemplate} from 'baconjs';

export default function getData(props) {
    const {power = 1} = props;

    return combineTemplate({
        state: {
            x: 5 ** power,
        },
    });
}
