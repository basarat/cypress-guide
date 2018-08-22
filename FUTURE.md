# Future Ideas 

## Cypress Runner Dom Snapshots
* Takes snapshots at each command execution 
* Takes before and after snapshots for things like XHR requests
* Inspect snapshot with chorme-dev-tools 
* Use "select an element" toold in chrome-dev-tools.
* Click a snapshot to pin it

## Mock Network requests and responses 

## Breakpoints
* Open devtools 

Two ways 
* `debugger` statement in application code
* Debugging test code
  * Debug command: https://docs.cypress.io/api/commands/debug.html# 
  * `.then(()=> debugger)`
