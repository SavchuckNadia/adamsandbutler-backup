import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


import closeIcon from "../../assets/svg/close-black.svg";
import "./Modal.scss"
import { ISignUpModal } from '../../interfaces/ISignUpModal';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}


function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

export default function CustomizedDialogs(props: ISignUpModal) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <span onClick={handleClickOpen}>
                {props.btnTitle}
            </span>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="dialog-title"
                open={open}
            >
                <div className="close-enquiry" onClick={handleClose}>
                    Close
                    <div className="wrap-icon-close">
                        <img src={closeIcon} alt="Close icon" />
                    </div>
                </div>
                <BootstrapDialogTitle id="dialog" onClose={handleClose}>
                    {props.modalTitle}
                </BootstrapDialogTitle>
                <p>Sign up to receive luxury travel news, guides and the latest experiences from Adams &amp; Butler.
                </p>
                <DialogContent>
                    {props.children}
                </DialogContent>
            </BootstrapDialog>
        </div>
    );
}
