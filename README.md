# Studio Bug Bash 
Welcome to the Bug Bash for Studio! This README will help you get setup with Studio and acquaint you with its features. 

## What is Studio?
Studio is a tool that lets Admins and Developers alike build React Applications with ease. For now, we're focused on Applications corresponding to a Site. But, that may change in the future. It provides a no-code, visual Editor that allows users to add and remove pages, add and remove Components to pages, and configure Components on a page. Here's a screenshot of Studio in action:

![enter image description here](https://yext-studio-images.s3.amazonaws.com/Screen+Shot+2023-02-02+at+8.58.09+AM.png)

Okay, cool. But how is this really different from SquareSpace or Landing Pages? For starters, Studio generates a React Site under the hood. That means better page performance. However, the key difference is the accessibility of the generated files. As users perform operations in the Editor, Studio is writing human-readable, well formulated TSX files to the repo. Developers can easily work with, and directly modify, these TSX files outside Studio, as need be. Neither SquareSpace nor Landing Pages make the generated code accessible. Even if they did, the code is not human readable. 

## Setting up your Studio Repository
1. To start, clone this starter repo. It mimics a PagesJS-style setup. 
2. Make sure you're using a modern Node version, such as v18. 
3. Run `npm install`. 

To make sure you're set up properly, invoke `npm run dev` in the terminal. Instead of the PagesJS dev server being spun up, you should see Yext Studio appear!

## Adding and Removing Pages
Your Site currently has just one page: `IndexPage`. You'll want to add more pages, possibly corresponding to different entity types. A new page can be added by using the `+` icon here:

![enter image description here](https://yext-studio-images.s3.amazonaws.com/Screen+Shot+2023-02-02+at+9.07.15+AM.png)

A modal will appear, prompting you to name your new page. Under the hood, a new TSX file is generated in the `src/pages` directory of your repo. If you want to remove a page, simply click the `x` icon associated with it. You can toggle between different Site pages in the Editor. To do this, simply click on the desired page name under the `Pages` header. A check-mark will appear to indicate this is the active page in Studio's Edit Mode.
## Working With Components
Now that you have a page, you probably want to do some things with it. Specifically, you'll want to add Components to it. Adding a Component to a page is simple. Once you've set the desired page to active, click the icon in the top-left and you will see a drop-down like the following:

![enter image description here](https://yext-studio-images.s3.amazonaws.com/Screen+Shot+2023-02-02+at+9.18.10+AM.png)

These are the various Components that can be added to your page. For now, you can ignore Containers and Modules. Those will be described later. Once you select a Component, such as `Banner`, it will appear in the middle preview pane. To configure the Component, click on it under the `Layers` Section. That should highlight it in the page preview. Additionally, the `Properties` shown on the left-hand side should be populated:

![enter image description here](https://yext-studio-images.s3.amazonaws.com/Screen+Shot+2023-02-02+at+9.49.08+AM.png)

These are the props of the relevant Component (in this case `Banner`). You'll notice that the Props have a toggle between `Literal` or `Expression` above them. When `Literal` is used for a prop, that means the value is static. To source the prop value from a Stream Document, you'd use `Expression`. We will go into more detail about this below. But first, if you want to remove a Component from the page, simply click the `x` icon next to it under `Layouts`. 

### Stream Powered Props
For a Stream to power a Component prop's value, additional setup needs to be done outside Studio. This would be done by the Developer. 

## Reuse through Modules

## File History and Committing Changes

What if you make a mistake in the Editor? Say removing a Page accidentally, updating a Component's Props incorrectly, etc. By maintaining a history of your edits, Studio provides powerful Undo functionality. You can undo actions one at a time, until you return to the desired state. Likewise, Studio has Redo functionality. Both features are accessed in the top-right, using these buttons:

![enter image description here](https://yext-studio-images.s3.amazonaws.com/Screen+Shot+2023-02-02+at+10.28.42+AM.png)

Once your happy with the changes made during your session, you can click the `Save` button on the top-right. This will make all updates to the necessary TSX files in the repo and create a Commit. Note that Studio does not write to any files until `Save` is invoked. The preview is actually powered by a virtual representation of the Site. 
