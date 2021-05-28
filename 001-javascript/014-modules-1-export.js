/**
 *  Modules:
 *  -   Module is the mechanism to build modules natively. 
 *  -   export keyword is use to create the module. 
 *  -   import keyword is use to use the module
 *  -   encapsulate code.
 *  -   control access
 *  -   Reference its own depencies.
 *  -   Characteristics:
 *      -   Modules are Singleton.
 *      -   Properties are bound.
 *      -   Exports are static.
 *      -   One module per file.
 * 
 *  -   To export the module, we need to specify in package.json:
 *          "type" : "module"
 */

var export_message= "This is the sample message to be exported";

export default function exportFunction(message) {
    console.log("ExportFunction is printing : " + message);
}

// export {export_message, exportFunction};
// export {exportFunction as default, export_message};
export {export_message}