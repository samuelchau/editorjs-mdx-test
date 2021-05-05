/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import MDX from '@mdx-js/runtime'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { CustomButton, CustomCounter, CustomSelectionBox, MyChart } from './components/CustomComponents';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '8px',
    backgroundColor: '#efefef',
    '& .MuiTextField-root': {
      width: '50ch',
    },
  },
}));

const MdxBlock = (props) => {
  const classes = useStyles();

  const [mdx, setMdx] = useState(""); // stores the MDX content
  const [isPreviewEnabled, setIsPreviewEnabled] = useState(false); // enables preview of the MDX rendering or not

  const updateMdx = (event) => {
    props.onDataChange(event.target.value);
    setMdx(event.target.value)
  }

  const handleChange = (event) => {
    console.log("checkbox label clicked!");
    setIsPreviewEnabled(prevState=>!prevState);
  }

  // provides the list of custom components available for use in the MDX content
  const componentsLibrary = {
    MuiButton: props => <Button {...props}/>,
    MyButton: props => <CustomButton {...props}/>,
    MyCounter: props => <CustomCounter {...props}/>,
    MyFruitSelection: props => <CustomSelectionBox {...props}/>,
    MyChart: () => <MyChart/>,
  }

  return (
    <>
      <Box className={classes.root}>
        <TextField
          id="outlined-multiline-flexible"
          label="Enter MDX Content"
          placeholder={ `Hints:\nThe list of available custom components includes  ${Object.keys(componentsLibrary).toString().replaceAll(",",", ")}. 
                         \nClick on the Preview checkbox to enable rendering of your MDX content.` }
          multiline
          value={mdx}
          onChange={updateMdx}
          variant="outlined"
        />
        <div style={{background: "#ddeeee"}}>
          {/* The <div>'s onClick handler is needed as a workaround because somehow the onChange handler inside <input> element does not get triggered. */}
	  <div onClick={handleChange}> 
            {/* The <input>'s "onChange" handler is not working, possibly due to conflict with EditorJS API. */}
            <input type="checkbox" id="preview" name="preview" onChange={handleChange} checked={isPreviewEnabled}/> 
	    <label htmlFor="preview">Preview</label>
	  </div>
          {
            isPreviewEnabled &&
            <MDX components={componentsLibrary}>
              {mdx}
            </MDX>
          }
        </div>
      </Box>
    </>
  );
}

export default MdxBlock;
