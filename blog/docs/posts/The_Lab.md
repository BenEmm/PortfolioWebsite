---
title: "The HomeLab Lives!"
date: 2024-06-08
authors:
    - Ben
categories:
    - HomeLab
---

# The Lab!
![Ben's HomeLab](https://i.imgur.com/DtWSC0e.jpeg "Synology NAS and HP Mini PC's")


## **What Is All That Stuff?**

From left to right I'm using a Synology DS420j NAS, with 10TB of storage in Synology Hybrid Raid offering one disk redundancy. This NAS runs:

- Multiple file shares for media streaming (using DNLA to stream to any device in the house), computer backups, and photo backups.
- Plex Server (experimental, it may replace the DNLA stuff)
- Various Docker containers

We then have 3 x HP Mini PC's which are clustered together in Proxmox, allowing me to pool their processing power, ram and storage together to create one big super computer (sort of). So far, the HP cluster is running:

- Home Assistant to allow me to run my smart home completely independently from Apple, Google or Amazon.
- A ParrotOS linux VM so that I can hop on and do some HackTheBox challenges whenever I feel like it.
- PiHole to block pesky advertisements.

And honestly... That's it so far. I've been looking at a bunch of cool projects to potentially undertake but for now I'm just enjoying having a HomeLab to experiment with and having it all *not* broken. 

Having the ParrotOS VM up and running whenever I want it is especially nice. So often I wanted to experiment with something in Linux or do a quick challenge on HackTheBox and I couldn't be bothered dealing with VMWare or VirtualBox which would inevitably force me to update before I could do anything, but now I just have a VM running whenever I want it! 

The HomeAssistant has also been awesome. I've managed to create a neat dashboard which tracks the weather around our local area, shows me all my home security cameras in one place, and even allows me to control lights in all of our rooms (once I get around to adding the smart bulbs that is).



