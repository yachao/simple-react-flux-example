import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import Constants from '../constants/constants';

let data = { texts: [] };

class TextStore extends EventEmitter {
  constructor() {
    super();
    this.dispatchToken = this.registerCallbacks();
  }

  getState() {
    return data;
  }

  addChangeListener(callback, change = Constants.CHANGE) {
    this.on(change, callback);
  }

  removeChangeListener(callback, change = Constants.CHANGE) {
    this.removeListener(change, callback);
  }

  emitChange(change = Constants.CHANGE) {
    this.emit(change);
  }

  registerCallbacks() {
    return dispatcher.register((action) => {
      switch(action.type) {
        case Constants.ADD_TEXT:
          data.texts.push(action.text);
          this.emitChange(Constants.CHANGE_TEXT);
          console.log(data.texts);
          break;

        default:
          break;
      }
    });
  }
}

let textStore = new TextStore();
export default textStore;
