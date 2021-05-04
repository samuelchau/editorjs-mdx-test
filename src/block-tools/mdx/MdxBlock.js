/* eslint-disable react-hooks/exhaustive-deps */
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { default as React, useState } from 'react';
import MDX from '@mdx-js/runtime'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '8px',
    backgroundColor: '#efefef',
    width: '500px',
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
