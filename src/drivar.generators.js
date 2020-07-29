function getGlobalVariablesStatement(block, addLineReturn) {
  if(addLineReturn=== undefined) {
    addLineReturn = true;
  }
  // taken from blockly/blob/master/generators/python/procedures.js
  var globals = [];
  var workspace = block.workspace;
  var varName;
  var variables = workspace.getAllVariables() || [];
  for (var i = 0, variable; variable = variables[i]; i++) {
    varName = variable.name;
//    if (block.arguments_.indexOf(varName) == -1) {
      globals.push(Blockly.Python.variableDB_.getName(varName,
          Blockly.Variables.NAME_TYPE));
//    }
  }
  var globals = globals.length ? '  global ' + globals.join(', ') + (addLineReturn?'\n':'') : '';
  return globals;
}


Blockly.Python['motor_forward'] = function(block) {
  code+='drivar.motor_move(durationInMs=2000)\n';
  return code;
};

Blockly.Python['motor_backward'] = function(block) {
  code+='drivar.motor_move(direction=Drivar.BACKWARD,durationInMs=2000)\n';
  return code;
};

Blockly.Python['motor_turn'] = function(block) {
  code+='drivar.motor_turn(durationInMs=2000)\n';
  return code;
};
