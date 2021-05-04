/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import MDX from '@mdx-js/runtime'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { CustomButton } from './components/CustomComponents';
import { MyChart } from './components/CustomComponents';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '8px',
    backgroundColor: '#efefef',
  },
}));

const MdxBlock = (props) => {
  const classes = useStyles();

  const [mdx, setMdx] = useState(""); // stores the MDX content
  const [isPreviewEnabled, setIsPreviewEnabled] = useState(true); // enables preview of the MDX rendering or not

  const updateMdx = (event) => {
    props.onDataChange(event.target.value);
    setMdx(event.target.value)
  }

  const handleChange = (event) => {
    console.log("checkbox label clicked!");
    setIsPreviewEnabled(prevState=>!prevState);
  }


  return (
    <>
      <Box className={classes.root}>
        <TextField
          id="outlined-multiline-flexible"
          label="Enter MDX Content"
          multiline
          value={mdx}
          onChange={updateMdx}
          variant="outlined"
        />
        <div style={{background: "#ddeeee"}}>
	  <div onClick={handleChange}>
            <input type="checkbox" id="preview" name="preview" onChange={handleChange} checked={isPreviewEnabled}/>
	    <label htmlFor="preview">Preview</label>
	  </div>
          {
            isPreviewEnabled &&
            <MDX>
              {mdx}
            </MDX>
          }
        </div>
      </Box>
    </>
  );
}

export default MdxBlock;
