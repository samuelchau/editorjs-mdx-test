
# EditorJS with MDX support

This project is an exercise to learn about EditorJS and MDX and to explore the feasibility of combining both to create something potentially useful for many different application areas.

The created app presents a proof of concept for adding MDX support in EditorJS. This PoC will help us evaluate the usability and the desirability of such a Markdown/MDX Editor feature in our future application's context.


## TL;DR
You can find the running Editor deployed at https://kind-bhabha-447aff.netlify.app/

The Editor is pre-loaded with two blocks of data(of type H1 heading and image), which are both editable and removable.

To add a new MDX block, click on the + and select an MDX block, then enter your MDX content on the Textfield.
The Preview checkbox when checked enables live rendering of the MDX as you type.


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


