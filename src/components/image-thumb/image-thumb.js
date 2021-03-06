import template from './image-thumb.html';
import styles from './image-thumb.css';

export default {
  template,
  bindings: {
    image: '=',
    remove: '<',
    toggleView: '&'
  },
  controller
};

function controller() {
  this.styles = styles;
  
  this.delete = () => {
    this.remove(this.image);
  };

  this.view = (name) => {
    this.toggleView(name);
  };
}