import React from 'react';
import {Button,Dialog,DialogActions,DialogTitle} from '@material-ui/core'

export default function Confirm(props) {
  const [open, setOpen] = React.useState(props.open);
  const {title, onConfirm } = props;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle disableTypography><h6>{title || 'Tem certeza que deseja excluir?'}</h6></DialogTitle>
        <DialogActions className="justify-content-center mb-2">
            <Button onClick={() => { handleClose(); }}>
              Não
            </Button>

            <Button onClick={() => {
              onConfirm();
              handleClose();
            }}
              variant="contained"
              color="primary"
            >
              Sim
            </Button>
          </DialogActions>
      </Dialog>
    </div>
  );
}
