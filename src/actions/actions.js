import dispatcher from '../dispatcher/dispatcher';
import Constants from '../constants/constants';

export default class Actions {
  static addText(text) {
    dispatcher.handleAction({
      type: Constants.ADD_TEXT,
      text
    });
  }
}
