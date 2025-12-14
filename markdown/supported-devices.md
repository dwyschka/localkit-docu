# Supported Devices

Currently, there are only a limited set of Petkit Devices supported. Every device needs to be seperate implemented.

::: info
The Devices needs a modified firmware, the "legacy" - devices (ESP32 Based) are supported over OTA. 
:::

## Petkit Pura Max (ESP32)
![Petkit Pura Max](../assets/petkit-pura-max.webp)

Supported:
- [x] K3 Spray
- [x] Manual Control

## Petkit Elements Solo (ESP32)
![Petkit Elements Solo](../assets/petkit-elements-solo.png)

Supported:
- [x] Schedules
- [x] Manual Control


## Petkit Yumshare Solo (Ingenic / Embedded Linux)
![Petkit Elements Solo](../assets/petkit-elements-solo.png)

::: warning
Currently, there is no OTA - Support. To Enable Local Control, you need to disassembly the device and gain Serial Access.
:::

Supported:
- [x] Schedules
- [x] Manual Control