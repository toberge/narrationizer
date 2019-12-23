import React, { SyntheticEvent } from 'react';
import { parse } from '../game/Parser';

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
  { command: string; feedback: string | null | React.ReactText[] }
> {
  constructor(props: any) {
    super(props);
    this.state = { command: '', feedback: '' };
  }

  doTHings() {
    const thing = parse(this.state.command);
    return thing ? thing.toString() : 'nah';
  }

  render() {
    return (
      <>
        <Form
          onChange={command => this.setState({ command: command })}
          onSubmit={() => this.setState({ feedback: this.doTHings() })}
        />
        <p>{this.state.feedback}</p>
      </>
    );
  }
}
