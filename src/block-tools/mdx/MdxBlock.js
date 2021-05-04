/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import MDX from '@mdx-js/runtime'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { CustomButton, CustomCounter, CustomSelectionBox } from './components/CustomComponents';

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
  const components = {
    MuiButton: props => <Button {...props}/>,
    MyButton: props => <CustomButton {...props}/>,
    MyCounter: props => <CustomCounter {...props}/>,
    MyFruitSelection: props => <CustomSelectionBox {...props}/>,
  }

  return (
    <>
      <Box className={classes.root}>
        <TextField
          id="outlined-multiline-flexible"
          label="Enter MDX Content"
          placeholder=""
          multiline
          value={mdx}
          onChange={updateMdx}
          variant="outlined"
        />
        <div style={{background: "#ddeeee"}}>
	  <div onClick={handleChange}> // This onClick handler is needed as a workaround because somehow the onChange handler inside <input> element does not get triggered.
            <input type="checkbox" id="preview" name="preview" onChange={handleChange} checked={isPreviewEnabled}/> // The "onChange" handler is not working, possibly due to conflict with EditorJS API.
	    <label htmlFor="preview">Preview</label>
	  </div>
          {
            isPreviewEnabled &&
            <MDX components={components}>
              {mdx}
            </MDX>
          }
        </div>
      </Box>
    </>
  );
}

export default MdxBlock;
