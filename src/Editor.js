/* eslint-disable react-hooks/exhaustive-deps */
import { default as React, useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'; 
import SimpleImage from './block-tools/simple-image/simple-image'; 

const DEFAULT_INITIAL_DATA = () => {
  return {
    "time": new Date().getTime(),
    "blocks": [
      {
        "type": "header",
        "data": {
          "text": "This is a header.",
          "level": 1
        }
      },
      {
        "type": "image",
        "data": {
          "url": "https://cdn.pixabay.com/photo/2020/03/07/05/18/coffee-4908764_960_720.jpg",
          "caption": "Time for a break"
        }
      },
    ]
  }
}

const EDITTOR_HOLDER_ID = 'editorjs';

const Editor = (props) => {
  const ejInstance = useRef();
  const [editorData, setEditorData] = React.useState(DEFAULT_INITIAL_DATA);
  const [output, setOutput] = React.useState(JSON.stringify(DEFAULT_INITIAL_DATA, null, 4));

  // This will run only once
  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }
    return () => {
      ejInstance.current.destroy();
      ejInstance.current = null;
    }
  }, []);

  const initEditor = () => {
    const editor = new EditorJS({
      holder: EDITTOR_HOLDER_ID,
      logLevel: "ERROR",
      data: editorData,
      onReady: () => {
        ejInstance.current = editor;
      },
      onChange: async () => {
        console.log("onChange()");
        let content = await this.editorjs.saver.save();
        // Put your logic here to save this data to your DB
        setEditorData(content);
      },
      autofocus: true,
      tools: { 
        header: Header,
        image: SimpleImage,
      }, 
    });
  };

  const saveEditorContent = () => {
    ejInstance.current?.save().then( savedData => {
      console.log("save content... ", JSON.stringify(savedData, null, 4));
      setOutput(JSON.stringify(savedData, null, 4));
    })
    
  }

  return (
    <React.Fragment>
      <button id="save-button" onClick={saveEditorContent}>Click to display output</button>
      <div style={{background: "#cceeee"}} id="output">{output}</div>
      <div id={EDITTOR_HOLDER_ID}> </div>
    </React.Fragment>
  );
}

export default Editor;
