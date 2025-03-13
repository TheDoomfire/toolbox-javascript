# Toolbox Javascript

This is a toolbox of javascript code that I use in my projects.
The main goal is having very structured code, classes and functions that is fast to find and easy to use correctly.


## Why?

I find myself writing the same types or slightly different types from time to time.
And when I do make components I don't remember where they are or how they work.

By having main classes that tells what it's about and then having static to further explain what it does I think it can be easier to find and then use what I need.

### Example 1:

- `Class ObjectUtils`
    - `find(obj, target)`

Now it's clear when I need something done with a **Object** I can go to `ObjectUtils`.

Now I need to **find** something and the static find makes it also clear.

`target` input is supposed to **represent any type of target** you would want. 
So far both a key and a object works.

The result is supposed to return everything it finds so you can pick what you want.

#### Possible improvements

I am still not sure what I will need in the future.
The idea is that I will improve these whenever I need them.

##### Find

- Have target values
    - Finding a key/object based on a value.
- Use args like this: `find(obj, ...target)`
    - So you can pass in multiple targets.
    - To add support for more than one target.

##### Add more statics / functions

- Remove - Remove a key/object from an object.
- Add - Add a key/object to an object.
- Create - Create a new object.



## Structure:

Current Idea

```
src/
├── core/                # Core utilities used internally
│   └── config.js        # Shared configuration (singleton pattern)
├── objects/             # Object-related utilities
│   ├── object-utils.js  # Object class
│   └── index.js         # Exports public methods
├── formatters/          # Formatting utilities
│   ├── number-formatter.js
│   ├── date-formatter.js
│   └── index.js
├── converters/          # Unit conversion
│   ├── time-converter.js
│   └── area-converter.js
├── data/                # Data processing
│   ├── data-reader.js   # Fetch/read data
│   ├── data-cleaner.js
│   └── data-finder.js
├── dom/                 # DOM manipulation
│   ├── dom-selector.js  # Get elements
│   ├── dom-editor.js    # Modify elements
│   └── event-listeners.js
└── index.js             # Main entry point (exports all public APIs)
```


## TODO:

- Make a proper readme file.
    - Add descriptions of each function.
    - Add examples.

- Minify code? Tree shaking?


**Folders:**
- dist/ - Built/compiled code for npm?
- package.json - npm package file.
- src/ - Source code. (Needed for javascript)

**Classes**

I probably gonna want a main config.js incase I have things I wanna reuse within this project.
To save data/variables.

I also likely gonna using classes within classes for certain things. But hopefully as little classes as possible are exported to be used by other projects.

All classes need to require as little inputs as possible that will understand what function is desired.
For example if I need a file name in I don't need to type in json but it will just get the file extension.
And it should return most stuff so its easy to get what you need.



- Objects - I currently have static find(obj, target) that in a obj targeting key/obj return list the path + value + object.
I want to add more to it like add to object, remove from object, create object, etc
- Formatters - To make things look pretty.
    EXAMPLE: 
    number, 
    date, 
    currency, 
    percent, 
    years/time
- Converters - Convert from one unit to all others.
    EXAMPLE:
    time,
    area,

- Data
    Reader - read/fetch data from a file.
    Cleaner - clean data. Remove/replace/add/etc.
    Finder - find data in a file.

- Elements/dom
EXAMPLE:
    Target/Select: Get one, a selection of a few, or all elements using something like a class, id, etc.
    Get: data/value/etc
    Edit: data/value/etc
    Add: data/value/etc to a element.
    Create: create dynamic elements, or tables/charts.
- Listeners - for each type of eventlistners etc.