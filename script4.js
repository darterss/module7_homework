let powerCons = 0;
const lamp = new Device('lamp', 10);
const computer = new Device('computer', 150);
const printer = new Device('printer', 60);


function Device(name = 'device', power = 0){
    this.name = name,
    this.power = power
}
Device.prototype.powerOn = function (){
    if (this.powerSwitch === true || this.powerSwitch !== undefined) return; //проверка ложных суммирований
    this.powerSwitch = true;
    powerCons += this.power;
}
Device.prototype.powerOff = function (){
    if (this.powerSwitch === false) return;                                  //проверка ложных суммирований
    else if (this.powerSwitch === undefined) this.powerSwitch = false;       //проверка ложных суммирований
    else {
        this.powerSwitch = false;
        powerCons -= this.power;
    }
}
lamp.powerOn();
computer.powerOn();
printer.powerOff();
lamp.powerOff();       // проверка ложных суммирований
computer.powerOn();    // проверка ложных суммирований
lamp.powerOff();       // проверка ложных суммирований
console.log('\n', lamp,'\n', computer,'\n', printer,'\n', 'power consumption:', powerCons);
