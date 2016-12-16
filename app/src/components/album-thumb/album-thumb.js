import template from './album-thumb.html';
import styles from './album-thumb.scss';

export default {
  template,
  bindings: {
    album: '=',
    remove: '<',
    toggleAlbum: '<'
  },
  controller,
  controllerAs: '$thumb'
};

function controller() {
  this.styles = styles;
}