'use client';

import { useCallback, useEffect, useState } from "react";
import { setTimeout } from "timers";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    children?: React.ReactNode;
    disabled?: boolean;
}
const Modal: React.FC<ModalProps> = ({isOpen, onClose, title, description, children, disabled}) => {
    const [showModal, setShowModal] = useState(isOpen);
    useEffect(() => {setShowModal(isOpen)}, [isOpen]);
    
    const handleClose = useCallback(
      () => {
        if (disabled) return;

        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300);
      },
      [disabled, onClose],
    );
    
    if (!isOpen) {
        return null;
    }

    const onChange = (open: boolean) => {
        if (!open) {
            handleClose();
        }
    };

    return (
        <>
        <Dialog open={showModal} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                    {children}
                </DialogHeader>
            </DialogContent>
        </Dialog>
        </>
    )
}
 
export default Modal;