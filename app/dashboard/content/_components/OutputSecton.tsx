import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Copy } from 'lucide-react';
import { PROPS } from '@/app/(type)/Type';

const OutputSection = ({ aiGeneratedOutput }: PROPS) => {
  const editRef: any = useRef();
  useEffect(() => {
    const editorInstance = editRef.current.getInstance();
    editorInstance.setMarkdown(aiGeneratedOutput);
  }, [aiGeneratedOutput]);

  return (
    <div className='bg-white shadow-lg border'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Your Result</h2>
        <Button className='flex gap-2'>
          <Copy className='h-4 w-h' /> Copy
        </Button>
      </div>
      <Editor
        ref={editRef}
        initialValue="Your Result will appear here!"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
      />
    </div>
  );
}

export default OutputSection;
