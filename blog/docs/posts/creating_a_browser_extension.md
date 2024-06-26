---
title: "Creating A Browser Extension"
date: 2024-04-28
authors:
    - Ben
categories:
    - General
---

# Creating A Browser Extension - Focus Search
Browser Extensions. We've all probably used them at some point. Whether it's to block adverts or to improve the functionality of websites, browser extensions have proven to be nifty little gadgets for well over a decade.
It was this nifty-ness that prompted me to become interested in them. They we're easy to distribute - people just clicked "install" in an app store, they were lightweight, yet had the power to transform the internet - count me in!

So, long story short I developed an extremely niche browser extension which now has over 100 users worldwide, it's open source, and has been growing steadily since it's release.

![Focus Search](https://lh3.googleusercontent.com/W4BISpwdGYCT1ZDOvB4TlZ7WZz5RoekgUw1IQhcK6euXJoxLOAGQHh9cSdWtw_KIVZCdZ_h3fASJxX4easUyM-yL=s1280-w1280-h800)

The processes has been extremely rewarding on multiple fronts. 
I first came up with the idea for Focus Search whilst at university. When researching for an essay, or trying to solve a bug in my programming work, I'd do what everyone does - go to a search engine or website and *search* for my issue. The problem was I always found I'd have to manually click inside the search box on any given website to begin my search. It seemed obvious that if I were going to a library, directory, or eCommerce website I already have an idea of what I'm looking for in my head, I'm not going to click around to browse, so why not have the search bar automatically "in focus" ready for me to type? Why force me to tediously move my hands from my keyboard, click the search box, then go back to typing each time?

I'm aware that this seems like a very minor inconvenience - if we can even call it that, but for people doing 50-100 of these searches per day, it because extremely annoying! (I did warn you this addon was niche).

Anyway - I took this idea to my university supervisor planning to create it for my "final year project". However, I was told in no uncertain terms that it was pretty useless, served no real world purpose and wasn't really complex enough to be considered for the project. Annoyed, I shelved the idea whilst I continued my studies. At this time, i'd conducted market research to see if anything like my idea existed, because why go to all the trouble building it if I could just click "install" and have this problem solved for me? Well, it didn't exist. I checked the Chrome Addon Store, the Mozilla addon store and even looked around forums - nobody was offering anything.

Cut to 4 months later after I'd finished university, I revisited this idea as I was still annoyed by the way the web worked. To my surprise, not one but three addons had now popped up solving the issue I'd originally identified. Even more surprising, all together they had **thousands** of users! This meant not only had other people created a solution to the problem I'd originally identified, but thousands of people were waiting in the wings actively looking for a solution to this problem as well!

Armed with this exciting new knowledge I set to work immediately. The first step was of course, market research:

1. What were my competitors offering?
2. How have they implemented the features?
3. What do their users praise it for on the reviews page.
4. How does it look, is it simple to use?
5. Why do people go back?

Those were the 5 criteria I focused on. My thinking was that if I could match, or even **beat** them at these 5 things, I'd be in a good place.
So, after hours of testing out my competitors addons (thanks guys!) I got to work... 

The first thing that became clear was that the second the user hits install, the addon needs to be working. No setup screens, no interaction from the user, just install and away you go.
The implementation step was fairly simple. The whole point of the addon is that it automates an action for the user, so the implementation of the feature is, well, automatic. The second a search bar is seen by the addon it highlights it ready for the user to type. Where I differentiated myself was allowing the user to also trigger it with a keybind. This added flexibility and was something I'd seen people request in the reviews section on my competitors pages - score 1 for Focus Search!

It was at this point I realised I had what the Agile software development methodology calls a *"Minimum Viable Product"* this meant that whilst it wasn't perfect, the addon was already in a state where it did what I set out to do. So, it was at this point I released it into the world! I was already weeks behind my competitors, so I had no time to waste. I threw some branding together, created a quick and snappy video trailer for the store page and made my work public!

With the addon now out there and gaining users, albeit in it's *Minimum Viable Product* form, it was time to transform it into something I was proud of, and something that users would enjoy using. After all, if you look at Apple and Android phones they arent *really* that different. They both call and text, they both let you use apps, they both have cameras and finger print scanners... And yet Apple has a cult following. Why? **Ease of use**. I'd be fighting a similar battle with my addon. Since my competitors addons achieved the exact same end goal as mine, how would I differentiate myself? How would I keep people coming back and make new users *want* to use my addon? A sleek user interface with simple controls was needed.

So that's exactly what I created.

![Focus Search UI](https://i.postimg.cc/tT5FjFvq/hzbex3-Bh-Bh.png)

People don't care about the addon, not in the same way I do. They just need to understand which button represents it, and know how to interact with it. The interface for Focus Search features a small logo, representing the addon - whenever users see this logo they'll know what it links to. Below that, a great big Blue toggle button right in the middle of the screen with text reading **"ON"** so that the user can be in no doubt that the addon is switched on and functioning. When they click this toggle, the button changes to a Grey colour with text reading **"OFF"** so that... you guessed it, the user can be in no doubt the addon is switched off and won't function until they decide to turn it back on.

**Now for my big brain move** I thought to myself, what about user retention? What about when someone starts to question whether this Focus Search thing is even working, or if it's helping them at all? 
So, I decided to add a *Time Saved* metric to the bottom of the addon. This metric is tracked in the background whenever the addon triggers and tallies the amount of time the addon has saved the user. **THAT** was my golden idea. Appeal to self interest! Let the user know that the addon is working *FOR* them. It's all well and good having a great piece of software, but if the user doesn't understand *WHY* it's great, they'll never care!

Below that I've added a button that links to the Focus Search website. This was purely to give the addon some credibility. Yes it might look nice and yes it may function well, but who is behind it? Some savvy users might want to know a bit more about a "company" before they go and install their software on their computers. So, I created a short but snappy page explaining the history of Focus Search and who makes it - **ME!**