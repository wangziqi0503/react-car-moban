// import { dispatch } from "rxjs/internal/observable/range";
import Axios from "axios";
import * as constants from './constants';

const changeDetail = (title, content) => ({
    type:constants.CHANGE_DETAIL,
    title,
    content
})

export const getDetail = (id) => {
    return (dispatch) => {
        Axios.get('//localhost:3000/api/detail.json?id=' + id).then((res) => {
            const result = res.data.data;
            dispatch(changeDetail(result.title, result.content));
        });
    }
}