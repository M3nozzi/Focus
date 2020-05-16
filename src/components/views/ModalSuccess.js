import React from 'react';
import { Modal, Button } from 'antd';
import success from "../../images/error/Login_1.svg";
class ModalSuccess extends React.Component {

  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
            <Button style={{backgroundColor:"#03DAC6", border:"none", borderRadius:"8px", fontFamily:'Roboto'}}type="primary" onClick={this.showModal}>
          Update Profile
        </Button>
        <Modal
          title=""
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <img src={success} alt="success"/>
                <p>Success!</p>
          <p >Your profile was update</p>
        </Modal>
      </div>
    );
  }
}

export default ModalSuccess;