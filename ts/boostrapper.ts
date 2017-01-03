/// <reference path="vendingMachine.ts" />

var machine = new VendingMachine();
machine.size = VendingMachineSize.small;
ko.applyBindings(machine);