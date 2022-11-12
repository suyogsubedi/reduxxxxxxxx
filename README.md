## Redux Toolkit

<b>yarn add react-redux @reduxjs/toolkit </b>

## Basic Setup

**Now we need to setup the redux in our project so that the entire application can use the state provided by redux**


**So we are going to wrap the index.js with some code**

First of all we are going to configure a store, this can be added in different folder but in this project i have added it in the **index.js** file.
First we need to import configureStore which as the name suggest will helps us to configure our store then we will wrap our entire app with **Provider** which is given to us by redux. After we do this we need to tell the Provider what is the name of our store, in our case the store name is **store**. After we provide the store name we will move on to making slices.

## Slices

As we can have lots of global state in out application, we don't want things to get messy. We will create different slices for different states that we will be used in our application.

These slices are stored in a folder named as features **this is what the redux doc suggests**

Now we move on to making new slices. We need to import **createSlice** to make a new slice.

As all the state will have some sort of initial values we will store them in **initalStateValue**. Ofcourse the name can be anything

Now we make slice by using the **createSlice** that we imported earlier.

We need a name for our slice , then we tell the slice what their initialState is .

Now we have the reducers which will actually help us to manipulate the state.

Inside **user.js** we have made a login reducer which has state and action passed as a parameter. 

The state gives us access to the current state, action helps us to change the current state.

Inside the login reducer we have changed the state to the payload that the user has sent.


Now we need to export the reducers so that they can be used somewhere else.


## Moving back to index.js

Now as we have exported the required things we again need to tell the index.js file about the things that we have implemented.

Inside of the configureStore we add the reducers that we have exported.


## Using the reducers in Login.jsx

To use the reducers that we have created we need **useDispatch** which is given by the "react-redux" library

We also need to import the reducers from the features folder

Now we assign useDispatch() to a variable and then use it inside our code.

## Inside Profile.jsx

We manipulated the state by using **useDispatch**, Now we will access the state data by using **useSelector**. We can use the values that we get from **useSelector** inside our application.

--------------------------------------------------------

Learned these from PedroTech <a href="https://www.youtube.com/watch?v=k68j9xlbHHk&t=945s&ab_channel=PedroTech"> Youtube Channel</a> 
