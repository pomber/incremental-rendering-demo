/** @jsx Reactish.createElement */

export function using(Reactish) {
  class Demo extends Reactish.Component {
    render() {
      return <div>Hello</div>;
    }
  }

  return Demo;
}
