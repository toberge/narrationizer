import React from 'react';
import { parse } from '../game/parser';
import Log from './Log';
import { perform } from '../game/performer';

const Form = ({
  onChange,
  onSubmit
}: {
  onChange: (command: string) => void;
  onSubmit: () => void;
}) => (
  <fieldset>
    <legend>hello pls tell me wat to do</legend>
    Command: <input type="text" onChange={e => onChange(e.target.value)} />
    <input type="button" onClick={onSubmit} value="clickety click" />
  </fieldset>
);

export class FormContainer extends React.Component<{}, { command: string; feedback: string[] }> {
  constructor(props: any) {
    super(props);
    this.state = {
      command: '',
      feedback: [
        'this is the first line of the log',
        'try something like "go left", "pick up key" or "open door"'
      ]
    };
  }

  getThatMessage(): string {
    const parsedCommand = parse(this.state.command);
    if (parsedCommand) return perform(parsedCommand);
    else return 'invalid command';
    // return [...this.state.feedback, thing ? thing.toString() : 'nah'];
    // return this.state.feedback.push(thing ? thing.toString() : 'nah');
  }

  render() {
    return (
      <>
        <Log text={this.state.feedback} />
        <Form
          onChange={command => this.setState({ command: command })}
          onSubmit={() =>
            this.setState({ feedback: [...this.state.feedback, this.getThatMessage()] })
          }
        />
      </>
    );
  }
}
