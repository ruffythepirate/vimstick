# Introduction

Vimstick is an attempt to create a lightweight, easy to use, stickies program that can help you organize projects and tasks that need to be done in these projects. The project idea has drawn inspiration from the browser qutebrowser, that in a genius way has made web browsing into a smooth experience. In the same way this project strives to make such tasks that trello solves for you into a smooth experience in the confines of a desktop app.

# Technology

The project uses NW, and hopes to be platform indepent in the long run.

# Running

1. Install the node packages by running `npm install` in the root folder.
2. run `node_modules/nw/bin/nw .` and the application is running.

# Feature Ambition:

1. A project planner that sorts information in a hierarchy.
2. Projects are the top nodes. Underneath there will be Tasks to be done, that can contain subtasks.
3. Tasks contains a change history that is readonly (time changes where made, of finished or not ...)
4. By doing tab indentation, one indicates the hierarchy.

## Navigation 

Navigation in the project is done in a VIM inspired way:
1. jhkl to navigate through the nodes.
2. / to search through the content.
3. i to go into insert node where one can edit the current node.
4. esc to go back to navigation mode.
5. : get to command mode.
5. :w saves
5. :q quits
5. :wq saves and quits

# Troubleshooting

## Running in Fedora

I had problems starting nw in fedora 25, it complained that libXss.so.1 could not be found. This was resolved by running `sudo dnf install libXScrnSaver`