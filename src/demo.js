/** @jsx Reactish.createElement */

export function using(Reactish) {
  class Cell extends Reactish.Component {
    render() {
      const { text, delay } = this.props;
      wait(delay);
      return <td>{text}</td>;
    }
  }

  class Demo extends Reactish.Component {
    constructor(props) {
      super(props);
      this.state = {
        elapsed: 0,
        size: 4,
        period: 1000,
        delay: 0
      };
      this.tick = this.tick.bind(this);
      this.tick();
    }
    tick() {
      setTimeout(() => {
        this.setState(s => ({ elapsed: s.elapsed + 1 }));
        this.tick();
      }, this.state.period);
    }
    render() {
      const { elapsed, size, delay } = this.state;
      const text = elapsed % 10;
      const array = Array(size).fill();
      const row = array.map((x, key) => <Cell {...{ key, text, delay }} />);
      const rows = array.map((x, key) => <tr key={key}>{row}</tr>);
      return (
        <table>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }

  return Demo;
}

function wait(ms) {
  const start = performance.now();
  while (performance.now() - start < ms);
}
