---
title: "HomeLab!!"
date: 2024-05-18
authors:
    - Ben
categories:
    - HomeLab
---

# HomeLab!

## **What On Earth is a HomeLab?**

In short, a HomeLab is... Whatever you want it to be! Thanks, cya!

Alright, not very helpful. A HomeLab is one or more computers in your home used for *stuff*. You could have a Network Attached Storage (NAS) device, holding all your favorite movies and tv shows, or a home assistant monitoring the temperature of your house, turning your lights off and on, or even feeding your cat, you could have a little Raspberry Pi setup as an adblocker so you never have to see an advert ever again - the possibilities are endless.

## **Where To Start?**
That was the question. 
### Raspberry Pi's ###
I already had a Raspberry Pi laying around, and there are endless things you can do with a Pi, but they don't have much processing power and are pretty limited on RAM. I could cluster them, but that would mean purchasing 3 or 4 Pi's and at around £55 for a 4GB model at the time of writing, the costs adds up fast! There are 8GB models available for £80 which when clustered would offer me enough *RAM* to do some interesting things, but then I'm constrained by the small CPU on the Pi, so the cost benefit analysis doesn't look great here. Time to look at other options.

![A Raspberry Pi](https://hackster.imgix.net/uploads/attachments/1633750/image_hy5GtL70A4.png?auto=compress%2Cformat&w=1200 "A Raspberry Pi")

### Repurpose a Desktop PC ###
I shot this idea down almost as quickly as it popped into my head. The one issue with a desktop PC is the power it uses. I can pack all the bells and whistles into it but it's going to absolutely drink power from the wall. Not to mention, I ideally want to get into virtualisaion and clustering, so putting all my eggs into one basket with a monolithic desktop PC doesn't give me any redundancy if it were to fail. Onto the next one.

![Desktop PC Server](https://blog.briancmoses.com/images/2016/homelab/assembled_02_1280.jpg "Desktop PC Server")

### Mini PC's ###
Since I want more of a fully fledged PC, with a somewhat decent CPU and a solid amount of RAM, mini PC's seem to fit the bill. They pack everything I want into a small package whilst also keeping power consumption down to a range not too dissimilar to a Raspberry Pi. In addition to this, there are tons of companies that use these mini PC's almost for the same reasons I want them. They pack enough of a punch to get the job done whilst keeping the energy costs down. So, companies use them for desktop PC's. Since most companies with a decent IT team will refresh their devices every 3-6 years, there are plenty of mini PC's on the market with 7th gen intel processors in them packed with 16GB of RAM, and they can be had from £50-£90 depending on how savvy the eBay seller is. This essentially means you're getting a faster CPU than a Pi, more ram (which is upgradeable) and they come with an SSD inside them rather than the microSD card of the Pi.

![Mini PC Cluster](https://www.servethehome.com/wp-content/uploads/2020/07/Project-MiniMicro-Cover-Forums.jpg "Mini PC Cluster")

> #### The Oopsie ####
In my excitement to bag the good deal I saw on eBay, I (stupidly) assumed these mini PC's would have quad core processors. They don't. They have 2. Given that quad core processors have been pretty common place since 2007, I thought it was a safe assumption that the CPUs in my mini PC's (originally released in 2017) would be quad core. I suppose being a mini PC cooling a quad core CPU would be more of a challenge, so to manage heat they slacked on cores. Boo.

Not a problem, that's where *Overcommitment* comes to the rescue - sort of. Since I'm not running machine learning models, gaming, or doing anything super intensive on these computers, their cores won't be utilized all the time anyway. This means I can allocate the same CPU core to two or more different virtual machines and they can both use it to complete their tasks. Think of it like hiring a chef, they're only 1 person but since they aren't going to be cooking *all of the time* they can clean the kitchen too! 2 jobs, 1 person. But, just like with our Chef, if the kitchen suddenly got swamped with orders there would be no time for his second job of cleaning, this is the same with overcommitting our CPU's. If I run *too much* there just wont be enough juice to go around. But, as long as I'm smart about it, this shouldn't be an issue.

## **Sustainability** ##
During this project, the sustainability angle is one I wanted to look at. Sure I could go out and buy whatever I wanted and build the perfect HomeLab from the ground up, but what about all that E-Waste? If these mini PC's don't get sold to people like me, they'll end up in landfill. Most people don't realise it but to make the average computer you need:

- Gold
- Silver
- Platinum
- Palladium
- Cobalt

and with companies refreshing these devices every 3-6 years, that's a lot of materials being dumped. So, as part of this project I wanted to give old hardware a new life! 

In addition to keeping these computers out of landfill, I picked something that was low power. These HP Mini PC's idle at <7w, meaning to run these things all year should cost me less than £20. Combine that with the solar panels on my roof and this entire project runs itself from the power of the sun and nothing had to be *specifically* manufactured to make it happen, every component is reused and the power supplied renewable.

![Solar Panels](https://www.moneysavingexpert.com/content/dam/shutterstock_1988665238%20(1).jpg "Solar Panels")

## Moving Forwards ##
I plan on keeping this category alive and writing up what I got up to with my HomeLab. Hopefully it'll be useful to anyone that is interested in this kind of thing and at the very least it'll be good documentation for me when I inevitably break something!