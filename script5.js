let powerCons = 0;

class Device{
    constructor (name = 'device', power = 0){
    this.name = name,
    this.power = power
    }
    powerOn (){
        if (this.powerSwitch === true || this.powerSwitch !== undefined) return; //проверка ложных суммирований
        this.powerSwitch = true;
        powerCons += this.power;
    }
    powerOff (){
        if (this.powerSwitch === false) return;                                  //проверка ложных суммирований
        else if (this.powerSwitch === undefined) this.powerSwitch = false;       //проверка ложных суммирований
        else {
            this.powerSwitch = false;
            powerCons -= this.power;
        }
    }
}

const lamp = new Device('lamp', 10);
const computer = new Device('computer', 150);
const printer = new Device('printer', 60);

lamp.powerOn();
computer.powerOn();
printer.powerOff();
lamp.powerOff();       // проверка ложных суммирований
computer.powerOn();    // проверка ложных суммирований
lamp.powerOff();       // проверка ложных суммирований
console.log('\n', lamp,'\n', computer,'\n', printer,'\n', 'power consumption:', powerCons);