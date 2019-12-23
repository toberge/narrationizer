import React, { SyntheticEvent } from 'react';
import { parse } from '../game/Parser';
import Log from './Log';

const Form = ({
  onChange,
  onSubmit
}: {
  onChange: (command: string) => void;
  onSubmit: () => void;
}) => (
  <fieldset>
    <legend>hello pls tell me</legend>
    Command: <input type="text" onChange={e => onChange(e.target.value)} />
    <input type="button" onClick={onSubmit} value="clickety click" />
  </fieldset>
);

export class FormContainer extends React.Component<
  {},
  { command: string; feedback: string[] }
> {
  constructor(props: any) {
    super(props);
    this.state = { command: '', feedback: ['this is the first line of the log'] };
  }

  updateLog() {
    const thing = parse(this.state.command);
    return [...this.state.feedback, thing ? thing.toString() : 'nah'];
    // return this.state.feedback.push(thing ? thing.toString() : 'nah');
  }

  render() {
    return (
      <>
        <Log text={this.state.feedback} />
        <Form
          onChange={command => this.setState({ command: command })}
          onSubmit={() => this.setState({ feedback: this.updateLog() })}
        />
      </>
    );
  }
}
