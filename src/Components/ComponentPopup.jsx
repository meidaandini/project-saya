import * as React from 'react';
import Dialog from '@mui/material/Dialog';

export default function CompPopup(props) {
    const {open, setOpen, children, title, action, action2, action3} = (props);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                {children}
            </Dialog>
        </div>
    );
}