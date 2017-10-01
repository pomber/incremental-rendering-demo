/** @jsx Reactish.createElement */

export function using(Reactish) {
  class Cell extends Reactish.Component {
    render() {
      return <td>{this.props.text}</td>;
    }
  }

  class Demo extends Reactish.Component {
    constructor(props) {
      super(props);
      this.state = {
        elapsed: 0,
        size: 4,
        period: 1000
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
      const { elapsed, size } = this.state;
      const array = Array(size).fill();
      const row = array.map((x, i) => <Cell text={elapsed % 10} key={i} />);
      const rows = array.map((x, i) => <tr key={i}>{row}</tr>);
      return (
        <table>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }

  return Demo;
}
