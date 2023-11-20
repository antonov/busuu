import { useState } from "react";
import Modal from "./Modal";
import useCreateModal from "@/hooks/useCreateModal";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
export default function CreateModal() {
    const [isLoading, setIsLoading] = useState(false);
    const createModal = useCreateModal();
    const [content, setContent] = useState('');
    const handleInputChange = (event: any) => { 
        setContent(event.target.value);
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:3000/exercise', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content, user_id: 'c4b22487-7e1e-40cf-b28f-38506c456df8' })
            });
            const data = await response.json();
            console.log(data);
            createModal.onClose();
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <Modal
        disabled={isLoading}
        isOpen={createModal.isOpen}
        title='Create a new exercise'
        description='Please enter the content of the exercise.'
        onClose={createModal.onClose}
        >
        <form onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="exercise-content">Content</Label>
              <Input className="border rounded-md p-2 w-full" id="exercise-content" required onChange={handleInputChange} value={content} />
              {content.length > 100 && <p className="text-red-500">Please shorten your exercise!</p>} 
              <Button
                className="w-full bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900"
                disabled={isLoading}
                type="submit"
              >
                Create!
              </Button>
            </div>
          </form>    
        </Modal>
    )
}