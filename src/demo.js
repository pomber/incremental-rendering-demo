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
        elapsed: 0, // the number shown on each Cell
        size: 4, // the size of a row
        period: 1000, // the time (in ms) between updates
        delay: 1 // the delay (in ms) for the render of each Cell
      };
      this.changeDelay = this.changeDelay.bind(this);
      this.changePeriod = this.changePeriod.bind(this);
      this.tick = this.tick.bind(this);
      this.tick();
    }
    tick() {
      setTimeout(() => {
        this.setState(s => ({ elapsed: s.elapsed + 1 }));
        this.tick();
      }, this.state.period);
    }
    changeDelay(e) {
      this.setState({ delay: e.target.value });
    }
    changePeriod(e) {
      this.setState({ period: e.target.value });
    }
    render() {
      const { elapsed, size, delay, period } = this.state;
      const text = elapsed % 10;
      const array = Array(size).fill();
      const row = array.map((x, key) => <Cell {...{ key, text, delay }} />);
      const rows = array.map((x, key) => <tr key={key}>{row}</tr>);
      return (
        <div>
          <fieldset>
            <label htmlFor="delay-range">Delay {delay} ms</label>
            <input
              id="delay-range"
              type="range"
              min="0"
              max="10"
              step="any"
              value={delay}
              onChange={this.changeDelay}
            />
            <label htmlFor="period-range">Period {Math.round(period)} ms</label>
            <input
              id="period-range"
              type="range"
              min="200"
              max="1000"
              step="any"
              value={period}
              onChange={this.changePeriod}
            />
          </fieldset>
          <table>
            <tbody>{rows}</tbody>
          </table>
        </div>
      );
    }
  }

  return Demo;
}

function wait(ms) {
  const start = performance.now();
  while (performance.now() - start < ms);
}
