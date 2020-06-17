# dyna-node-arguments

Simplify the way you read nodeJS command line arguments.

The double dash used to declare a variable and the rest are the values of the variable.

The `ynaNodeArguments` is an object variable with values.

# Import

``` 
import {dynaNodeArguments} from "dyna-node-arguments"
``` 

# Examples

### command line: node build master.ts

The `dynaNodeArguments` is:

``` 
{
  "root": "build master.ts",
}
``` 

### command line: node build master.ts --ENV_MODE production

The `dynaNodeArguments` is:

``` 
{
  "root": "build master.ts",
  "ENV_MODE": "production",
}
``` 

### command line: node build master.ts --ENV_MODE production secure

The `dynaNodeArguments` is:

``` 
{
  "root": "build master.ts",
  "ENV_MODE": "production secure",
}
``` 

### command line: node build master.ts --ENV_MODE production secure --TARGET mobile android

The `dynaNodeArguments` is:

``` 
{
  "root": "build master.ts",
  "ENV_MODE": "production secure",
  "TARGET": "mobile android",
}
``` 

### command line: node build master.ts --ENV_MODE production secure -- basics --TARGET mobile android

The double dash in the middle it is used to define a value for the `root` variable/property.

The `dynaNodeArguments` is:

``` 
{
  "root": "build master.ts basics",
  "ENV_MODE": "production secure",
  "TARGET": "mobile android",
}
``` 

### command line: node build master.ts --ENV_MODE production -secure -- -verbose

The `dynaNodeArguments` is:

``` 
Object {
  "root": "build master.ts -verbose",
  "ENV_MODE": "production -secure",
}
``` 

