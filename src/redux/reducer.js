import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comment';
import { PROMOTIONS } from '../shared/promotion';
import { LEADERS } from '../shared/leader';

export const initialState={

  dishes: DISHES,  // lifting the state up
  comments: COMMENTS, 
  leaders: LEADERS, 
  promotions: PROMOTIONS

}

export const Reducer=(state={initialState}, action)=>{
  return state;
}