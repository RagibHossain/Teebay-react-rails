import { useState } from "react";
import { Modal, Button } from "semantic-ui-react";



const CommonModal  = ({ trigger, action, header,buttonText,btnColor,cancelText}) => {
  const [open, setOpen] = useState(false);
  const [loading,setLoading] = useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={trigger}
    >
      <Modal.Header>{header}</Modal.Header>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>{cancelText}</Button>
        <Button
          color={btnColor}
          loading={loading}
          onClick={() => {
            setLoading(true);
            action();
            setLoading(false);
            setOpen(false);
          }}
        >
         {buttonText}
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default CommonModal;