import React, { RefObject } from 'react';
import './Log.css';

export default class Log extends React.Component<{ text: string[] }, {}> {
  private bottomRef = React.createRef<HTMLDivElement>();

  componentDidUpdate(prevProps: Readonly<{ text: string[] }>, prevState: Readonly<{}>, snapshot?: any): void {
    if (this.bottomRef.current) this.bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <div id="log">
        {this.props.text.map((text, i) => <p key={i}>{text}</p>)}
        <div ref={this.bottomRef} />
      </div>
    );
  }
}
