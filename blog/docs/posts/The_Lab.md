---
title: "The HomeLab Lives!"
date: 2024-07-08
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
- Plex Server
- Docker containers

We then have 3 x HP Mini PC's which are clustered together in Proxmox, allowing me to pool their processing power, ram and storage together to create one big super computer (sort of). So far, the HP cluster is running:

- Home Assistant to allow me to run my smart home completely independently from Apple, Google or Amazon.
- A ParrotOS linux VM so that I can hop on and do some HackTheBox challenges whenever I feel like it.
- PiHole to block pesky advertisements.

