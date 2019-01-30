<center>
 
### AUSTIN COMMUNITY COLLEGE 
#### Web Software Bootcamp 2018
###### January 2019 - August 2019

</center>

# GOALS

## Set up online accounts
  
  - Github.com : you should have already done this by now.
  - LinkedIn : if you don't have a LI account, start one and start building it.  See Job Search section below for some tips.  We shall discuss this more later in this program.
  - Slack.com 
    - Setup Slack client on your desktop (both Windows and Linux if you have both)
    - Setup Slack client on your phone
    - Review functionality.  You may ask for help from slackbot. Try it.
    - What channels are there?  What are they for? 
    - Direct messaging and 1-to-many direct messaging.  Try it with one or multiple class mate or instructors.
    - Direct message yourself about any reminders to yourself.
    - Try threaded conversations to avoid clutter.  Look for a chat symbol on a message.
    - Have fun with emoji's.
    
## Linux Environment Setup (Optional)

  If you are on a Apple OSX machine, you don't need to do these.  
  
  If you are on Windows and are very familiar with Windows skip the first option below.  Second option below is a slow start into Bash and Linux.  You may set this up now or do it later during the program.

  If you really want to begin using Linux, then try the first option below.  
  
  
  1. Install dual boot with Ubuntu Linux 16.04 LTS on Windows machine, if you have ~ 80 GB disk storage to spare.  Ask for instructor help before or during class.  This is for those who wish to have the full Linux experience, but can reboot into Windows.  [Suggested instructions](https://www.tecmint.com/install-ubuntu-16-04-alongside-with-windows-10-or-8-in-dual-boot/)

     or

  1. Install Ubuntu 16.04 LTS on Your Windows 10 machine (10 min).  This is meant for those that wish to stay with Windows 10.  You can have bite of both worlds.  Ask instructor help if necessary.  [Suggested Instructions](https://docs.microsoft.com/en-us/windows/wsl/install-win10)


  ## Apps Installations
  
  - Chrome browser [Instructions for Linux](https://askubuntu.com/questions/510056/how-to-install-google-chrome)
  - VSCode (editor) [Download](https://code.visualstudio.com/Download)
    Please check out how to get started with VS Code.  We'll do a deeper dive into it in a couple of weeks.
  - Curl (already available on Mac OSX)
  - git (already available on Mac OSX).  Do not install the Github Desktop or another Git client just yet.  Let's understand it without a client first.
  
  ## Node.js Installation

  NodeJS is the back-end platform that runs with JavaScript.  We will learn about NodeJS later and use it intensively.  For now, we're going to just install it on our machines (there are other uses of `node` and `npm` that we can benefit from right away.)

  Now on to the installation.  Like most things in software, there are many ways to accomplish this simple task.  We can easily visit https://nodejs.org/en and easily install it.  However, we'll take a slightly different path.  We'll use NVM which stands for Node Version Manager.  Why?  Because, we often need to use different versions of node and NVM makes it very simple to switch versions in Linux/OSX environments.

  **Introducing nvm**

  NVM stands for Node Version Manager. As the name suggests, it helps you manage and switch between different Node versions with ease. It provides a command line interface where you can install different versions with a single command, set a default, switch between them and much more.

  NVM supports (i.e. runs on) Linux and OSX.  Those using Windows may also go to and follow instructions at [NVM-Windows](https://github.com/coreybutler/nvm-windows). The commands are pretty much the same between Linux and Windows.  However, let's proceed assuming you are using Linux/OSX.

  If you already have Node or NPM installed (try running `node -v` or `nodejs -v` or `npm -v` on command line and see if they work), please uninstall them.

  **Installing C++ Compiler**

  You also need a C++ compiler installed on Mac. You may do this by running the following command within the Terminal app
  
  ```
    xcode-select --install
  ```   
  
  On Linux you should install the build essential Linux software package (to get that C++ compiler) by using these commands 

  ```
    sudo apt-get update
    sudo apt-get install build-essential
  ```

  **Installing NVM**

  Run the following command using curl.  If you don't have curl (i.e. the following don't run, go back and install curl first)

  ```
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
  ```
  This will clone the nvm repository to ~/.nvm and will make the required changes to your bash profile, so that nvm is available from anywhere in your terminal.  Close the terminal app and restart it so that the changes take effect.  If you cannot run nvm script below, make sure the following commands exist within your startup file (either `~/.bash_profile` or `~/.bashrc`).
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

  That’s it, nvm is installed and ready to be used.

  **Using NVM**

  If installed correctly, the nvm command is available anywhere in you terminal. Let’s see how to use it to manage Node.js versions.  You might have to close your Terminal (Ctrl-D) and start over for the path settings that point to the `nvm` command to take effect.

  **Installing Node**

  Now using NVM we are going to install node in our system.  To install a specific version, we can run the following
  ```
    nvm install 8.9.4
  ```

  To find out which versions are availale, on Linux/OSX we may run
  ```
    nvm ls-remote
  ```
  and on Windows we may run
  ```
    nvm ls available
  ```

  To install the latest stable release, we may use (`lts` stands for long term stable)
  ```
    nvm install node --lts
  ```

  To see which versions are installed on your machine, run
  ```
    nvm ls
  ```

  **NPM**

  You might have seen that alongside Node, a program called NPM was also installed.  NPM stands for Node Package Manager.  It is incredibly useful in our work going forward.  We'll install tons of software and node packages using npm.  Hang on tight!

## Command Line
    
  The following topics shall be covered in class.
    
1. Show current directory and contents of directory
1. Moving between directories
1. Creating files and directories
1. Write text to a file
1. View contents of a file
1. Deleting files and directories
1. Copying and pasting files and directories
1. Moving/cutting files and directories
1. Running multiple commands
1. Changing permissions
1. Run as administrator
1. Connecting to another computer or server
1. A few more useful commands
1. Using a basic text editor.  Install and try vim.

  #### Command Line Projects

  1. Manage your files
  1. Manage your folders and files
  1. Manage your files - move, find differences, search by name and content, permissions.
  
  #### Good Reference  
  
  [Linux Command Line Reference - Book](https://drive.google.com/open?id=0BzoiFzP9vwqAdUtFNENYTktVZ1U)
  
  Review this and come back to it if you are not sure of how to do something, or what some command means.


## Git

  1. Go through ["Git It"](https://try.github.io/) on github.io - it is thorough and will teach you `git` using `github.com` curated content.  Make sure you thoroughly understand each step of this exercise.  Let's discuss in class during the work time.

  2. Create your local repo, by cd-ing into a folder (may I suggest your Documents folder?) and by using 
  ```
    git init
  ``` 
  3. Add a text file by
  ```
      touch myFaves.txt
  ```
  4. Add some text to the file

  5. Check on what's changed by
  ```
      git status            ### tells you which files have changed and much more info
      git diff [file name]  ### tells you what the changes are in each file
  ``` 
  6. Add the file to your staging area by
  ```
      git add .  ### notice the period 
  ```
  7. Check the status now
  ```
      git status
  ```
  8. Commit the change, and at the same time saving a short message describing the change
  ```
      git commit -m "My first commit, yay!"
  ```
  9. See a history of changes by
  ```
     git log             ### a full history of changes
                         ### or
     git log --oneline   ### a shorter one line history          
  ```
  
## HTML Essential Training

 ##### HTML and a Web Page

 Lecture : in class.  This will be updated with link to the Slides after the class in the slides.md file under 00-Instructions folder.
  
 ##### MDN HTML Intro
 
  The following Mozilla Developer Network is an excellent, authoritative introduction to building web pages using HTML.  It covers issues that you need to know as a developer and many HTML Introductory Courses skip over.
  
  [Mozilla Developer Network HTML Introduction](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
      
## HTML Projects    
  1. About Jon Arbuckle
  2. Steve Jobs Fansite
  3. The Breakfast Restaurant
  4. Hotel Room Service
  5. Become a Programmer, Travel the World

  When writing HTML, please run validation on it.  A decent validator is a Firefox Add-on called HTML Validator.  Once enabled, it shows your mistakes in the Validator tab in Dev Tools.  There's nothing like that in Chrome.

## Discussions and Evaluations

Most Saturdays we will have discussions about lessons learnt from the week, open and anonymous feedback and evaluation of how much you learnt.  The evaluations would progressively get more challenging :-).

  1. Demo - how to run a Live Server.
  2. Demo - using JSBin 
  2. Jobs, Careers, Skills, Competencies etc. - [Questions and Discussions](https://docs.google.com/presentation/d/1COZafRfr57LWVcGwrxdH2EgLa7g5-dpjTmiTScNSHUo/edit?usp=sharing) (15 min)
    2.1. What did you take away from Job Search discussion #1?
  3. Week 1 Feedback [Survey Monkey](https://www.surveymonkey.com/r/K7ML6ZT)
  4. Plan for Week 2
