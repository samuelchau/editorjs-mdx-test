
# EditorJS with MDX support

This project is an exercise to learn about EditorJS and MDX and to explore the feasibility of combining both to create something potentially useful for many different application areas.

The created app presents a proof of concept for adding MDX support in EditorJS. This PoC will help us evaluate the usability and the desirability of such a Markdown/MDX Editor feature in our future application's context.


## TL;DR
You can find the running Editor deployed at https://kind-bhabha-447aff.netlify.app/

The Editor is pre-loaded with two blocks of data(of type H1 heading and image), which are both editable and removable.

To add a new MDX block, click on the + and select an MDX block, then enter your MDX content on the Textfield.
The Preview checkbox when checked enables live rendering of the MDX as you type.

https://user-images.githubusercontent.com/17171717/117476092-cbf12d80-af2a-11eb-9fd3-296ef11a15c0.mp4

As a demo, below is the sequence of steps that were performed in the above video capture:
1  I first deleted the 1st block(type = "header") , 
2  Then I deleted the 2nd block(type = "image")
3  Then I added a new block of type 'mdx' , and then in the textfield **Enter MDX Content**, I started to enter some Markdown/JSX  (which will become part of the content for that block).   The **Preview** checkbox is there for the user to easily see what is the rendered output of the Markdown/JSX that has been entered.
4 Finally I clicked on the **Display Editor Ouput** button to show the entire JSON output from EditorJS


## Challenges and Issues Encountered
The following is a list of issues encountered
- Using an 'import' inline in the MDX does not work.  Importing a component for use has to be done at build/bundle time.
- Default mouse/keypress events of some components seem to be disabled, possibly due to conflict with the default event behaviors set by the EditorJS API.
- Some of EditorJS APIs are not working as expected, for example, the 'onChange' callback is not triggered when the content changes.

## Improvements and Possible Resolutions
- Check out the new packages 'mdx-bundle' and 'xdm' to see if they can help to work around the above issues.
- Dive deeper into the EditorJS API internals to find ways to override the default event behaviors.


## Basic Concepts of EditorJS

### Block Tool
......
### Inline Tool
......




## References

https://editorjs.io/creating-a-block-tool

https://mdxjs.com/

https://www.walkthrough.so/pblc/QCawSCKwOQLn/creating-a-custom-editorjs-block-tool-with-react

https://walkthrough.so/pblc/snKICMzxzedr/codelab-integrating-editor-js-into-your-react-application


### (to be continued, more to come ...)


