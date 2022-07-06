# 😎😎Section Notes

## 😍JS is a high-level, prototype-based, object-oriented, multi-paradigm, interpreted or just on time compiled, dynamic, single-threaded, garbage-collected language with first-class functions and non-blocking event loop concurrency model.

- ✅HIGH-LEVEL--> developer does not have to worry about everything(hardware management) everything done automatically by the language.

* ✅GARBAGE-COLLECTED--> a peice of js algorithm which responsible about cleaning the memory from unused variables/objects
* ✅INTERPRETED OR JUST-IN-TIME COMPILED --> script-based this means code executed line-by-line.

* ✅MULTI-PARADIGM--> an approach or mindset of code structuring, like Function Programming/ Object-Oriented-Programming.
  /Procedural Programming{which we use now,-imperative way}.

- ✅PROTOTYPE-BASED--> any object{from a constructor function} inherit the prototype.

* ✅FIRST-CLASS FUNCTIONS--> the function treated as a variables which means that a function can return a function, take a function as a parameter.

* ✅DYNAMIC--> he type is implicitly detected.

* ✅SINGLE THREAD--> js can do only one thing at a time.

* ✅NON-BLOCKING EVENT LOOP--> takes long running tasks, execute them in the background, and puts them back in the main thread once they are finished{handled by the WEB-API}, takes ready function from callback to the call-stack.

## 😍JS ENGINE{heap,call stack, web api}--> the program that executes js code{like v8}.

## 😍WEB-API{DOM, timers, fetch....},{exist only on the browser, not exist on nodejs instead there is a thread-pool}--> functionalities provided to the engine, and accessible on window object but its not a part from the js.

## 😍JUST-IN-TIME COMPILATION--> js using a mixed way between interpreting/compiling, the entire code firstly converted into machine code at one, then executed immediately.

## 😍CODE OPTIMIZATION--> an intermedait process happens to the machine code in a special thead away from the main thread to make code faster gradually between compilation/executing phases

## 😍EXECUTION-CONTEXT--> environment in which a piece of js is executed, stores all the necessary information for some code to be executed.

## 😳types of scope?

- ✅global.
- ✅function.
- ✅block

## 😍let,const are block-scoped, but var is a function-scoped{end up in the closest function scope}

## 😍Hoisting?--> JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution, regardless of whether their scope is global or local.in every new execution context initiated and hoisting working again and doing recreating/ re-execution again .... and so on, to avoid hoisting we have to using let/const instead of var to prevent re-hoisting again.=> to prevent using variables/functions/objects before declaration and assignment

## 😍this --> is the object that the function is property of
