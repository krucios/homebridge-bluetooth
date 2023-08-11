import Noble from '@abandonware/noble';
import Characteristic from './src/characteristic.js';
import Service from './src/service.js';
import Accessory from './src/accessory.js';
import Platform from './src/platform.js';

export default function (homebridge) {
  console.log("Homebridge API version: " + homebridge.version);

  let BluetoothCharacteristic = Characteristic(homebridge.hap.Characteristic);
  let BluetoothService = Service(homebridge.hap.Service, BluetoothCharacteristic);
  let BluetoothAccessory = Accessory(homebridge.platformAccessory, BluetoothService);
  let BluetoothPlatform = Platform(Noble, homebridge.hap.uuid, homebridge.platformAccessory, BluetoothAccessory);

  homebridge.registerPlatform("Bluetooth", BluetoothPlatform);
};
