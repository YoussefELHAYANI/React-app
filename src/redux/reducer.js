import { DISHES } from '../components/shared/dishes';
import { COMMENTS } from '../components/shared/comments';
import { PROMOTIONS } from '../components/shared/promotion';
import { LEADERS } from '../components/shared/leaders';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};
// state = initialeState est un ES6 methode pour definir les defaults values
export const Reducer = (state = initialState, action) => {
    return state;
};