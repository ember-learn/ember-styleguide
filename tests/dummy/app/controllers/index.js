import Controller from '@ember/controller';
import { set } from '@ember/object';

const LOREM25 =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam inventore nihil ad voluptates velit iusto culpa. Ullam doloremque aperiam vel! Aspernatur voluptate qui officia. Omnis!';
const LOREM50 =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ullam accusamus incidunt voluptatum minima, officia illo quos dolore perferendis nobis, earum, aut enim nemo suscipit quia! Adipisci optio repellat dolore labore natus ad! Deleniti recusandae maiores totam adipisci enim rem consequuntur inventore consectetur debitis impedit, dolorum ipsum earum obcaecati deserunt dolores ducimus quisquam tempora nostrum officiis voluptatum assumenda placeat est. Rem quidem quasi nemo dignissimos eius sunt ducimus est! Sequi, impedit. Blanditiis fugit, quas maxime totam deserunt eos, quod suscipit praesentium, iure vitae provident voluptatibus magnam quisquam. Excepturi ullam accusantium laborum non vero porro libero, deserunt eveniet sequi eos illum!';

export default Controller.extend({
  verticalCards: null,
  horizontalCard: null,
  verticalCard: null,

  init() {
    this._super(...arguments);

    set(this, 'verticalCards', [
      {
        heading: 'Heading of the card',
        text: LOREM25,
        borderColor: '#E34C32',
        imageSrc: 'http://fillmurray.com/200/300',
        buttonLabel: 'Click me'
      },
      {
        heading: 'Heading of the card',
        text: LOREM25,
        borderColor: '#4A4A4A',
        imageSrc: 'http://fillmurray.com/300/300'
      },
      {
        heading: 'Heading of the card',
        text: LOREM25,
        borderColor: '#1e719b',
        imageSrc: 'http://fillmurray.com/230/300',
        buttonLabel: 'Button'
      },
      {
        heading: 'Heading of the card',
        text: LOREM25,
        borderColor: 'cornflowerblue',
        imageSrc: 'http://fillmurray.com/250/300'
      }
    ]);

    set(this, 'horizontalCard', {
      heading: 'Heading of the card',
      text: LOREM50,
      borderColor: '#E34C32',
      imageSrc: 'http://fillmurray.com/300/300',
      buttonLabel: 'Click me',
      isImageLeft: true,
      isHeadingAbove: true
    });

    set(this, 'horizontalCards', [
      {
        heading: 'Heading of the card',
        text: LOREM50,
        borderColor: '#4A4A4A',
        imageSrc: 'http://fillmurray.com/350/400',
        isImageLeft: true
      },
      {
        heading: 'Heading of the card',
        text: LOREM50,
        borderColor: '#1e719b',
        imageSrc: 'http://fillmurray.com/270/350',
        buttonLabel: 'Button',
        isImageRight: true
      }
    ]);
  }
});
