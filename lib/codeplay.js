'use babel';

import CodeplayView from './codeplay-view';
import { CompositeDisposable } from 'atom';

export default {

  codeplayView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.codeplayView = new CodeplayView(state.codeplayViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.codeplayView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'codeplay:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.codeplayView.destroy();
  },

  serialize() { //allows for saved states in between uses!!
    return {
      codeplayViewState: this.codeplayView.serialize()
    };
  },

  toggle() { //gotta mess with this bad boy to toggle foxDot somehow...
    console.log('Codeplay was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
