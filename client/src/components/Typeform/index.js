import React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';

class TypeformWidget extends React.Component {
  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
  }

  openForm() {
    this.typeformEmbed.typeform.open();
    // console.log(this.state.user);
  }

  render() {
    return (
      <div className="ExamplePopup">
        <ReactTypeformEmbed
          popup
          autoOpen={false}
          url="https://gurumatch.typeform.com/to/GA1xBQ"
          hideHeaders
          hideFooter
          buttonText="Go!"
          style={{ top: 100 }}
          ref={tf => {
            this.typeformEmbed = tf;
          }}
        />
        <button className="btn btn-primary" onClick={this.openForm} style={{ cursor: 'pointer' }}>
          Start Survey
        </button>
      </div>
    );
  }
}

export default TypeformWidget;
