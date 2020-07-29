
Blockly.Blocks['motor_forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blockly/assets/images/motor_forward.png", 70,70, "Move forward"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("Move the robot forward");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_backward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blockly/assets/images/motor_backward.png", 70,70, "Move backward"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("Move the robot backwards");
 this.setHelpUrl("");
  }
};
 
//
//Blockly.Blocks['light_on'] = {
//  init: function() {
//    this.appendDummyInput()
//        .appendField(new Blockly.FieldImage("blockly/assets/images/light_on.png", 70,70, "Turn on the spotlight"));
//    this.setPreviousStatement(true, null);
//    this.setNextStatement(true, null);
//    this.setColour(210);
// this.setTooltip("Allume le spot camera");
// this.setHelpUrl("");
//  }
//};
//
//Blockly.Blocks['light_off'] = {
//  init: function() {
//    this.appendDummyInput()
//        .appendField(new Blockly.FieldImage("blockly/assets/images/light_off.png", 70,70, "Turn off the spotlight"));
//    this.setPreviousStatement(true, null);
//    this.setNextStatement(true, null);
//    this.setColour(210);
// this.setTooltip("Eteint le spot caméra");
// this.setHelpUrl("");
//  }
//};


//Blockly.Blocks['camera_pan_left'] = {
//  init: function() {
//    this.appendDummyInput()
//        .appendField(new Blockly.FieldImage("blockly/assets/images/camera_pan_left.png", 70,70, "Camera Pan Left"));
//    this.setPreviousStatement(true, null);
//    this.setNextStatement(true, null);
//    this.setColour(165);
// this.setTooltip("Pivote la camera sur la gauche");
// this.setHelpUrl("");
//  }
//};
//Blockly.Blocks['camera_pan_right'] = {
//  init: function() {
//    this.appendDummyInput()
//        .appendField(new Blockly.FieldImage("blockly/assets/images/camera_pan_right.png", 70,70, "Camera Pan Right"));
//    this.setPreviousStatement(true, null);
//    this.setNextStatement(true, null);
//    this.setColour(165);
// this.setTooltip("Pivote la camera sur la droite");
// this.setHelpUrl("");
//  }
//};
//
//Blockly.Blocks['camera_tilt_up'] = {
//  init: function() {
//    this.appendDummyInput()
//        .appendField(new Blockly.FieldImage("blockly/assets/images/camera_tilt_up.png", 70,70, "Camera Tilt Up"));
//    this.setPreviousStatement(true, null);
//    this.setNextStatement(true, null);
//    this.setColour(165);
// this.setTooltip("Pivote la camera vers le haut");
// this.setHelpUrl("");
//  }
//};
//
//Blockly.Blocks['camera_tilt_down'] = {
//  init: function() {
//    this.appendDummyInput()
//        .appendField(new Blockly.FieldImage("blockly/assets/images/camera_tilt_down.png", 70,70, "Camera Tilt Down"));
//    this.setPreviousStatement(true, null);
//    this.setNextStatement(true, null);
//    this.setColour(165);
// this.setTooltip("Pivote la camera vers le bas");
// this.setHelpUrl("");
//  }
//};
//


