
# React To-Do List: Project Prompt
Our goal is to create a To Do List UI. This UI will have 6 main components:

6 components (Header, Sign In, To Do(to do list, to do, to do form), Completed List)

- A sign in form that links to the task list 

- Header that labels the 'To Do list'. This is just a basic application identifier

- A form that adds a To Do task item to the list. The default complete should be set to false.

- A list to display each to do item. Next to each item will be three buttons displayed(check box, a trash can, edit button). 
    - When the check box is clicked it checks it off and puts a line through the text then adds this task to to the completed list page. 
    - When the trash can button is clicked it deletes the item from the list
    - When the edit button is clicked you are able to change the text

- A page that list all the completed tasks once marked as completed


# Step-by-Step start to creating a to do list

1. Create a React application
npm: npx create-react-app todo-list

cd into todo-list and run npm install. Next npm start. Your project should now be served on localhost:300

2. Create components folder

We will create a components folder in the src directory and add 4 folders within it:

Header
Sign In
Todo
Completed

Inside these folders we will add  files in each folder


### Header
Header.js - This is where all of our functional components will go.
Header.css - This is where the styles for the application will go.
### Sign In
SignIn.js - This is where all of our functional components will go.
SignIn.css - This is where the styles for the application will go.

### Todo 
ToDo.js - This is where all of our functional components will go.
ToDoForm.js - This is where all of our functional components will go.
ToDOList.js - This is where all of our functional components will go.
ToDo.css - This is where the styles for the application will go.

### Completed
Completed.js - This is where all of our functional components will go.
Completed.css - This is where the styles for the application will go.

3. App.js
Navigate to App.js and get rid of everything between the two <div> tags. 

4. Header
Then, Create a presentational component that will display a header identifying the name of your application. Export your Header and import it to App.js. In the empty <div>, add <Header />.

# DAY 1 

Each section will be broken into 5 days. We will work step by step to make sure each task for this assignment is completed in a timely manner. 


1. Create Figma Mockup - 20 mins
Before you get started let create a mockup of what your application will look like. 

Go to figma.com and create an account. Here we will work through create a mockup and prototype on figma together. 

Once the mockup is created you will go back to your React application and build out your first page(Sign up). 


![alt text](assets/signup.png.png)


2. Sign Up - 30mins-1hr
You will have create a sign in page similar to the one below. Add your own styling to make it more unique. 

Make sure to use the useState() hook to set your email, password and username. 

Also, create an handleSubmit for the for so that an action can be directed to the ToDo page after the submit the form. 

- This page will consist of a title.
- A small message prompting the user to sign up.
- An username, email and password field. 
- A Sign Up button. (For now the only functionality this button will have is when it is clicked on it will direct the user to the ToDo list page)


3. Create Figma Mockup(ToDoList) - 30 mins
Create mockup fo your you to do list page 


4. Input Form (ToDoForm page)
Create an input that takes in a task and adds it to your to do list. 


# Day 2

Today you will be creating your To Do List page. 
On this page you will be able to add the list of items, 
delete an item, edit and item and mark the item as completed. 

However please note the following should be on each page 

- ToDo.js (the task and actions such as - delete, edit, add should be inside this file) 


- ToDoList.js (the list of items that will be displayed) You may also include a logout and complete button on this page as well. 

- ToDoForm.js(The input form to add to the list)



### 1. Create mock data to test the application

You can first start off this section by creating a JSON file with a list of 3-4 items. You may also just add these items you ToDoList.js file. 

You want to make sure you set a id, title and state if the item has been completed or not. 

```

const [items, setItems] = useState ([
 {

        id: 1,
        title: "Grab some Pizza",
        completed: true
    },
    {
         id: 2,
         title: "Do your workout",
        completed: true
    },
    {
         id: 3,
        title: "Hangout with friends",
        completed: false
    }

    ])
```


### 2. Read list of to-dos and display

Now we want to test our ability to read a set of test data(our items). 

### 3. Map over items in ToDoList.js
Now we need to map over the items in our array and create individual todo components in our ToDoList.js file. 


```
     {tasks.map((task) => (
            <ToDo
                task={task}

            />
        ))}
```

### 4. In ToDo.js 
 From the ToDo component is the actual task that is on our list. 
  - We will also need to make use of the complete property on the todo object to indicate whether or not something is decorated with a strikethrough. 
  - Checkbox (checks the item and strikethrough)
  - An edit button (allows you to edit the item)
  - A delete button (allows you to delete the item)

Resources: [adding checkbox](https://contactmentor.com/checkbox-list-react-js-example/?expand_article=1)


### 5. Add a logout and completed task button

Create two buttons. One button that directs you back to the signup page and a completed button that directs you to the Completed task page. 


# Day 3

1. Completed task page 
Once you mark a task as complete it displays on the completed page. 


# Bonus
1. Set a pending for the number of task that after left to be completed.
2. Sign Page that saves the user information.
